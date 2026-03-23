import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, Clock, Crown, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Permanent recruitment, contract staffing, executive search, and RPO solutions across Built Environment, Property, Engineering, and Logistics.",
};

const services = [
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    slug: "permanent",
    tagline: "The right person, for the long term.",
    description: "We take time to understand your organisation — its culture, leadership style, and growth plans — before we ever present a candidate. Our permanent recruitment service covers management to director-level roles across all our sectors.",
    bullets: ["Dedicated consultant per role", "Thorough candidate screening", "Salary benchmarking", "Culture fit assessment"],
  },
  {
    icon: Clock,
    title: "Contract & Interim",
    slug: "contract",
    tagline: "Flexible expertise, when you need it.",
    description: "Projects don't wait for permanent hiring processes. Our contract and interim service puts specialist talent in front of you fast — fully vetted, available at short notice, and ready to contribute from day one.",
    bullets: ["Rapid turnaround", "Day-rate and fixed-term contracts", "Full compliance management", "Nationwide coverage"],
  },
  {
    icon: Crown,
    title: "Executive Search",
    slug: "executive",
    tagline: "Discreet, thorough, and results-driven.",
    description: "Senior and board-level appointments require a different approach. Our executive search practice conducts targeted, confidential searches — mapping the market and approaching passive candidates that aren't accessible through traditional methods.",
    bullets: ["Fully confidential process", "Market mapping and research", "Passive candidate outreach", "Longlist and shortlist delivery"],
  },
  {
    icon: BarChart3,
    title: "RPO & Managed Solutions",
    slug: "rpo",
    tagline: "Recruitment at scale, without the overhead.",
    description: "For organisations with high-volume or ongoing hiring needs, our RPO and managed solutions model delivers consistent quality at reduced cost. We become an embedded extension of your HR team, managing the entire recruitment lifecycle.",
    bullets: ["End-to-end process management", "Dedicated on-site or off-site team", "Technology and reporting", "Cost-per-hire transparency"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Tailored recruitment solutions
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl">
            From a single executive hire to a full outsourced recruitment model — we have the solution.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max mx-auto space-y-12">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon size={26} className="text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-dark">{service.title}</h2>
                <p className="mt-1 text-primary font-medium">{service.tagline}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
              <div className={`rounded-2xl bg-accent p-10 flex items-center justify-center min-h-48 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon size={72} className="text-primary/20" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-max mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Not sure which service fits?</h2>
          <p className="mt-4 text-primary-50 text-lg max-w-xl mx-auto">
            Talk to us. We&apos;ll help you identify the right approach for your hiring challenge.
          </p>
          <Link href="/employers" className="mt-8 inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md hover:bg-accent transition-colors">
            Speak to a consultant
          </Link>
        </div>
      </section>
    </div>
  );
}
