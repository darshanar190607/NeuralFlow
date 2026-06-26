export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Nikhil Sharma",
    role: "VP of Engineering",
    company: "Inflow Analytics",
    content: "The dynamic schema mapping is absolute magic. Our Salesforce webhook changed 4 key properties, and the platform mapped them without causing a single error in our PostgreSQL warehouse.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    role: "Lead Analytics Architect",
    company: "ScribeLabs AI",
    content: "Calculating regional prices has never been more accurate, and neither has our vector pipeline. Our search retrieval precision boosted by 28% because our PgVector indexes sync under 50ms now.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
    rating: 5,
  },
  {
    id: "t3",
    name: "Alex van der Berg",
    role: "Director of Product Operations",
    company: "VeloCloud Group",
    content: "The real-time syncing across our operations browser tabs lets our global ops team monitor pipeline jobs concurrently. It works so smoothly we stopped looking for full monitoring suites.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    rating: 5,
  },
];

export interface CompanyLogo {
  name: string;
  iconName: "Cube16Solid" | "Cog8Tooth" | "ChartPie" | "LinkSolid";
}

export const COMPANY_LOGOS: CompanyLogo[] = [
  { name: "Acme Corp", iconName: "Cube16Solid" },
  { name: "Globex", iconName: "Cog8Tooth" },
  { name: "Initech", iconName: "ChartPie" },
  { name: "Umbrella Corp", iconName: "LinkSolid" },
];
