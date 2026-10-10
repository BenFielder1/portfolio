import Image from "next/image";
import Link from "next/link";
import ExperienceEntry from "@/components/ExperienceEntry";
import FeaturedProject from "@/components/FeaturedProject";
import Section from "@/components/Section";
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/Icons";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { featuredProjects, otherProjects } from "@/data/projects";
import { profile } from "@/data/profile";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="container-page pb-16 pt-12 md:pb-24 md:pt-20">
                <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-14">
                    <div>
                        <p className="eyebrow rise flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
                                {profile.current.role} at {profile.current.company}
                            </span>
                        </p>
                        <h1
                            className="display rise mt-6 text-[2.6rem] sm:text-6xl lg:text-[5.25rem]"
                            style={delay(80)}
                        >
                            I build the services that <em className="text-accent">connect</em> enterprise platforms, and
                            the tooling I use to ship them.
                        </h1>
                        <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted" style={delay(160)}>
                            {profile.summary}
                        </p>

                        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(240)}>
                            <Link href="/contact" className="btn btn-primary">
                                Get in touch
                                <ArrowRight width={16} height={16} />
                            </Link>
                            <Link href="/cv" className="btn btn-secondary">
                                View CV
                            </Link>
                            <span className="ml-1 flex items-center gap-1">
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg"
                                >
                                    <GitHub width={18} height={18} />
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg"
                                >
                                    <LinkedIn width={18} height={18} />
                                </a>
                                <a
                                    href={`mailto:${profile.email}`}
                                    aria-label="Email"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg"
                                >
                                    <Mail width={18} height={18} />
                                </a>
                            </span>
                        </div>
                    </div>

                    <figure className="rise order-first md:order-none" style={delay(120)}>
                        <div className="card relative h-28 w-28 overflow-hidden rounded-full md:h-80 md:w-64 md:rounded-2xl">
                            <Image
                                src="/images/profile.jpg"
                                alt={`Portrait of ${profile.name}`}
                                fill
                                priority
                                sizes="(min-width: 768px) 256px, 112px"
                                className="img-dim object-cover"
                            />
                        </div>
                        <figcaption className="mt-3 hidden font-mono text-[0.68rem] uppercase tracking-[0.14em] text-fg-faint md:block">
                            {profile.name}
                        </figcaption>
                    </figure>
                </div>

                <dl className="mt-16 grid grid-cols-2 border-t border-line md:mt-24 lg:grid-cols-4">
                    {profile.stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`border-line pb-2 pr-6 pt-6 ${i % 2 === 1 ? "border-l pl-6" : ""} ${
                                i === 2 ? "lg:border-l lg:pl-6" : ""
                            } ${i >= 2 ? "max-lg:mt-4" : ""}`}
                        >
                            <dt className="sr-only">{s.label}</dt>
                            <dd>
                                <span className="display block text-4xl md:text-5xl">{s.value}</span>
                                <span className="mt-2 block text-sm leading-snug text-fg-faint">{s.label}</span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>

            <Section
                id="experience"
                number="01"
                title="Experience"
                intro="Production .NET services, integrations with enterprise systems, and test-first delivery."
                action={
                    <Link
                        href="/experience"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                    >
                        Full experience
                        <ArrowRight width={16} height={16} />
                    </Link>
                }
            >
                {experience.map((item) => (
                    <ExperienceEntry key={item.id} item={item} compact />
                ))}
            </Section>

            <Section
                id="projects"
                number="02"
                title="Selected work"
                intro="Things I build outside work, mostly around AI-assisted engineering."
            >
                {featuredProjects.map((project, i) => (
                    <FeaturedProject key={project.id} project={project} index={i} />
                ))}

                <div className="card mt-12 flex flex-col gap-6 rounded-xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
                    <div>
                        <p className="eyebrow">Also in the archive</p>
                        <p className="mt-2 text-fg-muted">{otherProjects.map((p) => p.title).join(" · ")}</p>
                    </div>
                    <Link href="/projects" className="btn btn-secondary shrink-0 self-start md:self-auto">
                        All projects
                        <ArrowRight width={16} height={16} />
                    </Link>
                </div>
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
                            <p className="text-fg-muted">{item.institution}</p>
                            <p className="eyebrow mb-2 mt-6">{item.detailLabel}</p>
                            <p className="text-sm leading-relaxed text-fg-muted">{item.details.join(", ")}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section id="about" number="04" title="Off the clock">
                <div className="grid gap-8 lg:grid-cols-[1fr_16rem] lg:gap-12">
                    <div className="space-y-5 text-lg leading-relaxed">
                        <p>
                            I&apos;ve been a competitive swimmer for thirteen years. I&apos;m a 50m breaststroke sprinter, and
                            I&apos;ve qualified for Nationals in 2018 and every year from 2023 to 2026, including the Aquatics GB
                            Championships. At Warwick I reached the BUCS A final with the university relay team.
                        </p>
                        <p className="text-fg-muted">
                            I write my own periodised training programmes. Doing that in spreadsheets is what led me to build{" "}
                            <Link href="/projects#impulse" className="link-underline text-fg">
                                Impulse
                            </Link>
                            .
                        </p>
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

            {/* Contact call to action */}
            <section className="container-page pb-20 md:pb-28">
                <div className="border-t border-line pt-16 md:pt-24">
                    <p className="eyebrow">
                        <span className="text-accent">05</span>
                        <span className="ml-3">Contact</span>
                    </p>
                    <h2 className="display mt-4 text-5xl sm:text-7xl lg:text-8xl">
                        Let&apos;s <em className="text-accent">talk</em>.
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                        I&apos;m interested in .NET work that spans APIs, cloud and AI-assisted engineering. If you&apos;re hiring
                        or want to chat about something I&apos;ve built, get in touch.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <a
                            href={`mailto:${profile.email}`}
                            className="display link-underline inline-flex items-center gap-2 text-2xl sm:text-3xl"
                        >
                            {profile.email}
                            <ArrowUpRight width={20} height={20} className="text-accent" />
                        </a>
                        <Link href="/contact" className="btn btn-secondary">
                            Or send a message
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
