import { Hero } from "@/sections/home/hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { OurCraft } from "@/sections/home/our-craft";
import { WhatWeCater } from "@/sections/home/what-we-cater";
import { FeatureLinks } from "@/components/blocks/feature-links";
import { CuisineGrid } from "@/sections/home/cuisine-grid";
import { CateringTabs } from "@/components/blocks/catering-tabs";
import { WhyPillars } from "@/sections/home/why-pillars";
import { SpecialtiesCarousel } from "@/components/blocks/specialties-carousel";
import { FeaturedBand } from "@/sections/home/featured-band";
import { HomeTestimonials } from "@/sections/home/home-testimonials";
import { ServiceArea } from "@/sections/home/service-area";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";

/* Home = the §1 block manifest: FullHero → TrustStrip → Our craft →
   What we cater → FeatureLinks → Cuisine grid → Catering tabs →
   Why pillars → Specialties → Featured band → Testimonials →
   Service area + chips → conversion exit. */

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <OurCraft />
      <WhatWeCater />
      <FeatureLinks />
      <CuisineGrid />
      <CateringTabs />
      <WhyPillars />
      <SpecialtiesCarousel />
      <FeaturedBand />
      <HomeTestimonials />
      <ServiceArea />
      <QuoteCtaCard
        from="home"
        title="Set the date. We set the table."
        body="Weddings, premieres, Tuesday lunches — every engagement starts with two fields and ends with a menu sketch in your inbox within one business day."
        image="/images/hero/hero-carthage.jpg"
        imageAlt="The Carthaginian terrace feast at sunset — where the page began"
      />
    </>
  );
}
