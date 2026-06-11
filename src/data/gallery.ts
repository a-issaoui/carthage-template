import { img } from "@/lib/images";
import type { GalleryImage } from "@/types";

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "private-events", label: "Private Events" },
  { id: "food", label: "Food" },
] as const;

export const galleryImages: GalleryImage[] = [
  { src: img.weddingBallroom, alt: "Draped ballroom wedding reception", category: "weddings", aspect: "landscape" },
  { src: img.platedFine, alt: "Tasting course on porcelain", category: "food", aspect: "portrait" },
  { src: img.corporateCrowd, alt: "Corporate evening reception", category: "corporate", aspect: "landscape" },
  { src: img.weddingSweetheart, alt: "Sweetheart table with florals", category: "weddings", aspect: "portrait" },
  { src: img.dinnerToast, alt: "Candlelit private dinner toast", category: "private-events", aspect: "landscape" },
  { src: img.dessertBerries, alt: "Berry dessert composition", category: "food", aspect: "portrait" },
  { src: img.weddingDance, alt: "First dance under string lights", category: "weddings", aspect: "landscape" },
  { src: img.cocktailsBar, alt: "Craft cocktails at the bar", category: "private-events", aspect: "portrait" },
  { src: img.galaLights, alt: "Gala evening under festival lights", category: "corporate", aspect: "landscape" },
  { src: img.steak, alt: "Seared beef with jus", category: "food", aspect: "landscape" },
  { src: img.weddingOutdoorArch, alt: "Outdoor ceremony arch", category: "weddings", aspect: "portrait" },
  { src: img.partyToast, alt: "Friends toasting at a garden party", category: "private-events", aspect: "landscape" },
  { src: img.tapasSpread, alt: "Shared mezze and small plates", category: "food", aspect: "landscape" },
  { src: img.galaSparklers, alt: "Sparkler send-off at night", category: "corporate", aspect: "portrait" },
  { src: img.weddingFlorals, alt: "Wedding florals and place settings", category: "weddings", aspect: "landscape" },
  { src: img.cocktailPour, alt: "Cocktail poured at the bar", category: "private-events", aspect: "portrait" },
  { src: img.mezzeOverhead, alt: "Overhead spread of seasonal dishes", category: "food", aspect: "landscape" },
  { src: img.dinnerOverhead, alt: "Long table dinner from above", category: "private-events", aspect: "landscape" },
];
