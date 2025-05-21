import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    imagePath: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
}

export default function ProjectCard({
    title,
    description,
    imagePath,
    technologies,
    demoLink,
    githubLink,
}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>

                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-3">
                    {demoLink && (
                        <Link
                            href={demoLink}
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Live Demo
                        </Link>
                    )}
                    {githubLink && (
                        <Link
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}