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
        id: 'project-1',
        title: 'Space Worm',
        description: '',
        imagePath: '/images/projects/logo5.png',
        technologies: ['React', 'Next.js', 'Node.js', 'three.js'],
        demoLink: '/spaceworm',
        githubLink: 'https://github.com/BenFielder1/snake-with-routing',
        featured: true,
    },
    {
        id: 'project-2',
        title: '2D Puzzle Platformer',
        description: '',
        imagePath: '/images/projects/game2.png',
        technologies: ['React', 'Next.js', 'Node.js', 'three.js'],
        demoLink: '/projects/puzzleplatformer',
        githubLink: 'https://github.com/BenFielder1/snake-with-routing',
        featured: true,
    },
    {
        id: 'project-3',
        title: 'Snake with Routing Algorithm',
        description: 'A snake game made using p5.js. The snake plays autonomously searching for the apple using A* search.',
        imagePath: '/images/projects/snake.png',
        technologies: ['React', 'Next.js', 'Node.js', 'p5.js', 'search algorithms'],
        demoLink: '/projects/snake',
        githubLink: 'https://github.com/BenFielder1/snake-with-routing',
        featured: true,
    },
    {
        id: 'project-4',
        title: 'Three.js Planets Sketch',
        description: '',
        imagePath: '/images/projects/planets.png',
        technologies: ['React', 'Next.js', 'Node.js', 'three.js'],
        demoLink: '/projects/planets',
        githubLink: 'https://github.com/BenFielder1/snake-with-routing',
        featured: true,
    },
    {
        id: 'project-5',
        title: 'Portable Bird Song Identifier',
        description: '',
        imagePath: '/images/projects/birdsongidentifier.jpg',
        technologies: ['React', 'Next.js', 'Node.js', 'three.js'],
        demoLink: '/projects/birdsongidentifier',
        githubLink: 'https://github.com/BenFielder1/snake-with-routing',
        featured: true,
    }
];