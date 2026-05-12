import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostType = "photo" | "pdf";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  type: BlogPostType;
  coverImage?: string;
  pdfPath?: string;
  tags?: string[];
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(BLOG_DIR, filename);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(source);
      return { slug, ...data } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(
  slug: string
): { frontmatter: BlogPost; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    frontmatter: { slug, ...data } as BlogPost,
    content,
  };
}
