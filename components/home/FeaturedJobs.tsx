import Link from "next/link";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { JobCard } from "@/components/jobs/JobCard";
import type { Job } from "@/lib/sanity/types";

interface FeaturedJobsProps {
  jobs: Job[];
}

export function FeaturedJobs({ jobs }: FeaturedJobsProps) {
  if (jobs.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Latest opportunities</h2>
            <p className="section-subtitle mt-2">
              Browse our latest roles across all sectors.
            </p>
          </div>
          <Link href="/jobs" className="hidden sm:flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all text-sm">
            View all jobs <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/jobs" className="btn-outline">
            View all jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
