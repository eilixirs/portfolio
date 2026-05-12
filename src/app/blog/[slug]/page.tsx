import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import type { JSX } from "react";

import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { PDFViewerModal } from "@/components/blog/PDFViewerModal";
import { PaperTexture } from "@/components/primitives";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-serif text-3xl md:text-4xl italic tracking-[-0.06em] mb-6 mt-10 text-text-dark leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-serif text-2xl italic tracking-[-0.05em] mb-4 mt-10 text-text-dark leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-sans text-lg font-medium mb-3 mt-8 text-text-dark">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-text-medium leading-[1.8] mb-5">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-outside ml-5 mb-5 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-outside ml-5 mb-5 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-text-medium leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-2 border-accent-pink pl-5 my-6 italic text-text-medium">
      {children}
    </blockquote>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-text-dark">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  hr: () => <hr className="border-black/10 my-10" />,
} as Record<string, (props: { children?: React.ReactNode }) => JSX.Element>;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const { frontmatter, content } = post;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PaperTexture />
      <main className="relative min-h-screen grid grid-cols-[1fr_min(48rem,100%-2*clamp(1.5rem,3vw,2.5rem))_1fr] *:col-start-2 z-10">
        <div className="py-16">
          {/* Back link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-medium hover:text-text-dark transition-colors mb-12"
          >
            <span>←</span>
            <span>Back</span>
          </Link>

          {/* Cover image for photo posts */}
          {frontmatter.type === "photo" && frontmatter.coverImage && (
            <div className="w-full aspect-[16/9] overflow-hidden mb-10 bg-bg-light">
              <img
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* PDF open button for pdf posts */}
          {frontmatter.type === "pdf" && frontmatter.pdfPath && (
            <div className="mb-10">
              <PDFViewerModal
                pdfPath={frontmatter.pdfPath}
                title={frontmatter.title}
              />
            </div>
          )}

          {/* Post header */}
          <div className="mb-10">
            <p className="text-sm text-text-medium mb-4 tracking-wide">
              {formattedDate}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light italic tracking-[-0.08em] mb-4 leading-tight text-text-dark">
              {frontmatter.title}
            </h1>
            <p className="text-lg text-text-medium leading-relaxed">
              {frontmatter.description}
            </p>
          </div>

          <div className="border-t border-black/10 mb-10" />

          {/* MDX body */}
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </main>
    </>
  );
}
