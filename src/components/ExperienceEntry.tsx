import { ArrowUpRight } from "@/components/Icons";
import type { Experience } from "@/data/experience";

interface ExperienceEntryProps {
    item: Experience;
    /** Show only the first few highlights and skip the technology tags. */
    compact?: boolean;
}

export default function ExperienceEntry({ item, compact = false }: ExperienceEntryProps) {
    const highlights = compact ? item.highlights.slice(0, 3) : item.highlights;

    return (
        <article
            id={item.id}
            className="grid gap-4 border-b border-line py-10 first:pt-0 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
        >
            <p className="pt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-fg-faint">{item.period}</p>

            <div>
                <h3 className="display text-3xl">
                    {item.title} -{" "}
                    {item.companyUrl ? (
                        <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                        >
                            {item.company}
                            <ArrowUpRight width={18} height={18} className="text-fg-faint" />
                        </a>
                    ) : (
                        item.company
                    )}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">
                    {item.companyNote} · {item.team}
                </p>

                {item.roles ? (
                    <ol className="mt-5 space-y-1.5 border-l border-line-strong pl-4">
                        {item.roles.map((role, i) => (
                            <li
                                key={role.title}
                                className="relative flex flex-wrap items-baseline justify-between gap-x-4"
                            >
                                <span
                                    className={`absolute -left-[1.3rem] top-[0.55rem] h-2 w-2 rounded-full ${
                                        i === 0 ? "bg-accent" : "bg-line-strong"
                                    }`}
                                    aria-hidden="true"
                                />
                                <span className={i === 0 ? "font-medium text-fg" : "text-fg-muted"}>
                                    {role.title}
                                </span>
                                <span className="font-mono text-xs text-fg-faint">{role.period}</span>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p className="mt-5 font-medium">{item.title}</p>
                )}

                <p className="prose-measure mt-5 leading-relaxed text-fg-muted">{item.summary}</p>

                <ul className="mt-5 space-y-3">
                    {highlights.map((h) => (
                        <li key={h} className="relative pl-5 leading-relaxed">
                            <span className="absolute left-0 top-[0.7rem] h-px w-2.5 bg-accent" aria-hidden="true" />
                            {h}
                        </li>
                    ))}
                </ul>

                {!compact && (
                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {item.technologies.map((t) => (
                            <li key={t} className="tag">
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}
