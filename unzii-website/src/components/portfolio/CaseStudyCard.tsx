import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${caseStudy.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-brand-secondary shadow-lifted"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.coverAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-yellow">
            {caseStudy.tagline}
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-text-inverse">
            {caseStudy.client}
          </h3>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-secondary transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
