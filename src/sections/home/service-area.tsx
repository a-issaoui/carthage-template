import { locations } from "@/data/locations";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AreaTile } from "@/components/blocks/area-tile";
import { ButtonLink } from "@/components/ui/button";

/** Service area — eight neighborhoods, each with its own photograph.
 *  Renders the shared AreaTile (same tiles as LocationChips sitewide). */
export function ServiceArea() {
  return (
    <Section tone="ivory">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Service Area"
            title="If it's in LA County,"
            accent="we've probably parked there."
            lede="From Malibu cliffsides to DTLA freight elevators — area-specific logistics, venues we know by name, and lead times that reflect real traffic, not wishful thinking."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/locations" variant="outline" className="mb-2">
              All Areas
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {locations.map((location, i) => (
            <Reveal as="li" key={location.slug} delay={(i % 4) * 0.07}>
              <AreaTile location={location} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
