"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Ben Fielder
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className={`hover:text-blue-600 transition ${pathname === "/" ? "text-blue-600 font-medium" : ""}`}>Home</Link>
                    {/* <Link href="/about" className={`hover:text-blue-600 transition ${pathname === "/about" ? "text-blue-600 font-medium" : ""}`}>About</Link> */}
                    <Link href="/projects" className={`hover:text-blue-600 transition ${pathname === "/projects" ? "text-blue-600 font-medium" : ""}`}>Projects</Link>
                    {/* <Link href="/skills" className={`hover:text-blue-600 transition ${pathname === "/skills" ? "text-blue-600 font-medium" : ""}`}>Skills</Link> */}
                    <Link href="/education" className={`hover:text-blue-600 transition ${pathname === "/education" ? "text-blue-600 font-medium" : ""}`}>Education</Link>
                    <Link href="/experience" className={`hover:text-blue-600 transition ${pathname === "/experience" ? "text-blue-600 font-medium" : ""}`}>Experience</Link>
                    <Link href="/spaceworm" className={`hover:text-blue-600 transition ${pathname === "/spaceworm" ? "text-blue-600 font-medium" : ""}`}>Space Worm</Link>
                    <Link href="/contact" className={`hover:text-blue-600 transition ${pathname === "/contact" ? "text-blue-600 font-medium" : ""}`}>Contact</Link>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className={`hover:text-blue-600 transition ${pathname === "/" ? "text-blue-600 font-medium" : ""}`}>Home</Link>
                        {/* <Link href="/about" className={`hover:text-blue-600 transition ${pathname === "/about" ? "text-blue-600 font-medium" : ""}`}>About</Link> */}
                        <Link href="/projects" className={`hover:text-blue-600 transition ${pathname === "/projects" ? "text-blue-600 font-medium" : ""}`}>Projects</Link>
                        {/* <Link href="/skills" className={`hover:text-blue-600 transition ${pathname === "/skills" ? "text-blue-600 font-medium" : ""}`}>Skills</Link> */}
                        <Link href="/education" className={`hover:text-blue-600 transition ${pathname === "/education" ? "text-blue-600 font-medium" : ""}`}>Education</Link>
                        <Link href="/experience" className={`hover:text-blue-600 transition ${pathname === "/experience" ? "text-blue-600 font-medium" : ""}`}>Experience</Link>
                        <Link href="/spaceworm" className={`hover:text-blue-600 transition ${pathname === "/spaceworm" ? "text-blue-600 font-medium" : ""}`}>Space Worm</Link>
                        <Link href="/contact" className={`hover:text-blue-600 transition ${pathname === "/contact" ? "text-blue-600 font-medium" : ""}`}>Contact</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}