export type ProjectCategory = "Platform" | "Developer tools" | "Web" | "Games" | "Hardware";

export interface Project {
    id: string;
    title: string;
    /** Short subtitle, e.g. "Claude Code plugin marketplace". */
    tagline: string;
    description: string;
    /** Bullet highlights used on featured layouts. */
    highlights?: string[];
    image?: string;
    technologies: string[];
    category: ProjectCategory;
    status?: string;
    demoLink?: string;
    demoLabel?: string;
    githubLink?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "aide",
        title: "AIDE",
        tagline: "AI-Driven Engineering Platform",
        description:
            "A full-stack platform that turns an idea into released software through a governed six-phase lifecycle: refinement, specification, planning, execution, review and release. AI agents produce versioned artifacts and people approve them at gates. Rebuilt on .NET from an earlier TypeScript/NestJS prototype, using my own react-dotnet-local-kit.",
        highlights: [
            "Layered ASP.NET Core architecture: business rules (lifecycle state machine, approval gates, artifact versioning and rollback, review scoring) live in a pure Domain project, with thin API endpoints and EF Core code-first migrations on PostgreSQL.",
            "Five AI agents behind a single LLM provider abstraction (Anthropic, OpenAI, Ollama, plus a deterministic fake for tests), with per-agent model selection, token budgets and cost tracking.",
            "Background workers claim jobs from PostgreSQL with FOR UPDATE SKIP LOCKED, and a transactional outbox writes each state change and its follow-up jobs atomically, with no separate message broker.",
            "Git integration generates code step by step, opens pull requests, runs review cycles, then merges and tags releases. SignalR pushes live updates; notifications go out by email, Slack, Teams and HMAC-signed webhooks; an aide CLI ships as a .NET global tool.",
            "React + Vite frontend with TanStack Router and Query, calling the API only through a TypeScript client generated from the OpenAPI contract.",
            "Tested with xUnit (unit, and integration via Testcontainers), Vitest with MSW, and Playwright end-to-end with axe accessibility checks. GitHub Actions CI enforces warnings-as-errors and fails on OpenAPI contract or EF migration drift, then deploys to local Kubernetes with Kustomize, a pre-rollout migration Job and smoke tests.",
        ],
        image: "/images/projects/aide.png",
        technologies: [
            "C#",
            "ASP.NET Core (.NET 10)",
            "EF Core",
            "PostgreSQL",
            "React 19",
            "TypeScript",
            "SignalR",
            "Kubernetes",
            "GitHub Actions",
        ],
        category: "Platform",
        status: "In active development",
        githubLink: "https://github.com/BenFielder1/AI-Driven-Engineering-Platform",
        featured: true,
    },
    {
        id: "claude-kits",
        title: "claude-kits",
        tagline: "Claude Code plugin marketplace",
        description:
            'A public, installable marketplace of Claude Code plugins, each a "kit" of skills and agents tuned to one tech stack, so AI-generated code follows the same conventions every time. Three spec-driven kits so far, with 21 skills and 30 subagents between them.',
        highlights: [
            "react-dotnet-local-kit: React, Vite, ASP.NET Core, EF Core, PostgreSQL, GitHub Actions and Docker Desktop Kubernetes. Used to build AIDE.",
            "react-dotnet-k8s-kit: React, .NET, GitLab, Kubernetes, Argo CD and Jira, mirroring my professional stack.",
            "nextjs-supabase-kit: Next.js, Supabase and Vercel. Used to build Impulse.",
            "Each kit pairs an orchestrator skill that builds from a spec with stack skills (ASP.NET Core endpoints, EF Core data, OpenAPI contracts, CI, Kubernetes deployment) and role-based subagents for each stage of the lifecycle: scaffolding, engineering, QA, PR review and spec verification.",
            "Run like a released product: versioned plugin manifests, validation with claude plugin validate before every push, and update channels for installed users.",
        ],
        technologies: ["Claude Code", "Plugins", "Agent skills", "Custom agents"],
        category: "Developer tools",
        githubLink: "https://github.com/BenFielder1/claude-kits",
        featured: true,
    },
    {
        id: "impulse",
        title: "Impulse",
        tagline: "Training-programme planning SaaS",
        description:
            "A web app for coaches and athletes to plan periodised gym-and-pool training programmes, built from my own experience as a national-level swimmer.",
        highlights: [
            "Periodised programmes (phases, weeks, sessions) modelled in a relational PostgreSQL schema with row-level security and Supabase auth.",
            "Full product loop: authentication, a programme builder UI and server-side data access, deployed on Vercel.",
            "Built with my own nextjs-supabase-kit and Claude Code, reviewing and owning all generated code.",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
        category: "Web",
        status: "In development",
        featured: true,
    },
    {
        id: "space-worm",
        title: "Space Worm Studio",
        tagline: "Unity games for mobile, web and desktop",
        description:
            "The studio name I publish my Unity/C# games under, including Pyramid Numbers, which I took through to Google Play submission, and a WebGL game portal.",
        image: "/images/projects/spaceworm.png",
        technologies: ["C#", "Unity", "TypeScript", "Next.js"],
        category: "Games",
        demoLink: "https://games.benfielder.com/",
        demoLabel: "Play",
        // githubLink: "https://github.com/BenFielder1/Space-Worm-Game-Portal",
        featured: false,
    },
    {
        id: "sketch-vault",
        title: "Sketch Vault",
        tagline: "Generative-art showcase",
        description: "A collection of interactive generative sketches built with three.js and p5.js.",
        image: "/images/projects/sketchvault.png",
        technologies: ["Next.js", "three.js", "p5.js", "TypeScript"],
        category: "Web",
        demoLink: "https://sketchvault.benfielder.com/",
        demoLabel: "Explore",
        githubLink: "https://github.com/BenFielder1/Sketch-Vault",
        featured: false,
    },
    {
        id: "documentation-generator",
        title: "Documentation Generator",
        tagline: "AI docs for any public GitHub repo",
        description: "Generates documentation for any public GitHub repository using generative AI.",
        image: "/images/projects/documentationgenerator.png",
        technologies: ["JavaScript", "Generative AI", "GitHub API"],
        category: "Developer tools",
        demoLink: "https://docgen.benfielder.com/",
        demoLabel: "Try it",
        githubLink: "https://github.com/BenFielder1/documentation-generator",
        featured: false,
    },
    {
        id: "jseden-notebook",
        title: "JS-Eden Notebook",
        tagline: "VS Code extension",
        description:
            "A VS Code extension for creating and editing JS-Eden notebooks, used to build visual, interactive learning tools.",
        image: "/images/projects/jsedennotebook.png",
        technologies: ["JavaScript", "VS Code API", "JS-Eden"],
        category: "Developer tools",
        githubLink: "https://github.com/BenFielder1/JSEden-Notebook",
        featured: false,
    },
    {
        id: "puzzle-platformer",
        title: "Puzzle Platformer",
        tagline: "2D browser game",
        description: "A Phaser platformer that started as my A-Level project. I've kept maintaining it since.",
        image: "/images/projects/puzzleplatformer.png",
        technologies: ["JavaScript", "React", "Phaser"],
        category: "Games",
        demoLink: "https://platformer.benfielder.com/",
        demoLabel: "Play",
        githubLink: "https://github.com/BenFielder1/Puzzle-Platformer",
        featured: false,
    },
    {
        id: "bird-song-identifier",
        title: "Bird Song Identifier",
        tagline: "Handheld Arduino device",
        description:
            "A handheld Arduino Uno device that helps identify birds by asking questions about the song and surroundings.",
        image: "/images/projects/birdsongidentifier.jpg",
        technologies: ["Arduino", "C/C++", "Hardware"],
        category: "Hardware",
        demoLink: "https://www.youtube.com/watch?v=ykYUyg93UfQ",
        demoLabel: "Watch demo",
        featured: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
