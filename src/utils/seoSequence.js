import { allIndianCities } from "@/data/cities";

export const variations = [
  "Website Designers Company in",
  "Website Designers in",
  "Software Development Company in",
  "Software Development Company in",
  "Best Website Development Company in",
  "Ecommerce Website Development Company in",
  "Business Website Development Company in",
  "SEO Optimized Website Development Company in",
  "Website Redesign Company in",
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
