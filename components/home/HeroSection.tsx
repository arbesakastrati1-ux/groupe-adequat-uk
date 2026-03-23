import Link from "next/link";
import { ArrowRight, Building2, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/40 pointer-events-none" />
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-primary-50 text-sm font-semibold uppercase tracking-widest mb-4">
            Groupe Adequat UK
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Specialist recruitment for the organisations{" "}
            <span className="text-primary">shaping our world</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            We connect exceptional talent with leading employers across Built Environment, Property, Engineering, and Logistics. Part of a global group operating across 8 countries.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/employers" className="btn-primary group text-base px-8 py-4">
              <Building2 size={18} />
              Find Talent
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/jobs" className="btn-white text-base px-8 py-4">
              <Users size={18} />
              Find a Job
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-gray-400 text-sm">
            <div>
              <span className="block text-2xl font-bold text-white">400+</span>
              <span>Branches globally</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">8</span>
              <span>Countries</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">4</span>
              <span>UK sectors</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">25+</span>
              <span>Years experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
