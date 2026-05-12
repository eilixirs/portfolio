"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { Section, DecoratedHeading } from "@/components/primitives";
import type { BlogPost } from "@/lib/blog";

interface BlogSectionProps {
  posts?: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <Section id="blog">
      <DecoratedHeading.Root level={2}>
        <DecoratedHeading.Background>项目</DecoratedHeading.Background>
        <DecoratedHeading.Content>My projects</DecoratedHeading.Content>
      </DecoratedHeading.Root>

      <div className="columns-1 md:columns-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="break-inside-avoid mb-6">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </Section>
  );
}
