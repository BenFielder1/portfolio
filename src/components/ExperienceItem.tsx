interface ExperienceItemProps {
    company: string;
    position: string;
    date: string;
    description: string;
    technologies: string[];
    isLast?: boolean;
}

export default function ExperienceItem({
    company,
    position,
    date,
    description,
    technologies,
    isLast = false,
}: ExperienceItemProps) {
    return (
        <div className="relative pl-8 pb-12 group">
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-purple)] opacity-30" />
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)] group-hover:scale-125 transition-transform duration-300" />
            
            {/* Content card */}
            <div className="glass-card p-6 ml-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                            {position}
                        </h3>
                        <p className="text-[var(--accent-cyan)] font-medium">
                            {company}
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm font-mono text-[var(--text-muted)] whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {date}
                    </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {description}
                </p>

                {/* Technologies */}
                <div>
                    <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-mono">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
