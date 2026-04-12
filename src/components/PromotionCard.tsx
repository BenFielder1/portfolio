interface PromotionCardProps {
    position: string;
    date: string;
}

export default function PromotionCard({
    position,
    date,
}: PromotionCardProps) {
    return (
        <div className="relative">
            {/* Role card */}
            <div className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                    {position}
                </h4>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {date}
                </span>
            </div>
        </div>
    );
}
