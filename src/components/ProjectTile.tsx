import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";
import type { Project } from "@/data/projects";

export default function ProjectTile({ project }: { project: Project }) {
    return (
        <article id={project.id} className="group flex flex-col">
            <div className="card relative aspect-[16/10] overflow-hidden rounded-lg">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="img-dim object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-end bg-accent-soft p-5">
                        <p className="display text-3xl">{project.title}</p>
                    </div>
                )}
            </div>
            <div className="mt-4 flex flex-1 flex-col">
                <p className="eyebrow">{project.category}</p>
                <h3 className="mt-1.5 text-lg font-medium">
                    {project.title}
                    <span className="font-normal text-fg-faint"> · {project.tagline}</span>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{project.description}</p>
                <p className="mt-3 font-mono text-xs text-fg-faint">{project.technologies.join(" · ")}</p>
                <div className="mt-4">
                    <ProjectLinks project={project} />
                </div>
            </div>
        </article>
    );
}
