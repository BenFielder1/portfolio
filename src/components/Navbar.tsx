"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                hasScrolled
                    ? "py-3 bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-[var(--glass-border)]"
                    : "py-5 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="relative flex h-10 w-10 items-center justify-center">
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="relative font-mono font-bold text-[var(--bg-primary)]">BF</span>
                    </span>
                    <span className="font-semibold text-lg hidden sm:block">
                        Ben <span className="text-gradient">Fielder</span>
                    </span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className="relative w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                                isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link px-4 py-2 rounded-lg transition-colors ${
                                pathname === item.href ? "active text-[var(--text-primary)]" : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="container mx-auto px-6 py-6 flex flex-col gap-2 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-t border-[var(--glass-border)]">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                                pathname === item.href
                                    ? "bg-[var(--glass-highlight)] text-[var(--accent-cyan)]"
                                    : "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
