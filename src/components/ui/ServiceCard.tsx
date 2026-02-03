"use client";

import type { Service } from "@/data/services";
import { Text, Heading, Card } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Card border={false} background="light" className={cn("h-full relative overflow-hidden group", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-50"
        style={{
          backgroundImage: `url("/textures/dotnoise-light-grey.png")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Heading level={3}>{service.title}</Heading>
        <Text variant="small">{service.description}</Text>
      </div>
    </Card>
  );
}
