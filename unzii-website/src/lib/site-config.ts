export const siteConfig = {
  name: "Unzii",
  tagline: "Technology That Drives Business",
  description:
    "Unzii partners with businesses of every size to create fast websites, improve online visibility, and deliver measurable results.",
  url: "https://unzii.com",
  email: "hello@unzii.com",
};

export type ServiceStatus = "live" | "coming-soon";

export interface ServiceLink {
  label: string;
  href: string;
  description: string;
  status: ServiceStatus;
}

export const services: ServiceLink[] = [
  {
    label: "Website Development",
    href: "/website-development",
    description: "Custom built, high performance websites engineered to convert.",
    status: "live",
  },
  {
    label: "SEO",
    href: "/seo",
    description: "Technical, on page, and content SEO that compounds over time.",
    status: "live",
  },
  {
    label: "Full Stack Development",
    href: "/full-stack-development",
    description: "Full lifecycle product engineering for web applications.",
    status: "coming-soon",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services,
  company: primaryNav,
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavLink[],
};
