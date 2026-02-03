import Image from "next/image";
import { cn } from "@/lib/utils";

interface FloraIllustrationBottomProps {
  className?: string;
}

export function FloraIllustrationBottom({ className }: FloraIllustrationBottomProps) {
  return (
    <Image
      src="/illustration/floral-illustration-1.png"
      alt=""
      width={1920}
      height={600}
      className={cn("mix-blend-multiply", className)}
      draggable={false}
      aria-hidden="true"
    />
  );
}

export function FloraIllustrationTop() {
  return (
    <div className="col-[2/-1] flex justify-end max-w-3/4 justify-self-end -mt-8 -mb-24">
      <Image
        src="/illustration/floral-illustration-2.png"
        alt=""
        width={1920}
        height={1920}
        className="mix-blend-multiply xs:-translate-y-4 md:translate-y-0"
        draggable={false}
        aria-hidden="true"
      />
    </div>
  );
}
