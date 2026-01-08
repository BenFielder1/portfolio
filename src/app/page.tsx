import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
    const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

    const skills = [
        { name: "TypeScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "C#", icon: "#" },
        { name: ".NET", icon: "🔷" },
        { name: "Tailwind", icon: "🎨" },
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center relative overflow-hidden">
                {/* Floating orbs background */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent-cyan)] rounded-full opacity-10 blur-[100px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-purple)] rounded-full opacity-10 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            {/* Status badge */}
                            <div className="animate-in opacity-0">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm font-mono">
                                    <span className="relative flex h-2 w-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-cyan)]"></span>
                                    </span>
                                    Software Developer @ Content Guru
                                </span>
                            </div>

                            {/* Main heading */}
                            <div className="space-y-4">
                                <h1 className="animate-in opacity-0 animate-delay-1 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Hi, I&apos;m{" "}
                                    <span className="text-gradient">Ben Fielder</span>
                                </h1>
                                <h2 className="animate-in opacity-0 animate-delay-2 text-2xl md:text-3xl text-[var(--text-secondary)] font-medium">
                                    Software Engineer crafting{" "}
                                    <span className="text-gradient-secondary">digital experiences</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="animate-in opacity-0 animate-delay-3 text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                                Graduate Software Developer at Content Guru, passionate about building 
                                innovative software solutions. From cloud integrations to game development, 
                                I love exploring the boundaries of technology.
                            </p>

                            {/* CTA Buttons */}
                            <div className="animate-in opacity-0 animate-delay-4 flex flex-wrap gap-4">
                                <Link href="/projects" className="btn-primary">
                                    View My Work
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link href="/contact" className="btn-secondary">
                                    Get in Touch
                                </Link>
                            </div>

                            {/* Social links */}
                            <div className="animate-in opacity-0 animate-delay-5 flex items-center gap-4 pt-4">
                                <span className="text-sm text-[var(--text-muted)]">Find me on</span>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/BenFielder1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-300"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ben-fielder-38a9ba276/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Profile image */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
                                
                                {/* Image container */}
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-[var(--glass-border)] shadow-2xl">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Ben Fielder"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                        className="transition-transform duration-700 hover:scale-105"
                                    />
                                    
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40" />
                                </div>

                                {/* Floating tech badges */}
                                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "-1s" }}>
                                    <span className="text-2xl">🎮</span>
                                    <span className="text-sm font-medium">Game Dev</span>
                                </div>
                                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "-4s" }}>
                                    <span className="text-2xl">☁️</span>
                                    <span className="text-sm font-medium">Cloud</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">TECH STACK</span>
                        <h2 className="section-title text-center mx-auto">Technologies I Work With</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="glass-card px-6 py-4 flex items-center gap-3 cursor-default"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
                        <div>
                            <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">PORTFOLIO</span>
                            <h2 className="section-title">Featured Projects</h2>
                            <p className="text-[var(--text-secondary)] mt-6 max-w-xl">
                                A selection of projects I&apos;ve built, from games to web applications.
                            </p>
                        </div>
                        <Link
                            href="/projects"
                            className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            View all projects
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
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

            {/* CTA Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/10 via-transparent to-[var(--accent-purple)]/10" />
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Let&apos;s Build Something{" "}
                                <span className="text-gradient">Amazing</span>
                            </h2>
                            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
                                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Start a Conversation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
