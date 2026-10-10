import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LIMITS = { name: 120, email: 200, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function asTrimmedString(value: unknown, max: number): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (trimmed.length === 0 || trimmed.length > max) return null;
    return trimmed;
}

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Honeypot: real visitors never see this field, so a value means a bot.
    if (typeof body.company === "string" && body.company.trim().length > 0) {
        return NextResponse.json({ success: true });
    }

    const name = asTrimmedString(body.name, LIMITS.name);
    const email = asTrimmedString(body.email, LIMITS.email);
    const message = asTrimmedString(body.message, LIMITS.message);

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
        return NextResponse.json({ error: "Please fill in every field with valid values" }, { status: 400 });
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO;

    if (!user || !pass || !to) {
        console.error("Contact form is not configured: EMAIL_USER, EMAIL_PASS and EMAIL_TO are required");
        return NextResponse.json({ error: "Contact form is unavailable" }, { status: 503 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user, pass },
        });

        // Strip line breaks so a crafted name cannot inject extra headers.
        const safeName = name.replace(/[\r\n]+/g, " ");

        await transporter.sendMail({
            from: user,
            to,
            replyTo: email,
            subject: `Portfolio message from ${safeName}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending contact email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
