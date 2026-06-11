import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  { number: "1", title: "You send the request", text: "Event type and email are the only required fields — everything else is honestly skippable." },
  { number: "2", title: "We reply in one business day", text: "A real person, a first menu sketch, and a per-person figure. Questions worth asking, nothing scripted." },
  { number: "3", title: "Optional tasting", text: "For weddings and large events: six courses at the Melrose atelier, chef at the table, pencil in hand." },
  { number: "4", title: "Written proposal", text: "Line-by-line pricing, the minute-map, and the dietary architecture — signed when you're ready, not before." },
];

/** "What happens next" — kills fear of the unknown on the quote page. */
export function ProcessTimeline() {
  return (
    <section className="limewash py-16 sm:py-20">
      <Container wide>
        <SectionHeading kicker="What Happens Next" title="Four steps," accent="zero pressure." />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.1}>
              <div className="h-full border-t-2 border-copper/40 pt-5">
                <span className="font-display text-3xl italic text-copper-deep">{step.number}</span>
                <h3 className="font-display mt-3 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
