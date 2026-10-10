"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Close, Menu } from "@/components/Icons";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

function subscribeToScroll(callback: () => void) {
    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const scrolled = useSyncExternalStore(
        subscribeToScroll,
        () => window.scrollY > 8,
        () => false
    );

    // Lock page scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <header
            className={`no-print fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ${
                scrolled || open
                    ? "border-b border-line bg-bg/85 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="container-page flex h-16 items-center justify-between">
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-2"
                    aria-label="Home"
                >
                    <span className="display text-2xl leading-none transition-colors group-hover:text-accent">{profile.name}</span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                                isActive(item.href)
                                    ? "bg-bg-muted text-fg"
                                    : "text-fg-muted hover:bg-bg-muted hover:text-fg"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ThemeToggle className="ml-2" />
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                    >
                        {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
                    </button>
                </div>
            </div>

            <div id="mobile-nav" className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-bg`}>
                <nav className="container-page flex flex-col py-4" aria-label="Mobile">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`flex items-center justify-between border-b border-line py-4 text-lg last:border-0 ${
                                isActive(item.href) ? "text-fg" : "text-fg-muted"
                            }`}
                        >
                            <span className="display text-3xl">{item.label}</span>
                            <span className="font-mono text-xs text-fg-faint">0{i + 1}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
