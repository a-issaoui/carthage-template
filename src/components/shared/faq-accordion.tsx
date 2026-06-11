import { Plus } from "lucide-react";
import type { Faq } from "@/types";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OliveBranch } from "@/components/ui/motifs";
import { JsonLd } from "@/components/shared/json-ld";

/** Native <details>/<summary> accordion — open reading column with hairline
 *  rests, no panel box. Emits FAQPage JSON-LD matching the visible text. */
export function FaqAccordion({
  faqs,
  kicker = "Questions",
  title = "Asked, and",
  accent = "answered.",
  tone = "parchment",
  withSchema = false,
}: {
  faqs: Faq[];
  kicker?: string;
  title?: string;
  accent?: string;
  tone?: "ivory" | "parchment";
  withSchema?: boolean;
}) {
  if (faqs.length === 0) return null;
  return (
    <Section tone={tone} className={tone === "parchment" ? "zellige" : undefined}>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <Container className="max-w-3xl">
        <SectionHeading kicker={kicker} title={title} accent={accent} align="center" className="mx-auto" />
        <Reveal>
          <OliveBranch className="mx-auto mt-7 h-4 text-copper/60" />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="font-display flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-medium leading-snug text-ink transition-colors hover:text-copper-deep [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-6 shrink-0 place-items-center text-copper-deep transition-transform duration-300 ease-[var(--ease-luxe)] group-open:rotate-45"
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="mt-3.5 max-w-xl text-pretty leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
