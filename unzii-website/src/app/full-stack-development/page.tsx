import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Full Stack Development",
  description:
    "Full stack product engineering for web applications, coming soon from Unzii. Custom backends, databases, and real business logic, not just websites.",
};

export default function FullStackDevelopmentPage() {
  return (
    <ServiceHero
      eyebrow="Full Stack Development"
      badge="Coming Soon"
      heading="Full Stack Applications, Built From Idea to Launch"
      description="We're expanding beyond websites into full product engineering, real backends, databases, and business logic built around what your product needs."
      primaryLabel="Get Notified"
      primaryHref="/contact"
      background="bg-surface-tint"
    />
  );
}
