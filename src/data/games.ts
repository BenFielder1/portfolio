export interface Project {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    featured: boolean;
}

export const games: Project[] = [
    {
        id: "project-1",
        title: "Pyramid Numbers",
        description: "",
        imagePath: "/images/projects/newfeaturepic.png",
        technologies: ["React", "Next.js", "Node.js", "three.js"],
        demoLink: "/spaceworm/pyramidnumbers",
        githubLink: "https://github.com/BenFielder1/snake-with-routing",
        featured: true,
    }
];