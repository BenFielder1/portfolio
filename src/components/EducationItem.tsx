interface EducationItemProps {
    institution: string;
    degree: string;
    date: string;
    description: string;
    courses?: string[];
    grade: string;
}

export default function EducationItem({
    institution,
    degree,
    date,
    description,
    courses,
    grade
}: EducationItemProps) {
    return (
        <div className="border-l-4 border-blue-600 pl-4 py-1">
            <div className="mb-2">
                <h2 className="text-xl font-bold">{degree}</h2>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="text-lg text-gray-700">{institution}</h3>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
            </div>

            <p className="text-gray-700 mb-4">Grade - {grade}</p>

            {courses && courses.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold mb-2">{description}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {courses.map((course) => (
                            <li key={course}>{course}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}