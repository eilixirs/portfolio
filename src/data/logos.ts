import type { FC, SVGProps } from "react";

import MaisonVeris from "@/assets/logos/maison-veris.svg";
import Sedna from "@/assets/logos/sedna.svg";
import TheAgency from "@/assets/logos/the-agency.svg";
import StudentStarts from "@/assets/logos/student-starts.svg";
import Noemi from "@/assets/logos/noemi.svg";
import Pfa from "@/assets/logos/pfa.svg";
import PookieSnackBar from "@/assets/logos/pokie-snack-bar.svg";
import Asu from "@/assets/logos/asu.svg";

export interface Logo {
  /** Display name of the brand. */
  name: string;
  /** Short description of the brand or the identity work. */
  description: string;
  /** Inline SVG component — colored via `currentColor` (set a `text-*` class on it). */
  Mark: FC<SVGProps<SVGSVGElement>>;
}

export const logos: Logo[] = [
  {
    name: "Maison Veris",
    description:
      "Refined serif wordmark paired with a soaring crane — an elegant identity for a luxury house.",
    Mark: MaisonVeris,
  },
  {
    name: "Sedna",
    description:
      "Clean geometric wordmark anchored by a modular, stacked-block icon for a tech brand.",
    Mark: Sedna,
  },
  {
    name: "The Agency",
    description:
      "Structured, all-caps wordmark framed in a bold border for a confident, no-nonsense mark.",
    Mark: TheAgency,
  },
  {
    name: "Student Starts",
    description:
      "Energetic bold wordmark with a graduation-cap motif for an education-focused venture.",
    Mark: StudentStarts,
  },
  {
    name: "Noëmi",
    description:
      "Minimal lowercase wordmark with a delicate botanical flourish — soft and feminine.",
    Mark: Noemi,
  },
  {
    name: "PFA",
    description:
      "Bold monogram crowned with a jester motif and spade — a playful, poker-themed mark.",
    Mark: Pfa,
  },
  {
    name: "Pookie Snack Bar",
    description:
      "Bubbly, hand-drawn lettering bursting with personality for a fun, casual snack bar.",
    Mark: PookieSnackBar,
  },
  {
    name: "ASU",
    description:
      "Fluid, calligraphic custom wordmark built from organic, hand-crafted letterforms.",
    Mark: Asu,
  },
];
