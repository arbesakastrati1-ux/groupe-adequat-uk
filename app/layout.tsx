import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Groupe Adequat UK – Specialist Recruitment",
    template: "%s | Groupe Adequat UK",
  },
  description:
    "Specialist recruitment for the organisations shaping our world. Permanent, contract and executive search across Built Environment, Property, Engineering and Logistics.",
  keywords: ["recruitment", "jobs", "UK", "engineering", "property", "built environment", "executive search"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://groupeadequat.co.uk",
    siteName: "Groupe Adequat UK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
