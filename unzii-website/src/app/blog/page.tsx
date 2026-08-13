import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Features } from "@/components/services/Features";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { FAQ } from "@/components/shared/FAQ";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Container } from "@/components/ui/Container";
import { getAllPosts, categories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no fluff writing on web development, SEO, and growth from Unzii. Our first articles are on the way.",
};

const topics = [
  "Website performance and Core Web Vitals",
  "Technical and on page SEO",
  "Design and user experience decisions",
  "Real project breakdowns as they happen",
  "Search visibility and content strategy",
  "Behind the scenes at Unzii",
];

const faqs = [
  {
    question: "Do you have any articles published yet?",
    answer:
      "Not yet. We'd rather publish our first article when it's genuinely useful than rush out filler content just to fill this page.",
  },
  {
    question: "What will you write about?",
    answer:
      "Practical, no fluff writing on web development, SEO, and the decisions behind real projects, written to actually help, not just to rank.",
  },
  {
    question: "Can I suggest a topic?",
    answer:
      "Yes. Reach out through our contact page with what you'd like to see covered.",
  },
  {
    question: "Will the blog support search and categories?",
    answer:
      "Yes, this page is already built to support search, categories, and related articles. They'll appear automatically as soon as the first posts are published.",
  },
];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogHero categories={categories} />

      <section className="py-24 lg:py-32">
        <Container>
          {posts.length > 0 ? (
            <BlogExplorer posts={posts} categories={categories} />
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-border-strong bg-surface-muted p-12 text-center">
              <Newspaper className="size-6 text-brand-supporting" aria-hidden />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
                We&apos;re writing our first articles now. Search and category filtering are
                already built into this page and will switch on the moment posts go
                live.
              </p>
            </div>
          )}
        </Container>
      </section>

      <Features
        eyebrow="What's Coming"
        heading="What we'll be writing about"
        description="A preview of the topics on our list, grouped around what actually helps businesses grow online."
        features={topics}
      />

      <FAQ eyebrow="FAQ" heading="Blog, answered" faqs={faqs} />
      <FinalCTA
        heading="Want practical advice sooner than that?"
        description="You don't have to wait for the blog. Tell us about your project and let's talk directly."
      />
    </>
  );
}
