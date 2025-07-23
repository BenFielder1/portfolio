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

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Space Worm",
        description: "Developer and publisher name for my games developed using C# and Unity. I have built games targetting multiple platforms including mobile, web and desktop. The games will be available here soon.",
        imagePath: "/images/projects/logo5.png",
        technologies: ["C#", "Unity Game Engine"],
        // demoLink: "/spaceworm",
        featured: true,
    },
    {
        id: "project-2",
        title: "2D Puzzle Platformer",
        description: "A web based game built using Phaser. It was initially developed as my A level project, but I have continued to maintain it to fix bugs.",
        imagePath: "/images/projects/game2.png",
        technologies: ["JavaScript", "React", "Phaser"],
        demoLink: "/projects/puzzleplatformer",
        githubLink: "https://github.com/BenFielder1/Ben-Fielder-A-Level-Project",
        featured: true,
    },
    {
        id: "project-3",
        title: "Snake with Routing Algorithm",
        description: "A snake game made using p5.js. The snake plays autonomously searching for the apple using A* search.",
        imagePath: "/images/projects/snake.png",
        technologies: ["JavaScript", "React", "p5.js", "Search Algorithms"],
        demoLink: "/projects/snake",
        githubLink: "https://github.com/BenFielder1/snake-with-routing",
        featured: true,
    },
    {
        id: "project-4",
        title: "Three.js Planets Sketch",
        description: "A sketch of a solar system to gain experience using three.js.",
        imagePath: "/images/projects/planets.png",
        technologies: ["JavaScript", "React", "three.js"],
        demoLink: "/projects/planets",
        githubLink: "https://github.com/BenFielder1/planets-sketch",
        featured: false,
    },
    {
        id: "project-5",
        title: "Portable Bird Song Identifier",
        description: "A handheld device built on an Arduino Uno to help users identify birds based on the song and surroundings.",
        imagePath: "/images/projects/birdsongidentifier.jpg",
        technologies: ["Arduino", "C/C++", "Hardware"],
        demoLink: "/projects/birdsongidentifier",
        // githubLink: "https://github.com/BenFielder1/snake-with-routing",
        featured: false,
    },
    {
        id: "project-6",
        title: "GitHub Documentation Generator",
        description: "A documentation generator that uses AI to generate documentation for codebases. It can be used to generate documentation for any public GitHub repository.",
        imagePath: "/images/projects/docgen.png",
        technologies: ["Generative AI", "APIs", "JavaScript"],
        demoLink: "/projects/documentationgenerator",
        // githubLink: "https://github.com/BenFielder1/snake-with-routing",
        featured: false,
    }
];