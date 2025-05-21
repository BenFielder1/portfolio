interface SkillBarProps {
    name: string;
    level: number; // 0-100
    color: 'blue' | 'green' | 'purple' | 'gray';
}

export default function SkillBar({ name, level, color }: SkillBarProps) {
    const getColorClass = () => {
        switch (color) {
            case 'blue': return 'bg-blue-600';
            case 'green': return 'bg-green-600';
            case 'purple': return 'bg-purple-600';
            default: return 'bg-gray-600';
        }
    };

    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span className="text-sm text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full ${getColorClass()}`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}