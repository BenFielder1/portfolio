export interface Project {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Space Worm",
        description: "Developer and publisher name for my games developed using C# and Unity. I have built games targetting multiple platforms including mobile, web and desktop.",
        imagePath: "/images/projects/spaceworm.png",
        technologies: ["C#", "Unity Game Engine", "TypeScript", "Next.js"],
        demoLink: "https://games.benfielder.com/",
        githubLink: "https://github.com/BenFielder1/Space-Worm",
        featured: true,
    },
    {
        id: 2,
        title: "JSEden Notebook VS Code Extension",
        description: "A VS Code extension that allows you to create and edit JS-Eden notebooks. This can be used to create visual and interactive learning tools.",
        imagePath: "/images/projects/jsedennotebook.png",
        technologies: ["JavaScript", "VS Code API", "JS-Eden"],
        githubLink: "https://github.com/BenFielder1/JSEden-Notebook",
        featured: true,
    },
    {
        id: 3,
        title: "GitHub Documentation Generator",
        description: "A documentation generator that uses AI to generate documentation for codebases. It can be used to generate documentation for any public GitHub repository.",
        imagePath: "/images/projects/documentationgenerator.png",
        technologies: ["Generative AI", "APIs", "JavaScript"],
        demoLink: "https://docgen.benfielder.com/",
        githubLink: "https://github.com/BenFielder1/documentation-generator",
        featured: true,
    },
    {
        id: 4,
        title: "Portable Bird Song Identifier",
        description: "A handheld device built on an Arduino Uno to help users identify birds by asking questions based on the song and surroundings.",
        imagePath: "/images/projects/birdsongidentifier.jpg",
        technologies: ["Arduino", "C/C++", "Hardware"],
        demoLink: "https://www.youtube.com/watch?v=ykYUyg93UfQ",
        featured: false,
    },
    {
        id: 5,
        title: "Sketch Vault",
        description: "A web app housing a collection of interactive sketches made using three.js and p5.js.",
        imagePath: "/images/projects/sketchvault.png",
        technologies: ["Next.js", "three.js", "p5.js", "TypeScript"],
        demoLink: "https://sketchvault.benfielder.com/",
        githubLink: "https://github.com/BenFielder1/Sketch-Vault",
        featured: false,
    },
    {
        id: 6,
        title: "2D Puzzle Platformer",
        description: "A web based game built using Phaser. It was initially developed as my A level project, but I have continued to maintain it to fix bugs.",
        imagePath: "/images/projects/puzzleplatformer.png",
        technologies: ["JavaScript", "React", "Phaser"],
        demoLink: "https://platformer.benfielder.com/",
        githubLink: "https://github.com/BenFielder1/Puzzle-Platformer",
        featured: false,
    },
    
];