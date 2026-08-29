import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { getReadingTime } from "@/lib/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/20 hover:shadow-lifted"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-steel">
        {post.category}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-brand-secondary">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
        <span>
          {post.author.name}, {getReadingTime(post)}
        </span>
        <ArrowRight
          className="size-4 text-brand-secondary transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </div>
    </Link>
  );
}
