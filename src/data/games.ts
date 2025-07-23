export interface Game {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    platforms: string[];
    demoLink?: string;
    githubLink?: string;
    mobileDownloadLink?: string;
}

export const games: Game[] = [
    {
        id: "game-1",
        title: "Pyramid Numbers",
        description: "Merge and add the number tiles in the pyramid to reach the target number at the top of the pyramid. A fun and challenging puzzle game.",
        imagePath: "/images/projects/newfeaturepic.png",
        platforms: ["mobile"],
        demoLink: "/spaceworm/pyramidnumbers",
        mobileDownloadLink: "/a/b",
    }
];