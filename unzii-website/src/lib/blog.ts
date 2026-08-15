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
  {
    slug: "best-seo-agency-for-startups",
    title: "How to Choose the Best SEO Agency for Startups",
    excerpt:
      "Choosing the best SEO agency for startups isn't easy. Here's what to actually look for: transparency, results, and communication.",
    category: "SEO",
    author: { name: "Unsa Zafar", role: "Founder, Unzii" },
    publishedAt: "2026-08-15",
    sections: [
      {
        id: "why-this-decision-is-different-for-startups",
        heading: "Why this decision is different for startups",
        body: [
          "An established company can usually absorb a year of mediocre SEO work and barely notice. A startup cannot. Runway is limited, every dollar is doing double duty, and a wasted quarter with the wrong agency can mean the difference between hitting your next milestone and not.",
          "That is what makes this decision higher stakes than it looks. You are not just buying rankings, you are buying months of your limited runway, and you need that time spent on work that actually moves the business forward.",
        ],
      },
      {
        id: "red-flags-to-watch-for",
        heading: "Red flags to watch for",
        body: [
          "Guaranteed first page rankings are the clearest warning sign. Nobody controls Google's algorithm, and any agency promising specific rankings on a specific date is either inexperienced or not being honest with you.",
          "Watch out for generic proposals that could have been sent to any business in any industry, reporting that is just screenshots of charts with no explanation of what changed or why, and pricing so low it could not possibly cover real, ongoing work. SEO is not a one time task you can buy cheaply and forget about.",
        ],
      },
      {
        id: "transparency-what-it-should-actually-look-like",
        heading: "Transparency: what it should actually look like",
        body: [
          "You should always have access to your own Google Search Console and Analytics accounts. If an agency wants to keep your data behind their own login, that is a sign they are optimizing for how replaceable you are, not for your business.",
          "Reporting should explain what was done and why in plain language, not just present numbers. If you cannot understand what happened this month after reading a report, the report has failed at its one job.",
        ],
      },
      {
        id: "results-how-to-actually-measure-them",
        heading: "Results: how to actually measure them",
        body: [
          "Rankings alone are not the goal, they are a proxy for the goal. What actually matters is organic traffic that fits your target audience, and whether that traffic turns into signups, leads, or sales. An agency that only talks about rankings is measuring the wrong thing.",
          "SEO compounds over months, not weeks. Be skeptical of anyone promising fast results, and equally skeptical of anyone who cannot give you any timeline at all. A good agency will tell you what to realistically expect at 30, 90, and 180 days.",
        ],
      },
      {
        id: "communication-the-most-overlooked-factor",
        heading: "Communication: the most overlooked factor",
        body: [
          "Find out who will actually be doing the work on your account, and whether you will talk to them directly or only to an account manager relaying messages. For a startup, direct access to the people doing the work usually matters more than a polished sales process.",
          "Pay attention during the sales conversation itself. If an agency cannot clearly explain their process before you sign anything, they are unlikely to explain it clearly afterward either.",
        ],
      },
      {
        id: "a-few-questions-worth-asking-before-you-hire",
        heading: "A few questions worth asking before you hire",
        body: [
          "Who specifically will work on my account, and can I talk to them directly? Can you show me an example of a monthly report, with the names removed? If my website itself has technical problems, is fixing that part of the engagement or a separate cost? How do you define success, and how will I know if it is working?",
          "A startup does not need the biggest SEO agency, or the cheapest one. It needs one that will be honest about what is possible, clear about what they are doing, and easy to reach when you have a question.",
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
