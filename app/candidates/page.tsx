import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Handshake, Bell, CheckCircle } from "lucide-react";
import { CVForm } from "@/components/candidates/CVForm";

export const metadata: Metadata = {
  title: "For Candidates – Find Your Next Role",
  description: "Register with Groupe Adequat UK to access exclusive opportunities in Built Environment, Property, Engineering, and Logistics.",
};

const steps = [
  { icon: Users, title: "Register with us", desc: "Share your details and background. A dedicated consultant will reach out to learn more about your goals." },
  { icon: Search, title: "We search on your behalf", desc: "We tap our live vacancies and passive pipeline, and approach employers confidentially on your behalf." },
  { icon: Handshake, title: "We make introductions", desc: "We only present you for roles where there's a genuine fit — protecting your time and reputation." },
  { icon: Bell, title: "Stay informed", desc: "We keep you updated throughout the process and negotiate on your behalf where appropriate." },
];

const benefits = [
  "Access to roles not advertised publicly",
  "A dedicated consultant who knows your sector",
  "Salary benchmarking and market insight",
  "Confidential job search supported",
  "Interview preparation and coaching",
  "Long-term career partnership",
];

export default function CandidatesPage() {
  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">For Candidates</p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Your next great role starts here
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl">
            We specialise in management and senior-level appointments. Register with us and a sector specialist will be in your corner.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/jobs" className="btn-primary">Browse all jobs</Link>
            <Link href="#register" className="btn-white">Register your CV</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="section-title text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div className="h-px flex-1 bg-gray-100 last:hidden" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-2">
                  <step.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-dark">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Register form */}
      <section id="register" className="section-padding bg-accent">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Why work with us?</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100">
              <p className="text-sm font-medium text-dark">Looking for live vacancies?</p>
              <p className="text-sm text-gray-500 mt-1">Browse our current opportunities across all sectors.</p>
              <Link href="/jobs" className="mt-3 btn-outline inline-flex text-sm py-2">
                Browse jobs →
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-dark mb-1">Register with us</h3>
            <p className="text-gray-500 text-sm mb-6">Share your details and we&apos;ll be in touch about suitable opportunities.</p>
            <CVForm />
          </div>
        </div>
      </section>
    </div>
  );
}
