import Link from "next/link";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/Icons";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="no-print relative z-10 border-t border-line">
            <div className="container-page py-14">
                <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div>
                        <p className="display text-3xl">{profile.name}</p>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
                            {profile.role}. {profile.disciplines.join(", ")}.
                        </p>
                    </div>

                    <div>
                        <p className="eyebrow mb-4">Pages</p>
                        <ul className="space-y-2">
                            {navItems.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="eyebrow mb-4">Elsewhere</p>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                                >
                                    <Mail width={16} height={16} />
                                    {profile.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                                >
                                    <GitHub width={16} height={16} />
                                    GitHub
                                    <ArrowUpRight width={14} height={14} className="text-fg-faint" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                                >
                                    <LinkedIn width={16} height={16} />
                                    LinkedIn
                                    <ArrowUpRight width={14} height={14} className="text-fg-faint" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-faint sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} {profile.fullName}</p>
                    <p>Next.js · Tailwind CSS · Vercel</p>
                </div>
            </div>
        </footer>
    );
}
