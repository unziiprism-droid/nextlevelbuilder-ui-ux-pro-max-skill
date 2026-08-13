export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogSection {
  heading: string;
  id: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: BlogAuthor;
  publishedAt: string;
  sections: BlogSection[];
}

// Add real posts here as they're written. Every page on /blog and
// /blog/[slug] (search, categories, table of contents, related posts,
// reading time) is built to activate automatically once this array is
// no longer empty.
export const posts: BlogPost[] = [
  {
    slug: "what-actually-makes-a-website-fast",
    title: "What Actually Makes a Website Fast",
    excerpt:
      "Site speed usually gets blamed on hosting or images. Here's what actually determines whether a website feels fast, and what to fix first.",
    category: "Web Development",
    author: { name: "Unsa Zafar", role: "Founder, Unzii" },
    publishedAt: "2026-08-13",
    sections: [
      {
        id: "why-speed-matters-more-than-it-seems",
        heading: "Why speed matters more than it seems",
        body: [
          "A slow website does not just feel annoying, it actively costs businesses visitors and money. Most people decide whether to stay on a page within the first few seconds, and if it feels sluggish, they leave before your content even has a chance to load properly.",
          "Speed also affects how search engines treat your site. Core Web Vitals, Google's set of speed and stability measurements, are a direct ranking factor. A fast site is not just a nicer experience, it is part of how you get found in the first place.",
        ],
      },
      {
        id: "the-usual-suspects-and-why-theyre-not-the-whole-story",
        heading: "The usual suspects, and why they're not the whole story",
        body: [
          "When a website feels slow, the first things people blame are hosting and images. Both can genuinely be problems, but they are rarely the whole story. Plenty of sites on solid hosting with reasonably sized images still feel slow, because the real bottlenecks are usually happening somewhere less visible.",
        ],
      },
      {
        id: "what-actually-slows-a-website-down",
        heading: "What actually slows a website down",
        body: [
          "In practice, the biggest culprits tend to be large JavaScript bundles that the browser has to download and run before a page becomes interactive, render blocking resources that delay anything from showing up on screen, and third party scripts (chat widgets, analytics, ad tools) that each add their own delay on top of your own code.",
          "Unoptimized fonts and layout shifts play a role too. If text or images jump around as a page loads, it does not just look unpolished, it actively makes the page feel slower and less trustworthy, even if the total load time is not that different.",
        ],
      },
      {
        id: "fixing-it-in-the-right-order",
        heading: "Fixing it, in the right order",
        body: [
          "Start with the easy wins: compress and properly size images, and load fonts in a way that does not block the page from rendering. These changes are low risk and often make a noticeable difference on their own.",
          "From there, look at your JavaScript. Are you shipping code the page does not actually need on first load? Can heavier features be loaded only when someone actually uses them, instead of upfront? Then audit third party scripts honestly. Every chat widget, tracking pixel, and embed has a cost, and it is worth asking whether each one earns its place.",
          "Hosting matters, but it is usually the last lever to pull, not the first. A better server will not fix a page that is shipping megabytes of JavaScript it does not need.",
        ],
      },
      {
        id: "a-simple-way-to-check-where-you-stand",
        heading: "A simple way to check where you stand",
        body: [
          "You do not need expensive tools to get a real picture of your site's performance. Google's PageSpeed Insights is free and will show you Core Web Vitals for real visitors when there is enough traffic data, plus specific, actionable suggestions. Google Search Console has a Core Web Vitals report too, which is useful for spotting patterns across your whole site rather than just one page.",
          "If you are not sure where your site stands, that is usually the first thing worth checking, before any redesign or rebuild conversation even starts.",
        ],
      },
    ],
  },
];

export const categories = [
  "Web Development",
  "SEO",
  "Design & UX",
  "Behind the Scenes",
] as const;

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return posts
    .filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category)
    .slice(0, limit);
}

const WORDS_PER_MINUTE = 200;

export function getReadingTime(post: BlogPost): string {
  const wordCount = post.sections.reduce((total, section) => {
    return total + section.body.join(" ").split(/\s+/).filter(Boolean).length;
  }, 0);
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
