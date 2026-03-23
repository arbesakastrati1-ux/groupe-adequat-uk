import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSalary(min?: number, max?: number, currency = "GBP"): string {
  const fmt = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  if (min && max) return `${fmt.format(min)} – ${fmt.format(max)}`;
  if (min) return `From ${fmt.format(min)}`;
  if (max) return `Up to ${fmt.format(max)}`;
  return "Competitive";
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
