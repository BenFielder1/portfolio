import Image from "next/image";

import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Space Worm</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="md:col-span-1">
                    <p className="text-gray-700 mb-6">
                        Game Developer and Publisher Brand.
                        Works with C# and Unity.
                        View some games by Space Worm here.
                        Currently, the mobile games aren&apos;t available on the Google Play Store
                        due to not having enough testers, but they can be downloaded from the links attached.
                    </p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6" /* lg:grid-cols-3 */ >
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                title={game.title}
                                description={game.description}
                                imagePath={game.imagePath}
                                platforms={game.platforms}
                                demoLink={game.demoLink}
                                githubLink={game.githubLink}
                                mobileDownloadLink={game.mobileDownloadLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}