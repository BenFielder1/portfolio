import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";
import type { Project } from "@/data/projects";

interface FeaturedProjectProps {
    project: Project;
    index: number;
}

export default function FeaturedProject({ project, index }: FeaturedProjectProps) {
    const number = String(index + 1).padStart(2, "0");

    return (
        <article id={project.id} className="border-b border-line py-10 first:pt-0 last:border-b-0">
            {project.image && (
                <div className="card relative mb-6 aspect-[16/7] overflow-hidden rounded-xl">
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 840px, 100vw"
                        className="img-dim object-cover object-top"
                    />
                </div>
            )}

            <div className="grid gap-6 lg:grid-cols-[1fr_15rem] lg:gap-10">
                <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-mono text-xs text-accent">{number}</span>
                        <h3 className="display text-3xl">{project.title}</h3>
                        <span className="display text-xl italic text-fg-muted">{project.tagline}</span>
                    </div>
                    <p className="mt-3 leading-relaxed text-fg-muted">{project.description}</p>

                    {project.highlights && (
                        <ul className="mt-4 space-y-2.5">
                            {project.highlights.map((h) => (
                                <li key={h} className="relative pl-5 text-[0.95rem] leading-relaxed">
                                    <span
                                        className="absolute left-0 top-[0.7rem] h-px w-2.5 bg-accent"
                                        aria-hidden="true"
                                    />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <aside className="space-y-5 lg:border-l lg:border-line lg:pl-6">
                    {project.status && (
                        <p className="inline-flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
                            {project.status}
                        </p>
                    )}
                    <div>
                        <p className="eyebrow mb-2">Stack</p>
                        <ul className="flex flex-wrap gap-1.5">
                            {project.technologies.map((t) => (
                                <li key={t} className="tag">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ProjectLinks project={project} />
                </aside>
            </div>
        </article>
    );
}
