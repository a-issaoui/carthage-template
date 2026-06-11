import Link from "next/link";

/** Quiet breadcrumb trail — bare text in the page flow, no band, no box.
 *  (BreadcrumbList schema is emitted separately via breadcrumbSchema().) */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="limewash">
      <ol className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center gap-2 px-5 pt-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-soft/70 sm:px-8 lg:px-12">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="inline-block h-px w-3 bg-copper/40" />}
              {last ? (
                <span aria-current="page" className="text-copper-deep">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-copper-deep">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
