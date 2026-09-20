export interface CaseStudy {
  slug: string;
  client: string;
  tagline: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  heroImage: string;
  heroAlt: string;
  challenge: {
    heading: string;
    body: string;
  };
  approach: {
    heading: string;
    body: string;
    gallery: { src: string; alt: string }[];
  };
  result: {
    heading: string;
    body: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hiii-sage",
    client: "Hiii Sage",
    tagline: "Brand refresh + WordPress rebuild",
    summary:
      "An events and marketplace platform connecting entrepreneurs, operators, and decision makers. Full brand refresh and a rebuilt WordPress site, delivered on a tight deadline.",
    coverImage: "/portfolio/hiiisage-cover.jpg",
    coverAlt: "Hiii Sage homepage hero: The right people. In the right room.",
    heroImage: "/portfolio/hiiisage-cover.jpg",
    heroAlt: "Hiii Sage homepage hero: The right people. In the right room.",
    challenge: {
      heading: "A full rebrand, on a hard deadline",
      body: "Hiii Sage needed to move on from its previous brand entirely: new name, new colors, new fonts, new imagery, new copy, all while keeping the page layout the client already liked. The site had to be rebuilt on a fresh install and live by a fixed launch date, with no room to slip.",
    },
    approach: {
      heading: "Rebuild the brand, keep what worked",
      body: "We applied the new visual identity, palette, and typography across the existing layout rather than starting from a blank page, rewrote the copy and imagery section by section, and worked through several rounds of client revisions before rebuilding everything in WordPress and connecting the new domain.",
      gallery: [
        {
          src: "/portfolio/hiiisage-activations.jpg",
          alt: "Hiii Sage custom activations section with event lounge photography",
        },
        {
          src: "/portfolio/hiiisage-events.jpg",
          alt: "Hiii Sage curated event experiences photo gallery",
        },
        {
          src: "/portfolio/hiiisage-difference.jpg",
          alt: "Hiii Sage what makes us different feature grid",
        },
      ],
    },
    result: {
      heading: "Live, on time, on the new domain",
      body: "Hiii Sage launched on schedule with its new brand fully in place, the old domain retired, and a site the client can keep building on as they add more events and partners.",
    },
  },
];

export function getAllCaseStudies() {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
