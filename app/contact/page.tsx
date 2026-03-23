import type { Metadata } from "next";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { EnquiryForm } from "@/components/employers/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Groupe Adequat UK. Offices in London and Scotland (Solutions Driven).",
};

const offices = [
  {
    name: "Groupe Adequat UK",
    address: "London, United Kingdom",
    email: "uk@groupeadequat.com",
    phone: "+44 20 0000 0000",
    note: "Head office — employer and candidate enquiries",
  },
  {
    name: "Solutions Driven (Scotland)",
    address: "Scotland, United Kingdom",
    email: "hello@solutionsdriven.com",
    phone: "+44 131 000 0000",
    note: "Executive search & critical hire specialists",
    website: "https://solutionsdriven.com",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-dark text-white section-padding">
        <div className="container-max mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Get in touch</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Whether you&apos;re looking to hire or find your next role — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Offices */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Our offices</h2>
            {offices.map((office) => (
              <div key={office.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-dark">{office.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{office.note}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-primary shrink-0" />
                    {office.address}
                  </div>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                    <Mail size={14} className="text-primary shrink-0" />
                    {office.email}
                  </a>
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                    <Phone size={14} className="text-primary shrink-0" />
                    {office.phone}
                  </a>
                  {office.website && (
                    <a href={office.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <ExternalLink size={14} className="shrink-0" />
                      {office.website.replace("https://", "")}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Sister company links */}
            <div className="rounded-xl bg-white border border-gray-100 p-6">
              <h3 className="font-semibold text-dark mb-3">The wider group</h3>
              <div className="space-y-2 text-sm">
                <a href="https://www.groupeadequat.com/?lang=en" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <ExternalLink size={13} /> Groupe Adequat Global
                </a>
                <a href="https://www.sigmarrecruitment.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <ExternalLink size={13} /> Sigmar Recruitment (Ireland)
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-dark mb-1">Send us a message</h2>
            <p className="text-sm text-gray-500 mb-6">We&apos;ll respond within one business day.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
