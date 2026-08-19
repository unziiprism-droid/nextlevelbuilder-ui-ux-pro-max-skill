import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface CityItem {
  name: string;
  description: string;
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

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-8">
          {cities.map((city) => (
            <div key={city.name}>
              <h3 className="text-lg font-semibold text-brand-secondary">
                SEO Services in {city.name}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                {city.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
