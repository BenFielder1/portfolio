"use client";

import { useState } from "react";
import { Alert, ArrowRight, Check } from "@/components/Icons";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        setStatus("sending");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    message: data.get("message"),
                    company: data.get("company"),
                }),
            });
            if (!response.ok) throw new Error(`Request failed with ${response.status}`);
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
            {status === "success" && (
                <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-ok/30 bg-ok-soft p-4 text-sm"
                >
                    <Check width={18} height={18} className="mt-0.5 shrink-0 text-ok" />
                    <div>
                        <p className="font-medium text-fg">Message sent.</p>
                        <p className="mt-0.5 text-fg-muted">Thanks for getting in touch. I&apos;ll reply soon.</p>
                    </div>
                </div>
            )}

            {status === "error" && (
                <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-err/30 bg-err-soft p-4 text-sm"
                >
                    <Alert width={18} height={18} className="mt-0.5 shrink-0 text-err" />
                    <div>
                        <p className="font-medium text-fg">Something went wrong.</p>
                        <p className="mt-0.5 text-fg-muted">
                            Please try again, or email me directly at{" "}
                            <a href={`mailto:${profile.email}`} className="link-underline text-fg">
                                {profile.email}
                            </a>
                            .
                        </p>
                    </div>
                </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        placeholder="Your name"
                        className="field"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="field"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={5000}
                    placeholder="What would you like to talk about?"
                    className="field resize-y"
                />
            </div>

            {/* Honeypot: hidden from people, filled by naive bots. */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn btn-primary">
                {status === "sending" ? "Sending…" : "Send message"}
                <ArrowRight width={16} height={16} />
            </button>
        </form>
    );
}
