import Image from 'next/image';

import ProjectCard from '@/components/ProjectCard';
import { games } from '@/data/games';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Space Worm</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="md:col-span-1">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/images/projects/logo5.png"
                            alt="Space Worm"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">About</h2>
                    <p className="text-gray-700 mb-6">
                        Game Developer and Publisher Brand.
                        Works with C# and Unity.
                        View some games by Space Worm below.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {games.map((game) => (
                                <ProjectCard
                                    key={game.id}
                                    title={game.title}
                                    description={game.description}
                                    imagePath={game.imagePath}
                                    technologies={game.technologies}
                                    demoLink={game.demoLink}
                                    githubLink={game.githubLink}
                                />
                            ))}
                        </div>
        </div>
    );
}