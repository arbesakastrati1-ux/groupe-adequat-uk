"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Search, X } from "lucide-react";

const sectors = [
  { value: "built-environment", label: "Built Environment" },
  { value: "property", label: "Property" },
  { value: "engineering", label: "Engineering" },
  { value: "logistics", label: "Logistics" },
];

const jobTypes = [
  { value: "permanent", label: "Permanent" },
  { value: "contract", label: "Contract" },
  { value: "temporary", label: "Temporary" },
];

export function JobFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const clearAll = () => {
    router.push(pathname);
  };

  const hasFilters = searchParams.has("q") || searchParams.has("sector") || searchParams.has("type") || searchParams.has("location");

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm space-y-4">
      {/* Keyword search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs..."
          defaultValue={searchParams.get("q") ?? ""}
          onChange={(e) => updateParam("q", e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      {/* Location */}
      <div>
        <input
          type="text"
          placeholder="Location (e.g. London)"
          defaultValue={searchParams.get("location") ?? ""}
          onChange={(e) => updateParam("location", e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      {/* Sector */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Sector</label>
        <select
          value={searchParams.get("sector") ?? ""}
          onChange={(e) => updateParam("sector", e.target.value)}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
        >
          <option value="">All sectors</option>
          {sectors.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Job Type */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Job Type</label>
        <div className="flex flex-col gap-2">
          {jobTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="jobType"
                value={type.value}
                checked={searchParams.get("type") === type.value}
                onChange={() => updateParam("type", type.value)}
                className="text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{type.label}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="jobType"
              value=""
              checked={!searchParams.get("type")}
              onChange={() => updateParam("type", "")}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">All types</span>
          </label>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <X size={14} /> Clear all filters
        </button>
      )}
    </div>
  );
}
