import { ArrowUpRight, GitHub } from "@/components/Icons";
import type { Project } from "@/data/projects";

export default function ProjectLinks({ project }: { project: Project }) {
    if (!project.demoLink && !project.githubLink) return null;

    return (
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {project.demoLink && (
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-fg"
                    aria-label={`Open ${project.title}`}
                >
                    {project.demoLabel ?? "Visit"}
                    <ArrowUpRight width={15} height={15} />
                </a>
            )}
            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
                    aria-label={`Source code for ${project.title}`}
                >
                    <GitHub width={15} height={15} />
                    Source
                </a>
            )}
        </div>
    );
}
