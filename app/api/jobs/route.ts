import { NextRequest, NextResponse } from "next/server";
import { getJobs } from "@/lib/sanity/queries";

// This route acts as a future ATS integration point.
// Currently proxies Sanity CMS.
// To switch to an external ATS (Bullhorn, Vincere, etc.):
//   1. Replace the getJobs() call with your ATS API client
//   2. Map the response to the Job type in lib/sanity/types.ts

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  try {
    const jobs = await getJobs({
      sector: searchParams.get("sector") ?? undefined,
      jobType: searchParams.get("type") ?? undefined,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined,
    });

    return NextResponse.json({ jobs }, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("Jobs API error:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
