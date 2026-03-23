import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, Home, Cog, Truck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sectors",
  description: "Specialist recruitment across Built Environment, Property, Engineering, and Logistics in the UK.",
};

const sectors = [
  {
    icon: HardHat,
    title: "Built Environment",
    slug: "built-environment",
    color: "bg-orange-50 text-orange-600",
    description: "Construction, infrastructure, and the built environment. We place project managers, site directors, quantity surveyors, and leadership teams across the UK's biggest development projects.",
    roles: ["Project Manager", "Site Director", "Quantity Surveyor", "Contracts Manager", "Health & Safety Manager"],
  },
  {
    icon: Home,
    title: "Property",
    slug: "property",
    color: "bg-blue-50 text-blue-600",
    description: "Residential, commercial, and mixed-use property across sales, lettings, asset management, and development. From negotiators to heads of department.",
    roles: ["Asset Manager", "Property Director", "Development Manager", "Head of Lettings", "Investment Analyst"],
  },
  {
    icon: Cog,
    title: "Engineering",
    slug: "engineering",
    color: "bg-gray-50 text-gray-700",
    description: "Mechanical, electrical, civil, and structural engineering. We support manufacturers, consultancies, and utilities to find engineers and technical leaders at every level.",
    roles: ["Structural Engineer", "M&E Consultant", "Technical Director", "Project Engineer", "Principal Engineer"],
  },
  {
    icon: Truck,
    title: "Logistics",
    slug: "logistics",
    color: "bg-green-50 text-green-700",
    description: "Supply chain, warehousing, and transport. Operations leaders, heads of logistics, and supply chain directors who keep organisations moving.",
    roles: ["Head of Logistics", "Supply Chain Director", "Operations Manager", "Transport Manager", "Warehouse Manager"],
  },
];

export default function SectorsPage() {
  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Sectors</p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Deep expertise where it matters
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl">
            We focus on four sectors because depth beats breadth. Our consultants live and breathe their markets.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${sector.color}`}>
                <sector.icon size={26} />
              </div>
              <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{sector.title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">{sector.description}</p>
              <div className="mt-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Example roles</p>
                <div className="flex flex-wrap gap-2">
                  {sector.roles.map((role) => (
                    <span key={role} className="text-xs bg-accent text-dark rounded-full px-3 py-1">{role}</span>
                  ))}
                </div>
              </div>
              <span className="mt-5 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Explore sector <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
