"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { cn } from "@/lib/utils";

export function BlogExplorer({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: readonly string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory;
      const matchesQuery =
        !query.trim() ||
        `${post.title} ${post.excerpt}`.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-text-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-full border border-border bg-surface py-2.5 pr-4 pl-11 text-sm text-brand-secondary outline-none placeholder:text-text-muted focus:border-brand-secondary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === null
                ? "bg-brand-secondary text-text-inverse"
                : "bg-surface-muted text-text-secondary hover:bg-brand-bg",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-brand-secondary text-text-inverse"
                  : "bg-surface-muted text-text-secondary hover:bg-brand-bg",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-border-strong bg-surface-muted p-8 text-center text-sm text-text-secondary">
          No articles match that search yet.
        </p>
      )}
    </div>
  );
}
