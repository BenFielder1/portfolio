"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/Icons";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
    listeners.add(callback);
    return () => {
        listeners.delete(callback);
    };
}

// Dark is the site default, so anything other than an explicit "light" is dark.
function getSnapshot(): Theme {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
    return "dark";
}

function setTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    try {
        localStorage.setItem("theme", next);
    } catch {
        /* storage unavailable; the theme still applies for this page */
    }
    listeners.forEach((listener) => listener());
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={label}
            title={label}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg ${className}`}
        >
            {theme === "dark" ? <Sun width={17} height={17} /> : <Moon width={17} height={17} />}
        </button>
    );
}
