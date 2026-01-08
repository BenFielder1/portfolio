import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="relative">
            {/* Hero section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">
                            PORTFOLIO
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            My <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                            A collection of projects I&apos;ve built over the years, from games and 
                            creative coding experiments to developer tools and web applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-12 relative">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)]">
                                ⭐
                            </span>
                            Featured Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imagePath={project.imagePath}
                                technologies={project.technologies}
                                demoLink={project.demoLink}
                                githubLink={project.githubLink}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <section className="py-12 relative">
                    <div className="container mx-auto px-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                                    🚀
                                </span>
                                More Projects
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imagePath={project.imagePath}
                                    technologies={project.technologies}
                                    demoLink={project.demoLink}
                                    githubLink={project.githubLink}
                                    index={index + featuredProjects.length}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Stats section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="glass-card p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {projects.length}
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm">
                                    Total Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-2">
                                    {new Set(projects.flatMap(p => p.technologies)).size}
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm">
                                    Technologies Used
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {projects.filter(p => p.demoLink).length}
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm">
                                    Live Demos
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-2">
                                    {projects.filter(p => p.githubLink).length}
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm">
                                    Open Source
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
