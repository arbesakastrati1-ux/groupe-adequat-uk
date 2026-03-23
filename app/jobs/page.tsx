import type { Metadata } from "next";
import { Suspense } from "react";
import { JobCard } from "@/components/jobs/JobCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { getJobs } from "@/lib/sanity/queries";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Browse the latest recruitment opportunities across Built Environment, Property, Engineering, and Logistics.",
};

export const revalidate = 300;

interface JobsPageProps {
  searchParams: Promise<{ q?: string; sector?: string; type?: string; location?: string }>;
}

async function JobsList({ searchParams }: { searchParams: { q?: string; sector?: string; type?: string; location?: string } }) {
  let jobs = [];
  try {
    jobs = await getJobs({
      sector: searchParams.sector,
      jobType: searchParams.type,
    });
    // Client-side keyword/location filtering (Sanity free plan has limited GROQ full-text)
    if (searchParams.q) {
      const q = searchParams.q.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.sector?.name.toLowerCase().includes(q)
      );
    }
    if (searchParams.location) {
      const loc = searchParams.location.toLowerCase();
      jobs = jobs.filter((j) => j.location.toLowerCase().includes(loc));
    }
  } catch {
    // Sanity not yet configured
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg font-medium">No jobs found</p>
        <p className="text-sm mt-2">Try adjusting your filters, or check back soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">{jobs.length} role{jobs.length !== 1 ? "s" : ""} found</p>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;

  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Opportunities</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Find your next role</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Browse roles across Built Environment, Property, Engineering, and Logistics.
          </p>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="lg:col-span-1">
              <Suspense>
                <JobFilters />
              </Suspense>
            </div>

            {/* Jobs list */}
            <div className="lg:col-span-3">
              <Suspense fallback={
                <div className="flex items-center justify-center py-20 text-gray-400">
                  <Loader2 size={24} className="animate-spin mr-2" /> Loading jobs...
                </div>
              }>
                <JobsList searchParams={params} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
