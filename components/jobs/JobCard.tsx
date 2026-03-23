import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { formatSalary, formatDate } from "@/lib/utils";
import type { Job } from "@/lib/sanity/types";

interface JobCardProps {
  job: Job;
}

const jobTypeLabel: Record<string, string> = {
  permanent: "Permanent",
  contract: "Contract",
  temporary: "Temporary",
};

const jobTypeColor: Record<string, string> = {
  permanent: "bg-blue-50 text-blue-700",
  contract: "bg-amber-50 text-amber-700",
  temporary: "bg-gray-50 text-gray-700",
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.slug.current}`}
      className="group flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
            {job.title}
          </h3>
          {job.companyName && (
            <p className="text-sm text-gray-500 mt-0.5">{job.companyName}</p>
          )}
        </div>
        <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${jobTypeColor[job.jobType] ?? "bg-gray-50 text-gray-700"}`}>
          {jobTypeLabel[job.jobType] ?? job.jobType}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin size={13} className="shrink-0" />
          {job.location}
        </span>
        {(job.salaryMin || job.salaryMax) && (
          <span className="flex items-center gap-1">
            <Briefcase size={13} className="shrink-0" />
            {formatSalary(job.salaryMin, job.salaryMax)}
          </span>
        )}
        {job.sector && (
          <span className="flex items-center gap-1">
            <Clock size={13} className="shrink-0" />
            {job.sector.name}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
        <span className="text-xs text-gray-400">{formatDate(job.postedAt)}</span>
        <span className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
          View job <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
