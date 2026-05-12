"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}/`} className="block group">
      <motion.article
        className={cn(
          "bg-white border border-black/8 overflow-hidden cursor-pointer",
          className
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ transformOrigin: "center" }}
      >
        {post.type === "photo" && post.coverImage && (
          <div className="aspect-[16/9] w-full overflow-hidden bg-bg-light">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {post.type === "pdf" && (
          <div className="h-1.5 bg-gradient-to-r from-accent-peach via-accent-pink to-accent-peach" />
        )}

        <div className="p-6">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="text-xs text-text-medium tracking-wide">
              {formattedDate}
            </span>
            {post.type === "pdf" && (
              <span className="text-[11px] font-medium bg-black/5 text-text-medium px-2 py-0.5 rounded-full tracking-wide">
                PDF
              </span>
            )}
          </div>

          <h3 className="font-serif font-light italic tracking-[-0.05em] text-xl leading-snug mb-2.5 text-text-dark">
            {post.title}
          </h3>

          <p className="text-sm text-text-medium leading-relaxed">
            {post.description}
          </p>

        </div>
      </motion.article>
    </Link>
  );
}
