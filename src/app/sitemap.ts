import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://buyops.ng",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://buyops.ng/#features",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://buyops.ng/#waitlist",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ];
}
