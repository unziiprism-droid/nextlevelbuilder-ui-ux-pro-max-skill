import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "WordPress",
  "Shopify",
  "PostgreSQL",
  "Google Search Console",
  "Google Analytics",
  "Figma",
  "Vercel",
];

export function Technologies() {
  const row = [...technologies, ...technologies];

  return (
    <section className="border-y border-border bg-surface-muted py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Our Toolkit</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Built with a modern, proven stack
          </h2>
        </Reveal>
      </Container>

      <div
        className="mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-4">
          {row.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="shrink-0 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
