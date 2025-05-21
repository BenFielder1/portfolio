import SkillBar from '@/components/SkillBar';
import { skills} from '@/data/skills';

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Skills & Technologies</h1>

            {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                    <div className="space-y-4">
                        {categorySkills.map((skill) => (
                            <SkillBar
                                key={skill.name}
                                name={skill.name}
                                level={skill.level}
                                color={
                                    category === 'Programming Languages' ? 'blue' :
                                        category === 'Frameworks & Libraries' ? 'green' :
                                            category === 'Tools & Platforms' ? 'purple' :
                                                'gray'
                                }
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}