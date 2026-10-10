import type { Metadata } from "next";
import FeaturedProject from "@/components/FeaturedProject";
import PageIntro from "@/components/PageIntro";
import ProjectTile from "@/components/ProjectTile";
import Section from "@/components/Section";
import { featuredProjects, otherProjects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Platforms, developer tools, web apps, games and hardware built by Ben Fielder, from a multi-agent engineering platform to a Unity games label.",
    alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
    return (
        <>
            <PageIntro
                eyebrow="Projects"
                title={
                    <>
                        Things I&apos;ve <em className="text-accent">built</em>, from agent platforms to mobile games.
                    </>
                }
                intro="My recent side projects focus on AI-assisted engineering: making coding agents follow a real lifecycle and a team's conventions. Further down are the games, creative-coding experiments and tools I built along the way."
            />

            <Section id="featured" number="01" title="Featured" intro="Current projects, with the most depth.">
                {featuredProjects.map((project, i) => (
                    <FeaturedProject key={project.id} project={project} index={i} />
                ))}
            </Section>

            <Section id="archive" number="02" title="Archive" intro="Games, creative coding, tools and hardware.">
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
                    {otherProjects.map((project) => (
                        <ProjectTile key={project.id} project={project} />
                    ))}
                </div>
            </Section>
        </>
    );
}
