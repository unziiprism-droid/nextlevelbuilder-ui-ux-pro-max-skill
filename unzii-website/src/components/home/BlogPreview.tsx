import { Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export interface BlogPreviewPost {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readingTime: string;
}

// Wire this up to the real post source once the blog is built —
// the grid below activates automatically as soon as posts exist.
const posts: BlogPreviewPost[] = [];

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow>From the Blog</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
              Insights on web, SEO, and growth
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/blog" variant="secondary" showArrow>
              Visit the Blog
            </Button>
          </Reveal>
        </div>

        {posts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Reveal key={post.slug} className="rounded-2xl border border-border bg-surface p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-supporting">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-secondary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <span className="mt-4 block text-xs text-text-muted">{post.readingTime}</span>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1} className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-border-strong bg-surface-muted p-12 text-center">
            <Newspaper className="size-6 text-brand-supporting" aria-hidden />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Our first articles on web development, SEO, and growth are in progress.
              Check back soon for practical insights, without the fluff.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
