import { Container } from "@/components/layout/container";

/** Scannable hero facts — a floating panel that straddles the hero's arc,
 *  pulled up across the boundary instead of sitting in its own band. */
export function FactsRow({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="limewash relative">
      <Container>
        <dl className="overlap-panel mx-auto -mt-14 flex max-w-4xl flex-wrap items-stretch justify-center gap-x-0 gap-y-3 bg-ivory px-4 py-5 shadow-[var(--shadow-plate-lg)] sm:-mt-16 sm:px-8">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`px-6 text-center sm:px-9 ${i > 0 ? "border-l border-ink/10 max-sm:border-l-0" : ""}`}
            >
              <dd className="font-display text-xl text-copper-deep sm:text-2xl">{fact.value}</dd>
              <dt className="mt-1 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
