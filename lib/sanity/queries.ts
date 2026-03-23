import { client } from "./client";
import type { Job, Testimonial } from "./types";

// ── Jobs ───────────────────────────────────────────────────────────────────

export async function getJobs(filters?: {
  sector?: string;
  location?: string;
  jobType?: string;
  limit?: number;
}): Promise<Job[]> {
  const conditions = ['_type == "job"', "isActive == true"];
  if (filters?.sector) conditions.push(`sector->slug.current == "${filters.sector}"`);
  if (filters?.jobType) conditions.push(`jobType == "${filters.jobType}"`);

  const query = `*[${conditions.join(" && ")}] | order(postedAt desc) [0...${filters?.limit ?? 50}] {
    _id, title, slug, location, salaryMin, salaryMax, jobType, postedAt,
    "sector": sector->{name, slug}
  }`;

  return client.fetch(query, {}, { next: { revalidate: 300 } });
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const query = `*[_type == "job" && slug.current == $slug && isActive == true][0] {
    _id, title, slug, description, location, salaryMin, salaryMax,
    jobType, postedAt, companyName, applyEmail,
    "sector": sector->{name, slug}
  }`;
  return client.fetch(query, { slug }, { next: { revalidate: 300 } });
}

export async function getFeaturedJobs(limit = 6): Promise<Job[]> {
  return getJobs({ limit });
}

// ── Testimonials ───────────────────────────────────────────────────────────

export async function getTestimonials(context?: "employers" | "candidates"): Promise<Testimonial[]> {
  const condition = context ? ` && context == "${context}"` : "";
  const query = `*[_type == "testimonial"${condition}] | order(_createdAt desc) [0...6] {
    _id, quote, author, company, role
  }`;
  return client.fetch(query, {}, { next: { revalidate: 3600 } });
}
