import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export interface CityItem {
  name: string;
  image: string;
  href?: string;
}

export function CityGrid({
  cities,
  countryName,
}: {
  cities: CityItem[];
  countryName: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Cities We Serve</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Local, and everywhere in between
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            These are a few of the cities we work in, we provide SEO services
            across all of {countryName}, not just the ones shown here.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="overflow-hidden rounded-3xl border border-border"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={city.image} alt={city.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-center gap-3 bg-surface-muted p-5 text-center">
                <h3 className="text-base font-semibold text-brand-secondary">
                  {city.name}
                </h3>
                {city.href && (
                  <Button href={city.href} variant="secondary" size="md">
                    Learn More
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
