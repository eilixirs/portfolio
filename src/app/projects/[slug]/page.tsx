import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { projects, getProject } from "@/data/projects";
import { ProjectPdf } from "@/components/projects/ProjectPdf";
import { Heading, Text, PaperTexture } from "@/components/primitives";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });

  return (
    <>
      <PaperTexture />
      <main className="relative min-h-screen grid grid-cols-[1fr_min(48rem,100%-2*clamp(1.5rem,3vw,2.5rem))_1fr] *:col-start-2 z-10">
        <div className="py-16">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-medium hover:text-text-dark transition-colors mb-12"
          >
            <span>←</span>
            <span>Back</span>
          </Link>

          <Heading level={1}>{project.name}</Heading>

          <p className="text-sm text-text-medium tracking-wide mb-6 -mt-2">
            {formattedDate}
          </p>

          <Text variant="lead" className="mb-5">
            {project.shortDescription}
          </Text>

          <Text className="mb-12">{project.longDescription}</Text>

          {/* PDF — pages stacked edge-to-edge, full container width.
              Falls back to the full-resolution thumbnail when no PDF exists. */}
          {project.pdf ? (
            <ProjectPdf file={project.pdf} />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={0}
              height={0}
              sizes="(min-width: 768px) 768px, 100vw"
              className="w-full h-auto"
            />
          )}
        </div>
      </main>
    </>
  );
}
