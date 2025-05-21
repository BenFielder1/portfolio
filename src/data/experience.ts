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
        id: 'exp-1',
        company: 'Renishaw plc',
        position: 'Software Engineer Summer Placement',
        date: 'July 2024 - September 2024',
        description: 'Worked on developing CARTO, a .NET desktop application built with C#. Participated in code reviews and agile development processes.',
        technologies: ['C#', '.NET', 'SpecFlow', 'Agile', 'Git'],
    },
    // {
    //     id: 'exp-2',
    //     company: 'University of Warwick',
    //     position: 'Research Assistant',
    //     date: 'Jan 2023 - Apr 2023',
    //     description: 'Assisted in a research project focused on developing algorithms for data analysis in large-scale distributed systems. Implemented and tested prototype solutions, and contributed to the research paper.',
    //     technologies: ['Python', 'TensorFlow', 'Distributed Systems', 'Data Analysis'],
    // },
    // {
    //     id: 'exp-3',
    //     company: 'Freelance',
    //     position: 'Web Developer',
    //     date: '2021 - Present',
    //     description: 'Designed and developed websites and web applications for small businesses and individuals. Managed client relationships, requirements gathering, and project timelines. Provided ongoing maintenance and support.',
    //     technologies: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'WordPress'],
    // },
    // {
    //     id: 'exp-4',
    //     company: 'Student Hackathon',
    //     position: 'Team Leader',
    //     date: 'Various Events',
    //     description: 'Led teams in multiple hackathons, developing innovative solutions under tight deadlines. Coordinated team efforts, delegated tasks, and presented final projects to judges and audiences.',
    //     technologies: ['Various technologies', 'Project Management', 'Rapid Prototyping'],
    // },
];