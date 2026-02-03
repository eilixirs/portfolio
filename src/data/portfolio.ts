export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  pdfPath: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "project1",
    title: "Brand Guidelines",
    description: "Complete visual identity system for a campus organization",
    pdfPath: "/pdfs/project1.pdf",
  },
  {
    id: "project2",
    title: "Strategy Pitch Deck",
    description:
      "Executive presentation featuring strategic recommendations and insights",
    pdfPath: "/pdfs/project2.pdf",
  },
  {
    id: "project3",
    title: "GM Marketing Campaign",
    description:
      "Pitch presentation for General Motors 2026 compact SUV lineup marketing campaign",
    pdfPath: "/pdfs/project3.pdf",
  },
  {
    id: "project4",
    title: "Event Materials",
    description: "End-to-end branding for professional networking events",
    pdfPath: "/pdfs/project4.pdf",
  },
  {
    id: "project5",
    title: "Social Media Content",
    description: "Reels and graphics that drove 10,000+ average views",
    pdfPath: "/pdfs/project5.pdf",
  },
  {
    id: "project6",
    title: "Logofolio",
    description: "Collection of logos and brand marks developed over the years",
    pdfPath: "/pdfs/project6.pdf",
  },
];
