import type { BlogAuthor } from "@/lib/blog";

export function AuthorBio({ author }: { author: BlogAuthor }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface-muted p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-semibold text-text-inverse">
        {author.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </span>
      <div>
        <p className="text-sm font-semibold text-brand-secondary">{author.name}</p>
        <p className="text-xs text-text-muted">{author.role}</p>
      </div>
    </div>
  );
}
