import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LocationChips } from "@/components/blocks/location-chips";

/** Service area panel + location chips — "do they come to me?" answered. */
export function ServiceArea() {
  return (
    <>
      <Section tone="ivory" className="pb-10 sm:pb-12">
        <Container>
          <SectionHeading
            kicker="Service Area"
            title="If it's in LA County,"
            accent="we've probably parked there."
            lede="From Malibu cliffsides to DTLA freight elevators — area-specific logistics, venues we know by name, and lead times that reflect real traffic, not wishful thinking."
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.2}>
            <p className="sr-only">Catering service areas across greater Los Angeles</p>
          </Reveal>
        </Container>
      </Section>
      <LocationChips />
    </>
  );
}
