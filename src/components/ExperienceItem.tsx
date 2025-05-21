interface ExperienceItemProps {
    company: string;
    position: string;
    date: string;
    description: string;
    technologies: string[];
}

export default function ExperienceItem({
    company,
    position,
    date,
    description,
    technologies,
}: ExperienceItemProps) {
    return (
        <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="mb-2">
                <h2 className="text-xl font-bold">{position}</h2>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="text-lg text-gray-700">{company}</h3>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
            </div>

            <p className="text-gray-700 mb-4">{description}</p>

            <div>
                <h4 className="text-sm font-semibold mb-2">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}