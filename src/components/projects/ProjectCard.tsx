import Link from "next/link";
import Image from "next/image";
import { Heading, Text } from "@/components/primitives";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={cn("flex flex-col gap-4 group", className)}
    >
      <Image
        src={project.thumbnail}
        alt={project.name}
        width={0}
        height={0}
        sizes="(min-width: 640px) 33vw, 50vw"
        className="w-full h-auto bg-bg-light"
      />
      <div className="flex flex-col gap-1">
        <Heading level={3} className="mb-0">
          {project.name}
        </Heading>
        <Text as="p" variant="small">
          {project.shortDescription}
        </Text>
      </div>
    </Link>
  );
}
