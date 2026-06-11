import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

/** Shared shell for legal & utility prose pages. */
export function LegalPage({
  name,
  path,
  kicker,
  title,
  accent,
  sections,
}: {
  name: string;
  path: string;
  kicker: string;
  title: string;
  accent?: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name, path }])} />
      <PageHero kicker={kicker} title={title} accent={accent} />
      <Section tone="ivory">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-medium text-ink">{section.heading}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-ink-soft">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-14 border-t border-ink/10 pt-6 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Last updated June 2026
          </p>
        </Container>
      </Section>
    </>
  );
}
