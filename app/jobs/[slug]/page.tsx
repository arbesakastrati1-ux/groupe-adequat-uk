import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Briefcase, Calendar, Tag } from "lucide-react";
import { getJobBySlug } from "@/lib/sanity/queries";
import { formatSalary, formatDate } from "@/lib/utils";
import { ApplyForm } from "@/components/jobs/ApplyForm";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const job = await getJobBySlug(slug);
    if (!job) return { title: "Job Not Found" };
    return {
      title: job.title,
      description: `${job.jobType} role in ${job.location}. ${formatSalary(job.salaryMin, job.salaryMax)}.`,
    };
  } catch {
    return { title: "Job" };
  }
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let job;
  try {
    job = await getJobBySlug(slug);
  } catch {
    notFound();
  }

  if (!job) notFound();

  const jobTypeLabel: Record<string, string> = {
    permanent: "Permanent",
    contract: "Contract",
    temporary: "Temporary",
  };

  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <Link href="/jobs" className="text-sm text-gray-400 hover:text-white mb-4 inline-flex items-center gap-1">
            ← Back to jobs
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">{job.title}</h1>
          {job.companyName && <p className="text-gray-300 mt-1">{job.companyName}</p>}

          <div className="mt-5 flex flex-wrap gap-4 text-gray-300 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {job.location}
            </span>
            {(job.salaryMin || job.salaryMax) && (
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} /> {formatSalary(job.salaryMin, job.salaryMax)}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Tag size={14} /> {jobTypeLabel[job.jobType] ?? job.jobType}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> Posted {formatDate(job.postedAt)}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Job description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-dark mb-5">About this role</h2>
              {job.description ? (
                <div className="prose prose-sm max-w-none text-gray-600">
                  {/* Sanity portable text would be rendered here */}
                  <p>Full job description available — configure Sanity CMS to populate this content.</p>
                </div>
              ) : (
                <p className="text-gray-500">Full job description coming soon. Please apply to receive full details.</p>
              )}
            </div>
          </div>

          {/* Apply sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-dark mb-1">Apply for this role</h2>
              <p className="text-sm text-gray-500 mb-5">Fill in your details and we&apos;ll be in touch.</p>
              <ApplyForm jobTitle={job.title} jobSlug={slug} />
            </div>

            <div className="bg-primary/10 rounded-xl p-5">
              <p className="text-sm text-dark font-medium">Not quite right?</p>
              <p className="text-sm text-gray-600 mt-1 mb-3">Register your CV and we&apos;ll match you to future roles.</p>
              <Link href="/candidates" className="btn-outline w-full text-center text-sm py-2.5">
                Register with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
