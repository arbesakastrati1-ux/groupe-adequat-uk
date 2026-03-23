export interface SanitySlug {
  current: string;
}

export interface SanityRef {
  _ref: string;
  _type: "reference";
}

export interface Sector {
  _id: string;
  name: string;
  slug: SanitySlug;
  description?: string;
}

export interface Job {
  _id: string;
  title: string;
  slug: SanitySlug;
  description?: unknown; // Sanity portable text
  location: string;
  salaryMin?: number;
  salaryMax?: number;
  jobType: "permanent" | "contract" | "temporary";
  postedAt: string;
  isActive: boolean;
  companyName?: string;
  applyEmail?: string;
  sector?: Sector;
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  context?: "employers" | "candidates";
}

export interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  summary: string;
  sector?: Sector;
}
