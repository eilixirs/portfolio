import { cn } from "@/lib/utils";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-5 right-8",
        "text-4xl font-light text-text-dark",
        "hover:text-text-medium transition-colors",
        "cursor-pointer z-10",
        className
      )}
      aria-label="Close"
    >
      &times;
    </button>
  );
}
