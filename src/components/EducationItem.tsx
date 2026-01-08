interface EducationItemProps {
    institution: string;
    degree: string;
    date: string;
    description: string;
    courses?: string[];
    grade: string;
    isLast?: boolean;
}

export default function EducationItem({
    institution,
    degree,
    date,
    description,
    courses,
    grade,
    isLast = false,
}: EducationItemProps) {
    return (
        <div className="relative pl-8 pb-12 group">
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-purple)] to-[var(--accent-pink)] opacity-30" />
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--accent-purple)] shadow-[0_0_10px_var(--accent-purple)] group-hover:scale-125 transition-transform duration-300" />
            
            {/* Content card */}
            <div className="glass-card p-6 ml-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl font-bold group-hover:text-gradient-secondary transition-all duration-300">
                            {degree}
                        </h3>
                        <p className="text-[var(--accent-purple)] font-medium">
                            {institution}
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm font-mono text-[var(--text-muted)] whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {date}
                    </span>
                </div>

                {/* Grade badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-purple)]/20 to-[var(--accent-pink)]/20 border border-[var(--accent-purple)]/30 mb-6">
                    <span className="text-lg">🎓</span>
                    <span className="font-semibold text-[var(--text-primary)]">
                        {grade}
                    </span>
                </div>

                {/* Courses */}
                {courses && courses.length > 0 && (
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-mono">
                            {description}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {courses.map((course) => (
                                <div
                                    key={course}
                                    className="flex items-center gap-2 text-[var(--text-secondary)] text-sm"
                                >
                                    <svg className="w-4 h-4 text-[var(--accent-purple)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {course}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
