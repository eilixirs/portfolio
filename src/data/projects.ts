export interface Project {
  /** URL slug — used for /projects/[slug]. */
  slug: string;
  /** Project title. */
  name: string;
  /** Short tagline / category shown under the title and on the card. */
  shortDescription: string;
  /** Long-form description shown on the project page. */
  longDescription: string;
  /** ISO date (YYYY-MM-DD) — formatted to a readable string when displayed. */
  date: string;
  /** Thumbnail image path in /public. */
  thumbnail: string;
  /** PDF path in /public. Omit to fall back to the full-resolution thumbnail. */
  pdf?: string;
}

export const projects: Project[] = [
  {
    slug: "logofolio",
    name: "Logofolio",
    shortDescription: "Logo & Brand Identity",
    longDescription:
      "A curated collection of logos and brand marks developed across client work and personal projects — spanning hospitality, tech, education, and events. Each mark balances a distinct personality with the practical demands of a working identity system.",
    date: "2025-06-01",
    thumbnail: "/thumbnails/logofolio.png",
    pdf: "/pdfs/logofolio.pdf",
  },
  {
    slug: "gm",
    name: "GM Marketing Campaign",
    shortDescription: "Integrated Marketing Campaign",
    longDescription:
      "A pitch presentation for General Motors' 2026 compact SUV lineup, pairing strategic market analysis with an integrated, multi-channel campaign concept. The deck moves from audience insight through creative direction to a measurable activation plan.",
    date: "2025-05-01",
    thumbnail: "/thumbnails/gm.jpg",
    pdf: "/pdfs/gm.pdf",
  },
  {
    slug: "student-starts",
    name: "Student Starts",
    shortDescription: "Brand Identity & Campaign",
    longDescription:
      "Brand identity and marketing materials for Student Starts, an education-focused initiative. The work pairs an energetic, approachable visual system with campaign collateral built to drive student engagement and turnout.",
    date: "2019-07-01",
    thumbnail: "/thumbnails/student-starts.png",
    pdf: "/pdfs/student-starts.pdf",
  },
  {
    slug: "qbr",
    name: "QBR",
    shortDescription: "Brand & Editorial Design",
    longDescription:
      "Brand and editorial design work for QBR, bringing a cohesive visual system to its layouts and published materials.",
    date: "2025-01-01",
    thumbnail: "/thumbnails/qbr.jpg",
    pdf: "/pdfs/qbr.pdf",
  },
  {
    slug: "qbr-exec",
    name: "QBR Exec",
    shortDescription: "Brand & Editorial Design",
    longDescription:
      "Executive-facing design work for QBR — a polished extension of the brand system applied to leadership materials.",
    date: "2025-01-01",
    thumbnail: "/thumbnails/qbr-exec.jpg",
    // No pdf — falls back to the full-resolution thumbnail.
  },
  {
    slug: "stillness",
    name: "Stillness",
    shortDescription: "Photography",
    longDescription:
      "A photography series exploring quiet, composed moments — a study in light, space, and stillness.",
    date: "2025-01-01",
    thumbnail: "/thumbnails/stillness.png",
    pdf: "/pdfs/stillness-photography.pdf",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
