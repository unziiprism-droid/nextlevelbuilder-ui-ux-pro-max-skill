import type { BlogSection } from "@/lib/blog";

export function TableOfContents({ sections }: { sections: BlogSection[] }) {
  if (sections.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-surface-muted p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        On this page
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-text-secondary transition-colors hover:text-brand-secondary"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
