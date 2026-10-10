import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
    title: "CV",
    description: "The CV of Ben Fielder, software engineer: C#/.NET, TypeScript and cloud-native delivery.",
    alternates: { canonical: "/cv" },
};

function CvHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="display mb-4 mt-10 border-b border-line pb-2 text-2xl print:mb-2 print:mt-5 print:pb-1 print:text-[15pt]">
            {children}
        </h2>
    );
}

export default function CvPage() {
    const github = profile.github.replace("https://", "");

    return (
        <div className="container-page pb-20 pt-10 md:pt-14 print:max-w-none print:p-0">
            <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="eyebrow">CV</p>
                    <p className="mt-2 max-w-md text-sm text-fg-muted">
                        This page prints as a clean A4 CV. Choose{" "}
                        <strong className="font-medium text-fg">Save as PDF</strong> in the print dialog to download a copy.
                    </p>
                </div>
                <PrintButton />
            </div>

            <article className="card mx-auto max-w-[52rem] rounded-2xl px-6 py-10 md:px-14 md:py-14 print:max-w-none print:rounded-none print:border-0 print:bg-transparent print:p-0 print:shadow-none">
                <header>
                    <h1 className="display text-5xl print:text-[26pt]">{profile.fullName}</h1>
                    <p className="mt-2 font-medium">
                        {profile.role} · {profile.disciplines.join(" · ")}
                    </p>
                    <p className="mt-2 flex flex-wrap gap-x-2 text-sm text-fg-muted">
                        <a href={`mailto:${profile.email}`} className="text-accent">
                            {profile.email}
                        </a>
                        <span aria-hidden="true">·</span>
                        <Link href="/" className="text-accent">
                            {profile.website}
                        </Link>
                        <span aria-hidden="true">·</span>
                        <a href={profile.github} className="text-accent">
                            {github}
                        </a>
                    </p>
                    <p className="mt-5 leading-relaxed">{profile.cvSummary}</p>
                </header>

                <CvHeading>Experience</CvHeading>
                <div className="space-y-7 print:space-y-4">
                    {experience.map((job) => (
                        <section key={job.id}>
                            <div className="print-avoid-break flex flex-wrap items-baseline justify-between gap-x-4">
                                <h3>
                                    <strong className="font-semibold">{job.title}</strong> · {job.company}
                                    <span className="text-fg-muted"> ({job.companyNote.toLowerCase()})</span>
                                </h3>
                                <span className="font-mono text-xs text-fg-faint">{job.period}</span>
                            </div>
                            {job.roles && job.roles.length > 1 && (
                                <p className="mt-1 text-sm text-fg-muted">
                                    {job.roles.map((r) => `${r.title} (${r.period})`).join(" · ")}
                                </p>
                            )}
                            <p className="mt-1 text-sm text-fg-muted">
                                {job.team}: {job.summary}
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] marker:text-fg-faint">
                                {job.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <CvHeading>Education</CvHeading>
                <div className="space-y-3">
                    {education.map((e) => (
                        <section key={e.id} className="print-avoid-break">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                                <h3>
                                    <strong className="font-semibold">
                                        {e.qualification}, {e.grade}
                                    </strong>{" "}
                                    · {e.institution}
                                </h3>
                                <span className="font-mono text-xs text-fg-faint">{e.period}</span>
                            </div>
                            <p className="text-sm text-fg-muted">
                                {e.detailLabel}: {e.details.join(", ")}
                            </p>
                        </section>
                    ))}
                </div>

                <CvHeading>Projects</CvHeading>
                <div className="space-y-6 print:space-y-3">
                    {featuredProjects.map((p) => (
                        <section key={p.id} className="print-avoid-break">
                            <h3>
                                <strong className="font-semibold">
                                    {p.title}: {p.tagline}
                                </strong>{" "}
                                <span className="text-sm text-fg-muted">· {p.technologies.join(", ")}</span>
                            </h3>
                            {p.githubLink && (
                                <a href={p.githubLink} className="text-sm text-accent">
                                    {p.githubLink.replace("https://", "")}
                                </a>
                            )}
                            <p className="mt-1 text-[0.95rem]">{p.description}</p>
                            {p.highlights && (
                                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[0.95rem] marker:text-fg-faint">
                                    {p.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                    <section className="print-avoid-break">
                        <h3>
                            <strong className="font-semibold">Portfolio, web apps &amp; games</strong>{" "}
                            <span className="text-sm text-fg-muted">· Next.js, React, three.js, p5.js, Unity/C#</span>
                        </h3>
                        <p className="mt-1 text-[0.95rem]">
                            Built and deployed benfielder.com, Sketch Vault and a WebGL game portal on Vercel with custom
                            domains and PR-based workflows. Developed Unity/C# mobile games under Space Worm Studio, taking
                            Pyramid Numbers through to Google Play submission.
                        </p>
                    </section>
                </div>

                <CvHeading>Technical skills</CvHeading>
                <ul className="space-y-1.5 text-[0.95rem]">
                    {skillGroups.map((g) => (
                        <li key={g.name}>
                            <strong className="font-semibold">{g.name}:</strong> {g.items.join(", ")}
                        </li>
                    ))}
                </ul>

                <CvHeading>Interests</CvHeading>
                <p className="print-avoid-break text-[0.95rem] leading-relaxed">
                    <strong className="font-semibold">Competitive swimming (13 years):</strong> 50m breaststroke sprinter;
                    qualified for Nationals in 2018 and every year 2023-2026, including the Aquatics GB Championships.
                    Reached the BUCS A final with Warwick&apos;s relay team. I design my own periodised training programmes,
                    which led to building Impulse.
                </p>
            </article>
        </div>
    );
}
