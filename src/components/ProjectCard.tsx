import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    imagePath: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    index?: number;
}

export default function ProjectCard({
    title,
    description,
    imagePath,
    technologies,
    demoLink,
    githubLink,
    index = 0,
}: ProjectCardProps) {
    return (
        <article
            className="group glass-card overflow-hidden animate-in opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Image container */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Action buttons overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent-cyan)] text-[var(--bg-primary)] transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 shadow-lg"
                            aria-label={`View live demo of ${title}`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    )}
                    {githubLink && (
                        <Link
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:scale-110 shadow-lg"
                            aria-label={`View source code of ${title}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                    {title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 4 && (
                        <span className="tech-badge text-xs">
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Bottom links (mobile-friendly) */}
                <div className="flex gap-3 pt-4 border-t border-[var(--glass-border)]">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 text-sm font-medium text-[var(--accent-cyan)] hover:bg-[var(--glass-bg)] rounded-lg transition-colors"
                        >
                            Live Demo
                        </Link>
                    )}
                    {githubLink && (
                        <Link
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)] rounded-lg transition-colors"
                        >
                            Source Code
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
