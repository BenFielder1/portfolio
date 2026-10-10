import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Pin the workspace root so a lockfile elsewhere on the machine is ignored.
    turbopack: { root: process.cwd() },
    async redirects() {
        return [
            // The education page was folded into the experience page.
            { source: "/education", destination: "/experience#education", permanent: true },
        ];
    },
};

export default nextConfig;
