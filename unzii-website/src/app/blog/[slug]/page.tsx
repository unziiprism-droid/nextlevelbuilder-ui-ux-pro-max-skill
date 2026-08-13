import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, getReadingTime, getRelatedPosts } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Required for static export: only pre-generated slugs exist as files.
// Add real posts to src/lib/blog.ts and rebuild to generate new pages.
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="pt-16 pb-24 lg:pt-20 lg:pb-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand-secondary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to Blog
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-supporting">
            {post.category}
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-text-muted">
            <span>{post.author.name},</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              ,
            </time>
            <span>{getReadingTime(post)}</span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_18rem]">
          <article className="flex max-w-3xl flex-col gap-10">
            {post.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-brand-secondary">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={post.sections} />
            <AuthorBio author={post.author} />
          </aside>
        </div>
      </Container>

      <RelatedPosts posts={related} />
      <FinalCTA />
    </>
  );
}
