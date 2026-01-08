import ExperienceItem from "@/components/ExperienceItem";
import { experience } from "@/data/experience";
import Link from "next/link";

export default function ExperiencePage() {
    return (
        <div className="relative">
            {/* Hero section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">
                            CAREER
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Work <span className="text-gradient">Experience</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                            My professional journey in software development, from placements 
                            to full-time roles, building real-world solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-12 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        {experience.map((item, index) => (
                            <ExperienceItem
                                key={item.id}
                                company={item.company}
                                position={item.position}
                                date={item.date}
                                description={item.description}
                                technologies={item.technologies}
                                isLast={index === experience.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/5 via-transparent to-[var(--accent-purple)]/5" />
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Interested in working together?
                                </h2>
                                <p className="text-[var(--text-secondary)] mb-6">
                                    I&apos;m always open to discussing new opportunities and exciting projects.
                                </p>
                                <Link href="/contact" className="btn-primary">
                                    Get in Touch
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
