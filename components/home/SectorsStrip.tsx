import Link from "next/link";
import { HardHat, Home, Cog, Truck } from "lucide-react";

const sectors = [
  { icon: HardHat, label: "Built Environment", href: "/sectors/built-environment", color: "bg-orange-50 text-orange-600" },
  { icon: Home, label: "Property", href: "/sectors/property", color: "bg-blue-50 text-blue-600" },
  { icon: Cog, label: "Engineering", href: "/sectors/engineering", color: "bg-gray-50 text-gray-700" },
  { icon: Truck, label: "Logistics", href: "/sectors/logistics", color: "bg-green-50 text-green-700" },
];

export function SectorsStrip() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-max mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Sectors we cover</h2>
          <p className="section-subtitle mx-auto">
            Deep expertise across the industries that build, maintain, and move our world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.href}
              href={sector.href}
              className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${sector.color}`}>
                <sector.icon size={26} />
              </div>
              <span className="font-semibold text-dark text-sm">{sector.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
