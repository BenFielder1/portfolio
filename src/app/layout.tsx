import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

const description =
    "Software engineer, building C#/.NET integration services, React and TypeScript frontends and cloud-native deployments on Kubernetes.";

export const metadata: Metadata = {
    metadataBase: new URL(profile.siteUrl),
    title: {
        default: `${profile.name} · ${profile.role}`,
        template: `%s · ${profile.name}`,
    },
    description,
    keywords: [
        "Ben Fielder",
        "Software Engineer",
        "C#",
        ".NET",
        "ASP.NET Core",
        "TypeScript",
        "React",
        "Next.js",
        "Kubernetes",
    ],
    authors: [{ name: profile.fullName, url: profile.siteUrl }],
    creator: profile.fullName,
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: profile.siteUrl,
        siteName: profile.name,
        title: `${profile.name} · ${profile.role}`,
        description,
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} · ${profile.role}`,
        description,
    },
    alternates: {
        canonical: "/",
    },
};

export const viewport: Viewport = {
    // The site opens in the dark theme regardless of OS preference.
    themeColor: "#121210",
    colorScheme: "dark light",
};

// Runs before first paint. Dark is the default; a saved choice overrides it.
const themeScript = `(function(){var t='dark';try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark'){t=s}}catch(e){}document.documentElement.dataset.theme=t})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en-GB"
            className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
            data-theme="dark"
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="flex min-h-dvh flex-col font-sans">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
                >
                    Skip to content
                </a>
                <div className="grain" aria-hidden />
                <Navbar />
                <main id="main" className="relative z-10 flex-1 pt-16 print:pt-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
