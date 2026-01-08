import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ben Fielder | Software Engineer",
    description: "Portfolio showcasing projects, skills, and experience in software development",
    keywords: ["Software Engineer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript"],
    authors: [{ name: "Ben Fielder" }],
    openGraph: {
        title: "Ben Fielder | Software Engineer",
        description: "Portfolio showcasing projects, skills, and experience in software development",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* Animated background elements */}
                <div className="bg-mesh" aria-hidden="true" />
                <div className="bg-grid" aria-hidden="true" />
                
                <Navbar />
                <main className="min-h-screen pt-24 pb-16 relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
