import type { Metadata } from "next";
import Link from "next/link";
import ExperienceEntry from "@/components/ExperienceEntry";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import { ArrowRight } from "@/components/Icons";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Ben Fielder's work history, technical skills and education: Content Guru, Renishaw and a Computer Science degree from the University of Warwick.",
    alternates: { canonical: "/experience" },
};

const sections = [
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#interests", label: "Interests" },
];

export default function ExperiencePage() {
    return (
        <>
            <PageIntro
                eyebrow="Experience"
                title={
                    <>
                        Work, <em className="text-accent">skills</em> and education.
                    </>
                }
                intro="A year of professional C#/.NET and TypeScript work on an enterprise contact-centre platform, a summer placement in precision engineering, and a Computer Science degree."
            >
                <nav aria-label="Sections" className="flex flex-wrap gap-2">
                    {sections.map((s) => (
                        <a
                            key={s.href}
                            href={s.href}
                            className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>
            </PageIntro>

            <Section
                id="work"
                number="01"
                title="Work"
                intro="Production .NET services, integrations with enterprise systems, and test-first delivery."
            >
                {experience.map((item) => (
                    <ExperienceEntry key={item.id} item={item} />
                ))}
            </Section>

            <Section
                id="skills"
                number="02"
                title="Skills"
                intro="What I use day to day, and what I reach for on my own projects."
            >
                <dl className="divide-y divide-line border-y border-line">
                    {skillGroups.map((group) => (
                        <div key={group.name} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
                            <dt className="font-medium">{group.name}</dt>
                            <dd className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <span key={item} className="tag">
                                        {item}
                                    </span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Section>

            <Section id="education" number="03" title="Education">
                <div className="grid gap-6 md:grid-cols-2">
                    {education.map((item) => (
                        <article key={item.id} className="card rounded-xl p-6 md:p-7">
                            <div className="flex items-start justify-between gap-4">
                                <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-faint">{item.period}</p>
                                <p className="display text-3xl leading-none text-accent">{item.grade}</p>
                            </div>
                            <h3 className="display mt-6 text-2xl">{item.qualification}</h3>
                            <p className="text-fg-muted">
                                {item.institution}
                                <span className="text-fg-faint"> · {item.gradeLabel}</span>
                            </p>
                            <p className="eyebrow mb-2 mt-6">{item.detailLabel}</p>
                            <p className="text-sm leading-relaxed text-fg-muted">{item.details.join(", ")}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section id="interests" number="04" title={profile.interests.title}>
                <div className="grid gap-8 lg:grid-cols-[1fr_16rem] lg:gap-12">
                    <div>
                        <p className="max-w-3xl text-lg leading-relaxed text-fg-muted">{profile.interests.body}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link href="/cv" className="btn btn-primary">
                                View CV
                                <ArrowRight width={16} height={16} />
                            </Link>
                            <Link href="/contact" className="btn btn-secondary">
                                Get in touch
                            </Link>
                        </div>
                    </div>
                    <ul className="space-y-4 lg:border-l lg:border-line lg:pl-8">
                        {profile.interests.stats.map((s) => (
                            <li key={s.label}>
                                <span className="display block text-3xl">{s.value}</span>
                                <span className="text-sm text-fg-faint">{s.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </>
    );
}
