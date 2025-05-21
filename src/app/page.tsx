import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
    // Get featured projects only
    const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

    return (
        <div className="container mx-auto px-4">
            <section className="py-20 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I&#39;m <span className="text-blue-600">Ben Fielder</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                        Software Developer
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Computer Science student at the University of Warwick, passionate about
                        building innovative software solutions and exploring new technologies.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/projects"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ">
                        <Image
                            src="/images/profile.jpg"
                            alt="Ben Fielder"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Quick Skills Overview */}
            <section className="py-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java'].map((skill) => (
                        <span key={skill} className="bg-gray-200 px-4 py-2 rounded-full text-gray-800">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Featured Projects</h2>
                    <Link href="/projects" className="text-blue-600 hover:underline">
                        View all →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imagePath={project.imagePath}
                            technologies={project.technologies}
                            demoLink={project.demoLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}