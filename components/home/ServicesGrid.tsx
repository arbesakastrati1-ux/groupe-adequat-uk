import Link from "next/link";
import { UserCheck, Clock, Crown, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    description: "Long-term hires that fit your culture and ambitions. We take the time to understand your business before presenting candidates.",
    href: "/services/permanent",
  },
  {
    icon: Clock,
    title: "Contract & Interim",
    description: "Flexible talent for project-based needs or to bridge gaps. Specialists available at short notice across all our sectors.",
    href: "/services/contract",
  },
  {
    icon: Crown,
    title: "Executive Search",
    description: "Senior and board-level appointments handled with discretion. Confidential search for roles you can't afford to get wrong.",
    href: "/services/executive",
  },
  {
    icon: BarChart3,
    title: "RPO & Managed Solutions",
    description: "Outsourced recruitment process for high-volume hiring. We become an extension of your HR team, delivering at scale.",
    href: "/services/rpo",
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="text-center">
          <h2 className="section-title">How we can help</h2>
          <p className="section-subtitle mx-auto mt-4 text-gray-600">
            From a single critical hire to a full RPO solution, we have the expertise and reach to deliver.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{service.description}</p>
              <span className="flex items-center gap-1 text-sm font-medium text-primary mt-2 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
