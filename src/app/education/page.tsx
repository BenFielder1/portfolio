import EducationItem from "@/components/EducationItem";
import { education } from "@/data/education";

export default function EducationPage() {
    return (
        <div className="relative">
            {/* Hero section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="font-mono text-sm text-[var(--accent-purple)] mb-4 block">
                            ACADEMIC BACKGROUND
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            My <span className="text-gradient-secondary">Education</span>
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

            {/* Achievements / Highlights */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="glass-card p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="text-3xl">🏆</span>
                                Academic Highlights
                            </h2>
                            
                            <div className="grid gap-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Outstanding A-Levels</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Achieved A*A*A*A* in Mathematics, Further Mathematics, 
                                            Computer Science, and Physics.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">💻</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">University of Warwick</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Graduated with a 2:1 in Computer Science from one of the 
                                            UK&apos;s top Computer Science departments.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-pink)] flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🔬</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Diverse Technical Foundation</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Specialized in Machine Learning, Neural Computing, 
                                            Computer Graphics, and Software Engineering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
