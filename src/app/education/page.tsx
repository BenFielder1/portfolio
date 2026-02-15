import EducationItem from "@/components/EducationItem";
import { education } from "@/data/education";

export default function EducationPage() {
    return (
        <div className="relative">
            {/* Hero section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">
                            ACADEMIC BACKGROUND
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            My <span className="text-gradient">Education</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                            Building a strong foundation in Computer Science through academic 
                            excellence and continuous learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-12 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        {education.map((item, index) => (
                            <EducationItem
                                key={item.id}
                                institution={item.institution}
                                degree={item.degree}
                                date={item.date}
                                description={item.description}
                                courses={item.courses}
                                grade={item.grade}
                                isLast={index === education.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
