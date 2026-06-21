import { totalSeoPages } from "@/utils/seoSequence";

export async function GET() {
  const URLS_PER_SITEMAP = 10000;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.devservicetech.com";

  const numberOfSitemaps = Math.ceil(totalSeoPages / URLS_PER_SITEMAP);

  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, i) => {
    return `<sitemap>
      <loc>${BASE_URL}/sitemap/${i}.xml</loc>
    </sitemap>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
