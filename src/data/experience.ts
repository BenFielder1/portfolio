export interface Experience {
    id: string;
    company: string;
    position: string;
    date: string;
    description: string;
    technologies: string[];
}

export const experience: Experience[] = [
    {
        id: "exp-1",
        company: "Renishaw plc",
        position: "Software Engineer - Summer Placement",
        date: "July 2024 - September 2024",
        description: "Worked on developing CARTO, a .NET desktop application built with C#. Participated in code reviews and agile development processes.",
        technologies: ["C#", ".NET", "SpecFlow", "Agile", "Git"],
    },
    {
        id: "exp-2",
        company: "Outlier",
        position: "AI Model Tester - Contractor",
        date: "Nov 2024 - Present",
        description: "Worked on several projects to help test and train AI models. Primarily worked on helping them to become better at providing code to prompts.",
        technologies: ["AI", "Software Development", "Prompt Engineering", "Testing"],
    },
    // {
    //     id: "exp-3",
    //     company: "Freelance",
    //     position: "Web Developer",
    //     date: "2021 - Present",
    //     description: "Designed and developed websites and web applications for small businesses and individuals. Managed client relationships, requirements gathering, and project timelines. Provided ongoing maintenance and support.",
    //     technologies: ["React", "Next.js", "JavaScript", "HTML/CSS", "WordPress"],
    // },
];