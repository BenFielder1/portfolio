export interface Role {
    title: string;
    period: string;
}

export interface Experience {
    id: string;
    company: string;
    companyNote: string;
    companyUrl?: string;
    team: string;
    title: string;
    period: string;
    /** Progression within the company, most recent first. */
    roles?: Role[];
    summary: string;
    highlights: string[];
    technologies: string[];
}

export const experience: Experience[] = [
    {
        id: "content-guru",
        company: "Content Guru",
        companyNote: "Enterprise CCaaS and customer-experience platform",
        companyUrl: "https://www.contentguru.com/",
        team: "Integrate team",
        title: "Software Engineer",
        period: "Nov 2025 - Present",
        roles: [
            { title: "Software Engineer Level 1", period: "Feb 2026 - Present" },
            { title: "Graduate Software Developer", period: "Nov 2025 - Feb 2026" },
        ],
        summary:
            "Building bespoke, customer-requested integrations between Content Guru's cloud contact-centre platform and third-party CRM, ticketing and business systems.",
        highlights: [
            "Build ASP.NET Core APIs and C#/.NET integration services using dependency injection, the mediator pattern and background services, turning customer requirements into production features.",
            "Own the Pega integration, working directly with Pega's team through to customer delivery: screen pops inside Pega when a call reaches an agent, and automatic case creation from call data such as agent legs, wrap codes, transcripts and summaries.",
            "Work on a ServiceNow integration for internal ticketing, keeping updates in sync between the support team and customers.",
            "Build React and TypeScript frontends for integration configuration, owning features end to end from requirements to release.",
            "Write the Docker builds and Helm charts for my services, deploy to the Kubernetes test environment, and help plan and test production releases.",
            "Test at every layer: xUnit unit and integration tests for APIs, Cypress component and screenshot tests for frontends, and Playwright end-to-end tests written in Cucumber syntax.",
            "Work within GitLab CI/CD and Argo CD delivery pipelines, debugging services with Grafana Loki logs.",
            "Contributed to five integrations and products in my first year.",
        ],
        technologies: [
            "C#",
            ".NET",
            "ASP.NET Core",
            "React",
            "TypeScript",
            "SQL Server",
            "Docker",
            "Helm",
            "Kubernetes",
            "GitLab CI/CD",
            "Argo CD",
            "xUnit",
            "Cypress",
            "Playwright",
        ],
    },
    {
        id: "renishaw",
        company: "Renishaw plc",
        companyNote: "Precision engineering and metrology",
        companyUrl: "https://www.renishaw.com/",
        team: "CARTO team",
        title: "Software Engineer Intern",
        period: "Jul 2024 - Sep 2024",
        roles: [
            { title: "Software Engineer Intern, Summer Placement", period: "Jul 2024 - Sep 2024" },
        ],
        summary:
            "A C#/.NET Framework desktop application that controls Renishaw's laser calibration systems and presents measurement results.",
        highlights: [
            "Delivered features and bug fixes in two-week sprints, with daily stand-ups and fortnightly planning and review.",
            "Wrote behaviour-driven SpecFlow tests before implementation, so every change shipped with test coverage.",
            "Paired daily with senior engineers to learn the codebase and review work, using Git with feature branches.",
        ],
        technologies: ["C#", ".NET Framework", "SpecFlow", "TDD", "Git", "Agile / Scrum"],
    },
];
