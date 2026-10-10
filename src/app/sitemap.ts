import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return [
        { url: `${profile.siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
        { url: `${profile.siteUrl}/projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${profile.siteUrl}/experience`, lastModified, changeFrequency: "monthly", priority: 0.8 },
        { url: `${profile.siteUrl}/cv`, lastModified, changeFrequency: "monthly", priority: 0.7 },
        { url: `${profile.siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    ];
}
