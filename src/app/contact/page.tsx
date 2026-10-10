import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/Icons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ben Fielder by email, LinkedIn or the contact form.",
    alternates: { canonical: "/contact" },
};

const channels = [
    {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail,
        external: false,
    },
    {
        label: "GitHub",
        value: `github.com/${profile.githubHandle}`,
        href: profile.github,
        icon: GitHub,
        external: true,
    },
    {
        label: "LinkedIn",
        value: "Ben Fielder",
        href: profile.linkedin,
        icon: LinkedIn,
        external: true,
    },
];

export default function ContactPage() {
    return (
        <>
            <PageIntro
                eyebrow="Contact"
                title={
                    <>
                        Say <em className="text-accent">hello</em>.
                    </>
                }
                intro="Whether it's a role, a project or a question about something I've built, I'm happy to hear from you. I usually reply within a couple of days."
            />

            <div className="container-page pb-24">
                <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-16">
                    <aside>
                        <p className="eyebrow mb-5">Direct</p>
                        <ul className="divide-y divide-line border-y border-line">
                            {channels.map((c) => {
                                const Icon = c.icon;
                                return (
                                    <li key={c.label}>
                                        <a
                                            href={c.href}
                                            target={c.external ? "_blank" : undefined}
                                            rel={c.external ? "noopener noreferrer" : undefined}
                                            className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
                                        >
                                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition-colors group-hover:border-accent group-hover:text-accent">
                                                <Icon width={17} height={17} />
                                            </span>
                                            <span className="min-w-0 flex-1">
                                                <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-fg-faint">
                                                    {c.label}
                                                </span>
                                                <span className="block truncate text-sm font-medium text-fg group-hover:text-accent">
                                                    {c.value}
                                                </span>
                                            </span>
                                            {c.external && (
                                                <ArrowUpRight width={16} height={16} className="shrink-0 text-fg-faint" />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>

                    <div className="card relative rounded-3xl p-6 md:p-10">
                        <p className="eyebrow mb-6">Message</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}
