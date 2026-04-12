export interface Role {
    position: string;
    date: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    date: string;
    description: string;
    technologies: string[];
    roles?: Role[];
}

export const experience: Experience[] = [
    {
        id: "exp-1",
        company: "Content Guru (Redwood Technologies Ltd)",
        position: "Software Engineer Level 1",
        date: "November 2025 - Present",
        description: "Working in the Integrate team to help build bespoke integrations between the contact centre platform and third-party software.",
        technologies: ["C#", ".NET", "TypeScript", "React"],
        roles: [
            {
                position: "Software Engineer Level 1",
                date: "February 2026 - Present",
            },
            {
                position: "Graduate Software Developer",
                date: "November 2025 - February 2026",
            },
        ],
    },
    {
        id: "exp-2",
        company: "Renishaw plc",
        position: "Software Engineer - Summer Placement",
        date: "July 2024 - September 2024",
        description: "Worked on developing CARTO, a .NET desktop application built with C#. Participated in code reviews and agile development processes.",
        technologies: ["C#", ".NET", "SpecFlow", "Agile", "Git"],
    }
];