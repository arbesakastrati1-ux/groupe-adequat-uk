"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Jobs", href: "/jobs" },
  { label: "Solutions Driven", href: "/solutions-driven" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold text-primary tracking-tight">
              Groupe Adequat<span className="text-dark"> UK</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/employers" className="btn-outline py-2 px-4 text-sm">
              Find Talent
            </Link>
            <Link href="/jobs" className="btn-primary py-2 px-4 text-sm">
              Find a Job
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-200",
          mobileOpen ? "max-h-[500px] py-4" : "max-h-0"
        )}
      >
        <div className="container-max mx-auto px-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 pb-2">
            <Link href="/employers" className="btn-outline text-center" onClick={() => setMobileOpen(false)}>
              Find Talent
            </Link>
            <Link href="/jobs" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
              Find a Job
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
