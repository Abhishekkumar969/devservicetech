import HomeContent from "@/components/HomeContent/HomeContent";
import { getCityFromSlug, getNextSeoInfo, getSeoInfoByIndex } from "@/utils/seoSequence";
import { notFound } from "next/navigation";

// Generate metadata for SEO based on the slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Try to find the matching SEO info
  const city = getCityFromSlug(slug);
  
  if (city === "India") {
    // If it didn't match our sequence exactly, you could return default metadata
    // or return notFound(). We'll just return default metadata with the slug as title.
    return {
      title: `${slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())} | DevService Tech`,
    };
  }

  // Parse variation and city properly
  // We can just rely on the slug parsing we did
  const title = slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${title} | DevService Tech`,
    description: `DevService Tech is a top-rated ${title.toLowerCase()}. We deliver fast, mobile-friendly, and SEO-optimized websites that help businesses grow online in ${city}.`,
  };
}

export default async function SeoLocationPage({ params }) {
  const { slug } = await params;
  
  const city = getCityFromSlug(slug);
  
  // Render the exact same Home Content, but passing the specific city!
  return <HomeContent city={city} />;
}
