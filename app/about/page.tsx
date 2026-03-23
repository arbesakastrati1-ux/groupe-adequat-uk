import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, Award, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Groupe Adequat UK — specialist recruitment backed by a global group with 25+ years experience.",
};

const values = [
  { icon: Users, title: "People First", description: "Every placement represents a person's career and an organisation's future. We treat both with the utmost respect." },
  { icon: Target, title: "Precision Matching", description: "We invest time to truly understand both sides before making introductions. Quality over volume, always." },
  { icon: Globe, title: "Global Reach", description: "Part of a group with 400+ branches across 8 countries. We can support your needs wherever your business takes you." },
  { icon: Award, title: "Senior Expertise", description: "Our consultants have deep sector experience. We advise, not just recruit — a trusted extension of your team." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">About us</p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Building Britain&apos;s future workforce
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Groupe Adequat UK is the British arm of one of Europe&apos;s leading recruitment groups. We specialise in management and senior-level recruitment across Built Environment, Property, Engineering, and Logistics.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our story</h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Groupe Adequat was founded in France over 25 years ago and has grown into a global recruitment group operating across 8 countries, with more than 400 branches worldwide and thousands of placements made each year.
              </p>
              <p>
                Our UK operation brings that global expertise to the British market, combining international reach with the kind of specialist, consultative approach that senior-level hiring demands.
              </p>
              <p>
                We also operate <strong>Solutions Driven</strong>, our Scotland-based brand focused exclusively on executive search and critical hire solutions — delivering when the stakes are highest.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "25+", label: "Years of group experience" },
              { value: "400+", label: "Global branches" },
              { value: "8", label: "Countries" },
              { value: "4", label: "UK sectors" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-accent p-6 text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-accent">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group context */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto max-w-3xl text-center">
          <h2 className="section-title">Part of a global group</h2>
          <p className="section-subtitle mx-auto mt-4">
            Groupe Adequat UK is a proud member of the Groupe Adequat family, alongside sister brands including{" "}
            <a href="https://www.sigmarrecruitment.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              Sigmar Recruitment
            </a>{" "}
            in Ireland and brands across France, Belgium, and beyond.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.groupeadequat.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Visit Groupe Adequat Global ↗
            </a>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
