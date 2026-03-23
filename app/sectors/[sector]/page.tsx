import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HardHat, Home, Cog, Truck, ArrowRight } from "lucide-react";

const sectorData: Record<string, {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  overview: string;
  marketContext: string;
  roles: string[];
  cta: string;
}> = {
  "built-environment": {
    title: "Built Environment",
    icon: HardHat,
    color: "bg-orange-50 text-orange-600",
    overview: "The built environment sector demands technical expertise and leadership capability in equal measure. From major infrastructure projects to residential developments, we place the people who deliver.",
    marketContext: "With the UK government's commitment to 1.5 million new homes, ongoing infrastructure investment, and a wave of retrofit and sustainability projects, demand for experienced built environment professionals continues to outpace supply.",
    roles: ["Project Manager", "Site Director", "Contracts Manager", "Quantity Surveyor", "Senior Surveyor", "Health & Safety Manager", "Planning Manager", "Development Director", "Technical Manager", "Construction Director"],
    cta: "Find built environment talent",
  },
  property: {
    title: "Property",
    icon: Home,
    color: "bg-blue-50 text-blue-600",
    overview: "We operate across residential, commercial, and mixed-use property — placing professionals from negotiator to director level in agencies, developers, funds, and asset managers.",
    marketContext: "The UK property market is navigating a period of repricing and opportunity. Organisations need leaders who understand both the current landscape and the long-term fundamentals. We help them find those people.",
    roles: ["Asset Manager", "Property Director", "Development Manager", "Head of Lettings", "Head of Sales", "Investment Analyst", "Portfolio Manager", "Commercial Property Manager", "Planning Director", "Leasing Manager"],
    cta: "Find property talent",
  },
  engineering: {
    title: "Engineering",
    icon: Cog,
    color: "bg-gray-50 text-gray-700",
    overview: "From structural and civil to mechanical and electrical, we place engineering professionals across consultancies, contractors, manufacturers, and utilities businesses.",
    marketContext: "Energy transition, infrastructure delivery, and advanced manufacturing are driving significant demand for experienced engineers. The talent pool is competitive — specialist search is essential.",
    roles: ["Structural Engineer", "Civil Engineer", "M&E Consultant", "Principal Engineer", "Technical Director", "Project Engineer", "BIM Manager", "Commissioning Engineer", "Design Manager", "Head of Engineering"],
    cta: "Find engineering talent",
  },
  logistics: {
    title: "Logistics",
    icon: Truck,
    color: "bg-green-50 text-green-700",
    overview: "We support logistics, supply chain, and transport businesses to find the operational leaders who can drive efficiency, resilience, and growth.",
    marketContext: "Supply chain disruption has made operational leadership more strategically important than ever. Organisations are investing in their logistics talent — and competition for the best people is fierce.",
    roles: ["Head of Logistics", "Supply Chain Director", "Operations Manager", "Transport Manager", "Warehouse Manager", "Head of Supply Chain", "Procurement Manager", "Distribution Manager", "Fleet Manager", "Logistics Director"],
    cta: "Find logistics talent",
  },
};

export function generateStaticParams() {
  return Object.keys(sectorData).map((sector) => ({ sector }));
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) return { title: "Sector Not Found" };
  return {
    title: `${data.title} Recruitment`,
    description: data.overview,
  };
}

export default async function SectorDetailPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <Link href="/sectors" className="text-sm text-gray-400 hover:text-white mb-4 inline-flex items-center gap-1">
            ← All sectors
          </Link>
          <div className="flex items-center gap-5 mt-2">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${data.color}`}>
              <Icon size={26} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">{data.title} Recruitment</h1>
          </div>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl leading-relaxed">{data.overview}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-dark">The market right now</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{data.marketContext}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark">Roles we fill</h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.roles.map((role) => (
                  <div key={role} className="rounded-lg bg-accent px-4 py-3 text-sm text-dark font-medium">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-primary p-6 text-white">
              <h3 className="font-semibold mb-2">Hiring in {data.title}?</h3>
              <p className="text-sm text-primary-50 mb-4">
                Speak to a specialist who understands your market.
              </p>
              <Link
                href="/employers"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-4 py-3 rounded-md hover:bg-accent transition-colors text-sm"
              >
                {data.cta} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="rounded-xl border border-gray-100 bg-accent p-6">
              <h3 className="font-semibold text-dark mb-2">Looking for a role?</h3>
              <p className="text-sm text-gray-600 mb-4">Browse our latest {data.title} opportunities.</p>
              <Link href="/jobs" className="btn-outline w-full text-center text-sm py-2.5">
                View {data.title} jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
