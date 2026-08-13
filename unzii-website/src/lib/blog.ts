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
export const posts: BlogPost[] = [];

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
