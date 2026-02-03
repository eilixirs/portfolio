"use client";

import type { Service } from "@/data/services";
import { HoverLift, Text, Heading, Card } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <HoverLift lift="md" className={cn("transition-shadow", className)}>
      <Card>
        <Heading level={3}>{service.title}</Heading>
        <Text variant="small">{service.description}</Text>
      </Card>
    </HoverLift>
  );
}
