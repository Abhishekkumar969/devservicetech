import { allIndianCities } from "@/data/cities";

export const variations = [
  "Website Designers Company in",
  "Software Development Company in",
  "Website Developers Company in",
  "Best Website Developers Company in",
  "Website Development Company in",
  "Best Website Development Company in",
  "Top Website Development Company in",
  "Top 10 Website Development Company in",
  "Top 5 Website Development Company in",
  "Top 100 Website Development Company in",
  "Affordable Website Development Company in",
  "Low Budget Website Development Company in",
  "Low Cost Website Development Company in",
  "Website Development Company Near Me",
  "Ecommerce Website Development Company in",
  "Ecommerce Website Designer in",
  "Shopify Website Development Company in",
  "WooCommerce Website Developer in",
  "Business Website Development Company in",
  "Corporate Website Development Company in",
  "Startup Website Development Company in",
  "Portfolio Website Developer in",
  "Hotel Website Developer in",
  "Hotel Booking Website Developer in",
  "Resort Website Developer in",
  "Restaurant Website Developer in",
  "Cafe Website Developer in",
  "Banquet Website Developer in",
  "Banquet Website Developer Near Me",
  "Wedding Website Developer in",
  "Event Website Developer in",
  "Custom Website Development Company in",
  "Full Stack Web Developer in",
  "Frontend Developer in",
  "Backend Developer in",
  "MERN Stack Developer in",
  "React Website Developer in",
  "Next.js Website Developer in",
  "SEO Friendly Website Developer in",
  "SEO Optimized Website Development Company in",
  "Digital Marketing Company in",
  "SEO Company in",
  "Website Redesign Company in",
  "Lead Generation Website Developer in",
  "High Converting Website Developer in",
  "Landing Page Designer in",
  "Website Developer Near Me",
  "Best Website Developer Near Me",
  "Freelance Website Developer in",
  "Professional Website Developer in",
  "Fast Loading Website Developer in",
  "Mobile Friendly Website Developer in",
  "Responsive Website Designer in",
  "Website Maintenance Services in",
  "Website Security Services in",
  "Website Hosting Services in",
  "Domain and Hosting Provider in"
];

// Clean cities list
export const citiesList = allIndianCities
  .split(" | ")
  .map(c => c.trim())
  .filter(c => c.length > 0);

// Total SEO combinations
export const totalSeoPages = variations.length * citiesList.length;

// Helper to create a slug
export function createSlug(variation, city) {
  const text = `${variation} ${city}`;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Extract information based on index
export function getSeoInfoByIndex(index) {
  if (index < 0 || index >= totalSeoPages) return null;

  const variationIndex = Math.floor(index / citiesList.length);
  const cityIndex = index % citiesList.length;

  const variation = variations[variationIndex];
  const city = citiesList[cityIndex];

  return {
    index,
    variation,
    city,
    slug: createSlug(variation, city),
    title: `${variation} ${city}`
  };
}

// Find index by slug
export function getIndexBySlug(slug) {
  if (!slug) return -1;
  // Normalize the incoming slug just in case of capital letters or spaces in URL
  const normalizedSlug = decodeURIComponent(slug)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  for (let v = 0; v < variations.length; v++) {
    for (let c = 0; c < citiesList.length; c++) {
      const generated = createSlug(variations[v], citiesList[c]);
      if (generated === normalizedSlug) {
        return (v * citiesList.length) + c;
      }
    }
  }
  return -1;
}

export function getNextSeoInfo(currentSlug) {
  // If no slug, return the first one (Home Page)
  if (!currentSlug) {
    return getSeoInfoByIndex(0);
  }

  const currentIndex = getIndexBySlug(currentSlug);

  // If not found or last item, loop back to start
  if (currentIndex === -1 || currentIndex === totalSeoPages - 1) {
    return getSeoInfoByIndex(0);
  }

  return getSeoInfoByIndex(currentIndex + 1);
}

export function getCityFromSlug(slug) {
  if (!slug) return "India"; // Default
  const index = getIndexBySlug(slug);
  if (index === -1) return "India";

  return citiesList[index % citiesList.length];
}
