import { totalSeoPages, getSeoInfoByIndex } from "@/utils/seoSequence";

const URLS_PER_SITEMAP = 10000;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.devservicetech.com";

export async function generateSitemaps() {
  const numberOfSitemaps = Math.ceil(totalSeoPages / URLS_PER_SITEMAP);
  return Array.from({ length: numberOfSitemaps }, (_, i) => ({
    id: i, // ID will be 0, 1, 2...
  }));
}

export default async function sitemap(props) {
  // Await the id promise from Next.js 16+, with a safe fallback to 0 if undefined
  const resolvedId = props?.id ? await props.id : 0;
  const chunkId = Number(resolvedId) || 0;
  const sitemapUrls = [];

  // Add static routes only in the first sitemap chunk
  if (chunkId === 0) {
    const staticRoutes = [
      "",
      "/about-us",
      "/contact",
      "/services",
      "/projects",
      "/cart",
      "/profile",
      "/login",
      "/signup",
      "/internship"
    ];

    staticRoutes.forEach(route => {
      sitemapUrls.push({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === "" ? 1 : 0.8,
      });
    });
  }

  const start = chunkId * URLS_PER_SITEMAP;
  const end = Math.min((chunkId + 1) * URLS_PER_SITEMAP, totalSeoPages);

  for (let i = start; i < end; i++) {
    const seoInfo = getSeoInfoByIndex(i);
    if (seoInfo) {
      sitemapUrls.push({
        url: `${BASE_URL}/${seoInfo.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return sitemapUrls;
}
