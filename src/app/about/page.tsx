import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/images/profile.jpg"
                            alt="Ben Fielder"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                    <p className="text-gray-700 mb-6">
                        I&#39;m a Software Developer and Computer Science student at the University of Warwick, passionate about building
                        applications that solve real-world problems. My journey in programming began when I was 15, tinkering with small
                        games and scripts, which eventually led me to pursue a degree in Computer Science.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
                    <p className="text-gray-700 mb-6">
                        I specialize in full-stack development, with particular interest in web technologies and application design.
                        I enjoy working on projects that challenge me to learn new skills and technologies. My current focus areas include
                        React, Next.js, and exploring cloud services for scalable applications.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Beyond Coding</h2>
                    <p className="text-gray-700 mb-6">
                        When I&#39;m not coding, you&#39;ll find me exploring new hiking trails, reading about technology trends, or
                        participating in hackathons. I believe in continuous learning and regularly attend tech meetups and conferences
                        to stay connected with the developer community.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
                    <p className="text-gray-700">
                        I approach software development with a focus on clean, maintainable code and thoughtful user experiences.
                        I&#39;m a strong believer in agile methodologies and test-driven development to ensure robust applications.
                        I enjoy collaborating with teams that value innovation and quality craftsmanship in their work.
                    </p>
                </div>
            </div>
        </div>
    );
}