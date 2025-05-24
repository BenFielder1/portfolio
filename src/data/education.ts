export interface Education {
    id: string;
    institution: string;
    degree: string;
    date: string;
    grade: string;
    description: string;
    courses?: string[];
}

export const education: Education[] = [
    {
        id: "education-1",
        institution: "University of Warwick",
        degree: "Computer Science BSc",
        date: "2022 - 2025",
        grade: "Predicted 2:1",
        description: "Key Modules:",
        courses: [
            "Machine Learning",
            "Neural Computing",
            "Software Engineering",
            "Database Systems",
            "Computer Graphics",
            "Web Development",
            "Mobile Robotics",
            // "Algorithms",
            // "Logic and Verification",
            // "Design of Information Structures",
        ],
    },
    {
        id: "education-2",
        institution: "Marling School",
        degree: "A-Levels",
        date: "2020 - 2022",
        grade: "A*A*A*A*",
        description: "Subjects:",
        courses: [
            "Mathematics",
            "Further Mathematics",
            "Computer Science",
            "Physics",
        ],
    },
    // {
    //     id: "education-3",
    //     institution: "Online Learning",
    //     degree: "Various Certifications",
    //     date: "2019 - Present",
    //     description: "Continuously expanding knowledge through online courses and certifications in various aspects of software development and computer science.",
    //     courses: [
    //         "Full Stack Web Development Bootcamp",
    //         "Advanced React Patterns",
    //         "AWS Cloud Practitioner",
    //         "Algorithms Specialization",
    //     ],
    // },
];