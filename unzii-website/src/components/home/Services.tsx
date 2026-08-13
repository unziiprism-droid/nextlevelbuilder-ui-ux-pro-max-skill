import Link from "next/link";
import { ArrowRight, Code2, Layers, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/site-config";

const icons = {
  "Website Development": Code2,
  SEO: Search,
  "Full Stack Development": Layers,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">What We Do</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Everything your business needs to grow online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            From the first line of code to long term search visibility, we build the
            digital foundation your business runs on.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.label as keyof typeof icons];
            return (
              <Reveal key={service.href} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/20 hover:shadow-lifted"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative flex size-12 items-center justify-center rounded-2xl bg-surface-muted text-brand-supporting transition-colors duration-300 group-hover:bg-brand-secondary group-hover:text-text-inverse">
                      <Icon className="size-5.5" aria-hidden />
                      {service.status === "live" && (
                        <span
                          className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full bg-status-live ring-2 ring-surface"
                          aria-hidden
                        />
                      )}
                    </span>
                    {service.status === "coming-soon" && (
                      <span className="rounded-full bg-brand-bg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-supporting">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-brand-secondary">
                    {service.label}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
