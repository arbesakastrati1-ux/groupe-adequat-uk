import { Globe, Award, Handshake, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Backing, Local Expertise",
    description: "Part of Groupe Adequat — a global recruitment group with 400+ branches. We bring international scale with deep UK market knowledge.",
  },
  {
    icon: Award,
    title: "Senior-Level Specialists",
    description: "We focus on management, senior, and executive appointments. The roles where quality of hire has the greatest impact.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "We invest in understanding your business. Our goal is to become your trusted recruitment partner, not just a supplier.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Results",
    description: "We stand behind every placement. Our critical hire solutions come with delivery guarantees for your peace of mind.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Groupe Adequat UK?</h2>
            <p className="section-subtitle mt-4">
              We combine the resources of a global group with the responsiveness of a specialist boutique.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <r.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-dark">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
