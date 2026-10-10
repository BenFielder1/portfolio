export interface Education {
    id: string;
    institution: string;
    qualification: string;
    period: string;
    /** Short form for cards and the CV, e.g. "2:1". */
    grade: string;
    /** Spelled-out form used where there is room. */
    gradeLabel: string;
    detailLabel: string;
    details: string[];
}

export const education: Education[] = [
    {
        id: "warwick",
        institution: "University of Warwick",
        qualification: "BSc Computer Science (Hons)",
        period: "2022 - 2025",
        grade: "2:1",
        gradeLabel: "Upper Second Class (2:1)",
        detailLabel: "Modules",
        details: [
            "Software Engineering",
            "Algorithms",
            "Database Systems",
            "Operating Systems",
            "Computer Networks",
            "Computer Architecture",
            "Machine Learning",
            "Neural Computing",
            "Computer Graphics",
            "Web Development",
            "Mobile Robotics",
        ],
    },
    {
        id: "marling",
        institution: "Marling School",
        qualification: "A-Levels",
        period: "2020 - 2022",
        grade: "A*A*A*A*",
        gradeLabel: "A*A*A*A*",
        detailLabel: "Subjects",
        details: ["Mathematics", "Further Mathematics", "Computer Science", "Physics"],
    },
];
