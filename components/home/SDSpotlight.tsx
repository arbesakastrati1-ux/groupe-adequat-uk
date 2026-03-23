import Link from "next/link";
import { ArrowRight, Search, Users, Zap } from "lucide-react";

export function SDSpotlight() {
  return (
    <section className="section-padding bg-sd-dark">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sd-green text-sm font-semibold uppercase tracking-widest mb-3">
              Part of Groupe Adequat UK
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              More Than A Hiring Partner
            </h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Solutions Driven is our Scotland-based specialist, focussed on executive search and critical hires across the UK. When the stakes are high, we deliver.
            </p>
            <Link
              href="/solutions-driven"
              className="mt-8 inline-flex items-center gap-2 bg-sd-green hover:bg-sd-green-light text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Discover Solutions Driven <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Search, title: "Executive Search", desc: "Board and C-suite appointments handled with discretion and precision." },
              { icon: Users, title: "Embedded Recruitment", desc: "Our team embedded within yours — a true extension of your HR function." },
              { icon: Zap, title: "Critical Hires", desc: "Guaranteed delivery for the roles you simply cannot afford to get wrong." },
            ].map((item) => (
              <div key={item.title} className="sd-card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sd-green/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-sd-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
