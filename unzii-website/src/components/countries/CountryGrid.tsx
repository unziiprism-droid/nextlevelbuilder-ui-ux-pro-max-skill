import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const countries = [
  {
    name: "United States",
    image: "/countries/united-states.jpg",
    href: "/seo-services-united-states",
  },
  {
    name: "India",
    image: "/countries/india.jpg",
    href: "/seo-services-india",
  },
  {
    name: "Pakistan",
    image: "/countries/pakistan.jpg",
    href: "/seo-services-pakistan",
  },
];

export function CountryGrid() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Where We Work</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
            Countries we serve
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {countries.map((country) => (
            <a
              key={country.name}
              href={country.href}
              className="group block overflow-hidden rounded-3xl border border-border"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-surface-muted p-5 text-center">
                <h3 className="text-base font-semibold text-brand-secondary">
                  {country.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
