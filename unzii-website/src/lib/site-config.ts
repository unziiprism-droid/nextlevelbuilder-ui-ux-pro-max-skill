export const siteConfig = {
  name: "Unzii",
  tagline: "Technology That Drives Business",
  description:
    "Unzii partners with businesses of every size to create fast websites, improve online visibility, and deliver measurable results.",
  url: "https://theunzii.com",
  email: "hello@unzii.com",
};

// Live chat: both are optional and inactive until a real value is set.
// Tawk.to (primary, universal): create a free account at tawk.to, then
// copy the Property ID and Widget ID from Admin > Channels > Chat Widget.
// WhatsApp (secondary): international format, digits only, no "+" or spaces.
export const chatConfig = {
  tawkPropertyId: "6a7dbc1882fc091d476a6d0f",
  tawkWidgetId: "1jvtidga2",
  whatsappNumber: "",
  whatsappMessage: "Hi! I'd like to learn more about Unzii's services.",
};

// Form submissions: delivered by Web3Forms (web3forms.com) directly to
// siteConfig.email, no backend required. Access key from the Unzii
// Web3Forms account.
export const formConfig = {
  web3formsAccessKey: "20e85d44-38a6-4fcc-bdec-c8ee3edba2fb",
};

export const analyticsConfig = {
  ga4MeasurementId: "G-T1JSEF1KWN",
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
