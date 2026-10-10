import type { ReactNode } from "react";

interface SectionProps {
    id?: string;
    number: string;
    title: string;
    intro?: ReactNode;
    /** Optional link or control rendered under the intro. */
    action?: ReactNode;
    children: ReactNode;
}

/**
 * Editorial two-column section: a sticky numbered label on the left,
 * content on the right. Collapses to a single column on small screens.
 */
export default function Section({ id, number, title, intro, action, children }: SectionProps) {
    return (
        <section id={id} className="container-page">
            <div className="grid gap-8 border-t border-line py-16 md:grid-cols-12 md:gap-10 md:py-24">
                <header className="md:col-span-4 lg:col-span-3">
                    <div className="space-y-3 md:sticky md:top-24">
                        <p className="eyebrow">
                            <span className="text-accent">{number}</span>
                            <span className="ml-3">{title}</span>
                        </p>
                        <h2 className="display text-4xl md:text-[2.75rem]">{title}</h2>
                        {intro && <div className="max-w-xs leading-relaxed text-fg-muted">{intro}</div>}
                        {action && <div className="pt-1">{action}</div>}
                    </div>
                </header>
                <div className="md:col-span-8 lg:col-span-9">{children}</div>
            </div>
        </section>
    );
}
