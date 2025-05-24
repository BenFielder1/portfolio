import ExperienceItem from "@/components/ExperienceItem";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Work Experience</h1>

            <div className="space-y-8">
                {experience.map((item) => (
                    <ExperienceItem
                        key={item.id}
                        company={item.company}
                        position={item.position}
                        date={item.date}
                        description={item.description}
                        technologies={item.technologies}
                    />
                ))}
            </div>
        </div>
    );
}