export type SkillLevel = {
    name: string;
    level: number; // 0-100
};

export type SkillCategory = {
    [category: string]: SkillLevel[];
};

export const skills: SkillCategory = {
    'Programming Languages': [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 65 },
    ],
    'Frameworks & Libraries': [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux', level: 70 },
    ],
    'Tools & Platforms': [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 80 },
    ],
    'Other Skills': [
        { name: 'UI/UX Design', level: 70 },
        { name: 'Agile Methodologies', level: 85 },
        { name: 'Test-Driven Development', level: 75 },
        { name: 'RESTful API Design', level: 85 },
        { name: 'CI/CD', level: 70 },
    ],
};