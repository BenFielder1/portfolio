import type { ReactNode } from "react";

interface PageIntroProps {
    eyebrow: string;
    title: ReactNode;
    intro?: ReactNode;
    /** Optional content rendered under the intro, e.g. in-page links. */
    children?: ReactNode;
}

/** Opening block for a top-level page: eyebrow, display heading and a short intro. */
export default function PageIntro({ eyebrow, title, intro, children }: PageIntroProps) {
    return (
        <section className="container-page pb-12 pt-12 md:pb-16 md:pt-20">
            <p className="eyebrow rise">{eyebrow}</p>
            <h1
                className="display rise mt-5 max-w-4xl text-5xl sm:text-6xl md:text-7xl"
                style={{ "--rise-delay": "80ms" } as React.CSSProperties}
            >
                {title}
            </h1>
            {intro && (
                <p
                    className="rise mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted"
                    style={{ "--rise-delay": "160ms" } as React.CSSProperties}
                >
                    {intro}
                </p>
            )}
            {children && (
                <div className="rise mt-8" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
                    {children}
                </div>
            )}
        </section>
    );
}
