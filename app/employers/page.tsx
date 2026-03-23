import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, Clock, Crown, BarChart3, CheckCircle } from "lucide-react";
import { EnquiryForm } from "@/components/employers/EnquiryForm";

export const metadata: Metadata = {
  title: "For Employers – Find Talent",
  description: "Partner with Groupe Adequat UK for permanent, contract, executive search, and RPO recruitment solutions across Built Environment, Property, Engineering, and Logistics.",
};

const services = [
  { icon: UserCheck, title: "Permanent", desc: "Long-term hires across management and senior level." },
  { icon: Clock, title: "Contract & Interim", desc: "Specialist flexible talent, placed quickly." },
  { icon: Crown, title: "Executive Search", desc: "Discreet, targeted search for leadership roles." },
  { icon: BarChart3, title: "RPO", desc: "End-to-end recruitment process outsourcing." },
];

const reasons = [
  "Sector specialists who understand your market",
  "Access to passive candidates via our global network",
  "Dedicated consultant — no handoffs, no call centres",
  "Transparent process from brief to placement",
  "Guaranteed delivery on critical hire mandates",
  "Part of Groupe Adequat — backed by global scale",
];

export default function EmployersPage() {
  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">For Employers</p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Find the talent that moves your business forward
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl">
            We partner with leading organisations across the UK to deliver permanent, contract, and executive recruitment — with the depth of knowledge that only a specialist can offer.
          </p>
        </div>
      </section>

      {/* Services summary */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="section-title text-center mb-10">How we work with employers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col gap-3 rounded-xl bg-accent p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-dark text-sm">{s.title}</h3>
                <p className="text-xs text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding bg-accent">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why partner with us?</h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-dark mb-1">Submit a brief</h3>
            <p className="text-gray-500 text-sm mb-6">Tell us what you&apos;re looking for and a consultant will be in touch within one business day.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
