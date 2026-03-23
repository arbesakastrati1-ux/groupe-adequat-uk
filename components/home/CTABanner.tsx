import Link from "next/link";
import { Building2, Users } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to take the next step?
        </h2>
        <p className="mt-4 text-lg text-primary-50 max-w-xl mx-auto">
          Whether you&apos;re looking for your next hire or your next role — we&apos;re here to help.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/employers"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md hover:bg-accent transition-colors"
          >
            <Building2 size={18} />
            I&apos;m hiring
          </Link>
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors"
          >
            <Users size={18} />
            I&apos;m looking for work
          </Link>
        </div>
      </div>
    </section>
  );
}
