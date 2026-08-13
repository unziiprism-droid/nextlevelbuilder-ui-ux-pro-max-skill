import type { BlogPost } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <Eyebrow>Related Reading</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-secondary sm:text-4xl">
          More from the blog
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
