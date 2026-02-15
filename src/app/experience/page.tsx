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
        </div>
    );
}
