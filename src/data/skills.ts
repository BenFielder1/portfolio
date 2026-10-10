export interface SkillGroup {
    name: string;
    items: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        name: "Backend",
        items: [
            "C#",
            ".NET",
            "ASP.NET Core Web API",
            "REST APIs",
            "Background services",
            "Dependency injection",
            "Mediator pattern",
        ],
    },
    {
        name: "Frontend",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite"],
    },
    {
        name: "Data",
        items: ["SQL", "SQL Server", "PostgreSQL", "Supabase", "EF Core"],
    },
    {
        name: "Testing & practice",
        items: [
            "xUnit",
            "Cypress",
            "Playwright",
            "Cucumber",
            "SpecFlow",
            "TDD / BDD",
            "Code review",
            "Pair programming",
            "Agile / Scrum",
        ],
    },
    {
        name: "DevOps & cloud",
        items: [
            "Docker",
            "Kubernetes",
            "Helm",
            "GitLab CI/CD",
            "Argo CD",
            "Harbor",
            "Rancher",
            "Grafana Loki",
            "Vercel",
            "Git",
        ],
    },
    {
        name: "AI-assisted engineering",
        items: ["Claude Code", "Cursor", "GitHub Copilot", "MCP servers", "Custom agents & skills"],
    },
    {
        name: "Also",
        items: ["Python", "Java", "Unity"],
    },
];
