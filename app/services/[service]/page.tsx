import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UserCheck, Clock, Crown, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const serviceData: Record<string, {
  title: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  howItWorks: string[];
  whoItsFor: string[];
  cta: string;
}> = {
  permanent: {
    title: "Permanent Recruitment",
    tagline: "The right person, for the long term.",
    icon: UserCheck,
    description: "Our permanent recruitment service is built around quality of hire. We work closely with your team to understand the role requirements, the culture, and the leadership dynamics — then we go to market with precision.",
    howItWorks: [
      "Discovery call to understand your organisation, the role, and success criteria",
      "Market mapping and talent identification",
      "Thorough CV screening and candidate interviews",
      "Presentation of a curated shortlist with consultant commentary",
      "Interview coordination and candidate preparation",
      "Offer management, reference checking, and onboarding support",
    ],
    whoItsFor: ["Growing companies hiring management and senior roles", "Organisations replacing key personnel", "Businesses entering new UK markets", "Teams looking to upgrade talent quality"],
    cta: "Submit a hiring brief",
  },
  contract: {
    title: "Contract & Interim",
    tagline: "Flexible expertise, when you need it.",
    icon: Clock,
    description: "When you need specialist talent fast — for a project, a mat cover, or to bridge a gap — our contract and interim desk delivers. We maintain an active network of available contractors across all our sectors.",
    howItWorks: [
      "Brief taken and requirements confirmed",
      "Search across our active contractor network",
      "CV screening and availability confirmation",
      "Rapid shortlist delivery (typically within 48 hours)",
      "Contract, compliance, and right-to-work checks handled by us",
      "Ongoing contractor management and timesheet processing",
    ],
    whoItsFor: ["Project-based hiring needs", "Maternity / paternity cover", "Urgent skills gaps", "Organisations scaling quickly"],
    cta: "Tell us what you need",
  },
  executive: {
    title: "Executive Search",
    tagline: "Discreet, thorough, and results-driven.",
    icon: Crown,
    description: "Our executive search practice handles board, C-suite, and director-level appointments with full confidentiality. We map the market, approach passive candidates, and deliver a curated shortlist — not just a database search.",
    howItWorks: [
      "Confidential briefing and role specification",
      "Market mapping: identifying all credible candidates",
      "Direct approach and discreet outreach",
      "In-depth candidate assessment and reference profiling",
      "Longlist presentation followed by a refined shortlist",
      "Interview facilitation, offer negotiation, and placement support",
    ],
    whoItsFor: ["Boards seeking non-executive directors", "Organisations making MD/CEO/Director appointments", "Private equity-backed businesses building leadership teams", "Succession planning"],
    cta: "Discuss an executive appointment",
  },
  rpo: {
    title: "RPO & Managed Solutions",
    tagline: "Recruitment at scale, without the overhead.",
    icon: BarChart3,
    description: "Our RPO model gives you a dedicated recruitment team — either embedded on-site or operating remotely — managing your entire hiring process. You get the consistency, reporting, and cost efficiency of an in-house team, without the fixed headcount.",
    howItWorks: [
      "Needs assessment and scoping",
      "Dedicated team assignment (on-site or off-site)",
      "Technology setup: ATS, job board integrations, reporting",
      "Process design aligned to your hiring lifecycle",
      "Monthly reporting and performance reviews",
      "Ongoing optimisation and market insight",
    ],
    whoItsFor: ["High-growth organisations with multiple vacancies", "Companies looking to reduce agency spend", "Businesses needing recruitment process consistency", "Organisations undergoing transformation"],
    cta: "Request an RPO proposal",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) return { title: "Service Not Found" };
  return {
    title: data.title,
    description: data.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <Link href="/services" className="text-sm text-gray-400 hover:text-white mb-4 inline-flex items-center gap-1">
            ← All services
          </Link>
          <div className="flex items-start gap-5 mt-2">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 mt-1">
              <Icon size={26} className="text-primary" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{data.title}</h1>
              <p className="mt-2 text-primary font-medium text-lg">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-5">How it works</h2>
              <ol className="space-y-4">
                {data.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-accent p-6">
              <h3 className="font-semibold text-dark mb-4">Who this is for</h3>
              <ul className="space-y-3">
                {data.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-primary p-6 text-white">
              <h3 className="font-semibold mb-2">Ready to get started?</h3>
              <p className="text-sm text-primary-50 mb-4">Speak to a specialist about your hiring needs.</p>
              <Link href="/employers" className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm">
                {data.cta} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
