export const profile = {
    name: "Ben Fielder",
    fullName: "Benjamin Fielder",
    role: "Software Engineer",
    disciplines: ["C# / .NET", "TypeScript", "Cloud-native"],
    email: "bencfielder@outlook.com",
    siteUrl: "https://benfielder.com",
    website: "benfielder.com",
    github: "https://github.com/BenFielder1",
    githubHandle: "BenFielder1",
    linkedin: "https://www.linkedin.com/in/ben-fielder-38a9ba276/",
    current: {
        role: "Software Engineer",
        company: "Content Guru",
        companyUrl: "https://www.contentguru.com/",
        since: "Nov 2025",
    },
    /** Short intro paragraph used on the home page. */
    summary:
        "Software engineer at Content Guru, building production integration services for an enterprise contact-centre platform. I work across the stack, from C#/.NET backend services and REST APIs to React/TypeScript frontends, and package what I build for release with Docker, Helm and GitLab CI/CD. Outside work, I build AI-assisted engineering tools and train as a national-level swimmer.",
    /** Opening paragraph of the CV page. */
    cvSummary:
        "Software engineer with a year of professional C#/.NET experience, currently building production integration services for an enterprise CCaaS platform at Content Guru. I work across the stack, from C#/.NET backend services and REST APIs to React/TypeScript frontends, and package services for release with Docker, Helm and GitLab CI/CD. Computer Science graduate (2:1, Warwick) with earlier .NET experience at Renishaw, where I worked test-first in an agile team.",
    stats: [
        { value: "5", label: "integrations and products contributed to in my first 11 months at CG" },
        { value: "2:1", label: "BSc Computer Science, University of Warwick" },
        { value: "3", label: "Claude Code stack kits that keep AI-written code to team conventions" },
        { value: "13 yrs", label: "of competitive swimming, at national level" },
    ],
    interests: {
        title: "Away from the keyboard",
        body: "I've been a competitive swimmer for thirteen years. I'm a 50m breaststroke sprinter, and I've qualified for Nationals in 2018 and every year from 2023 to 2026, including the Aquatics GB Championships. At Warwick I reached the BUCS A final with the university relay team. I write my own periodised training programmes, which is what led to building Impulse.",
        stats: [
            { value: "50m", label: "Breaststroke sprinter" },
            { value: "5×", label: "National Championships qualifier" },
            { value: "A final", label: "BUCS, Warwick relay" },
        ],
    },
} as const;
