import Link from "next/link";
import { Linkedin, Twitter, Globe } from "lucide-react";

const services = [
  { label: "Permanent Recruitment", href: "/services/permanent" },
  { label: "Contract & Interim", href: "/services/contract" },
  { label: "Executive Search", href: "/services/executive" },
  { label: "RPO & Managed Solutions", href: "/services/rpo" },
];

const sectors = [
  { label: "Built Environment", href: "/sectors/built-environment" },
  { label: "Property", href: "/sectors/property" },
  { label: "Engineering", href: "/sectors/engineering" },
  { label: "Logistics", href: "/sectors/logistics" },
];

const group = [
  { label: "Groupe Adequat (Global)", href: "https://www.groupeadequat.com/?lang=en", external: true },
  { label: "Solutions Driven", href: "/solutions-driven" },
  { label: "Sigmar Recruitment (Ireland)", href: "https://www.sigmarrecruitment.com", external: true },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-xl font-bold tracking-tight">
              Groupe Adequat <span className="text-primary">UK</span>
            </p>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Specialist recruitment for the organisations shaping our world. Part of Groupe Adequat — global recruitment across 8 countries.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.groupeadequat.com/?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Group website"
                className="text-gray-400 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Sectors</h3>
            <ul className="mt-4 space-y-2">
              {sectors.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group & Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">The Group</h3>
            <ul className="mt-4 space-y-2">
              {group.map((g) => (
                <li key={g.href}>
                  {g.external ? (
                    <a href={g.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors">
                      {g.label} ↗
                    </a>
                  ) : (
                    <Link href={g.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {g.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
                <li><Link href="/employers" className="hover:text-white transition-colors">Submit a Brief</Link></li>
                <li><Link href="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Groupe Adequat UK. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
