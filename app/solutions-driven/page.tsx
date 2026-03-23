import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Zap, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { EnquiryForm } from "@/components/employers/EnquiryForm";

export const metadata: Metadata = {
  title: "Solutions Driven – Executive Search & Critical Hires",
  description: "Solutions Driven is our Scotland-based specialist in executive search, embedded recruitment, and critical hire solutions. More than a hiring partner.",
};

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Board, C-suite, and director-level appointments conducted with precision and full confidentiality. We map the entire market — not just the visible talent pool.",
    features: ["Full market mapping", "Passive candidate outreach", "Confidential process", "Guaranteed shortlist delivery"],
  },
  {
    icon: Users,
    title: "Embedded Recruitment",
    description: "Our consultants sit inside your business — physically or virtually — acting as your in-house recruitment team. Scale up or down as your needs change.",
    features: ["Dedicated on-site or remote consultant", "Your employer brand, our expertise", "Flexible engagement models", "Full ATS integration"],
  },
  {
    icon: Zap,
    title: "Critical Hires",
    description: "Some roles simply cannot be left vacant. Our critical hire service comes with a delivery guarantee — we don't stop until the role is filled.",
    features: ["Guaranteed role delivery", "Rapid mobilisation", "Weekly progress reporting", "Replacement guarantee included"],
  },
];

const stats = [
  { value: "100%", label: "Delivery rate on guaranteed mandates" },
  { value: "48hrs", label: "Average time to first shortlist" },
  { value: "Scotland", label: "Headquartered, UK-wide reach" },
  { value: "Part of", label: "Groupe Adequat UK" },
];

export default function SolutionsDrivenPage() {
  return (
    <div className="bg-sd-dark text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sd-dark via-sd-dark to-sd-green/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sd-green/5 [clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] pointer-events-none" />

        <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full">
              Part of Groupe Adequat UK
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            More Than A <span className="text-sd-green">Hiring Partner</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed">
            Solutions Driven is our Scotland-based specialist in executive search and critical hires. When the stakes are high and the role cannot wait — we deliver.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-sd-green hover:bg-sd-green-light text-white font-semibold px-8 py-4 rounded-md transition-colors">
              Start a conversation <ArrowRight size={16} />
            </Link>
            <a
              href="https://solutionsdriven.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/5 transition-colors"
            >
              Visit solutionsdriven.com <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-t border-b border-white/10 bg-white/5">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-sd-green">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="container-max mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
              Three specialist services, one goal: getting the right person into the right role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="sd-card flex flex-col gap-5 hover:border-sd-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sd-green/20 flex items-center justify-center">
                  <service.icon size={22} className="text-sd-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-sd-green shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About SD */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/5 border-t border-white/10">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Solutions Driven</h2>
            <div className="mt-5 space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in Scotland, Solutions Driven has built a reputation as the go-to partner for organisations that need specialist talent — fast, and done right the first time.
              </p>
              <p>
                Now part of Groupe Adequat UK, we combine our boutique expertise with the global reach and resources of one of Europe&apos;s largest recruitment groups.
              </p>
              <p>
                Whether you need a CEO, an embedded talent function, or a guaranteed solution to a business-critical vacancy, Solutions Driven delivers.
              </p>
            </div>
            <a
              href="https://solutionsdriven.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sd-green hover:text-sd-green-light font-medium transition-colors"
            >
              Visit full website <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {["Executive Search", "Embedded Recruitment", "Critical Hires"].map((s) => (
              <div key={s} className="flex items-center gap-4 bg-white/5 rounded-xl px-6 py-4 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-sd-green shrink-0" />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="container-max mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Start a conversation</h2>
            <p className="mt-3 text-gray-400">Tell us about your hiring challenge. We&apos;ll come back to you within one business day.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-white/10 px-4 py-6">
        <div className="container-max mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Solutions Driven is part of Groupe Adequat UK</p>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Groupe Adequat UK
          </Link>
        </div>
      </div>
    </div>
  );
}
