import EducationItem from '@/components/EducationItem';
import { education } from '@/data/education';

export default function EducationPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Education</h1>

            <div className="space-y-8">
                {education.map((item) => (
                    <EducationItem
                        key={item.id}
                        institution={item.institution}
                        degree={item.degree}
                        date={item.date}
                        description={item.description}
                        courses={item.courses}
                        grade={item.grade}
                    />
                ))}
            </div>
        </div>
    );
}