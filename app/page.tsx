import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SectorsStrip } from "@/components/home/SectorsStrip";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { SDSpotlight } from "@/components/home/SDSpotlight";
import { TrustSection } from "@/components/home/TrustSection";
import { CTABanner } from "@/components/home/CTABanner";
import { getFeaturedJobs } from "@/lib/sanity/queries";
import type { Job } from "@/lib/sanity/types";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export default async function HomePage() {
  let featuredJobs: Job[] = [];
  try {
    featuredJobs = await getFeaturedJobs(6);
  } catch {
    // Sanity not configured yet — show page without jobs
  }

  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <SectorsStrip />
      <TrustSection />
      <FeaturedJobs jobs={featuredJobs} />
      <SDSpotlight />
      <CTABanner />
    </>
  );
}
