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
        grade: "Upper Second Class (2:1)",
        description: "Key Modules:",
        courses: [
            "Machine Learning",
            "Neural Computing",
            "Software Engineering",
            "Database Systems",
            "Computer Graphics",
            "Web Development",
            "Mobile Robotics",
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
    }
];