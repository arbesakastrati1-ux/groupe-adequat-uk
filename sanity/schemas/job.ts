export const jobSchema = {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    { name: "title", title: "Job Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (R: any) => R.required() },
    { name: "companyName", title: "Company Name", type: "string" },
    { name: "location", title: "Location", type: "string", validation: (R: any) => R.required() },
    {
      name: "jobType", title: "Job Type", type: "string",
      options: { list: ["permanent", "contract", "temporary"] },
      validation: (R: any) => R.required(),
    },
    { name: "sector", title: "Sector", type: "reference", to: [{ type: "sector" }] },
    { name: "salaryMin", title: "Salary Min (£)", type: "number" },
    { name: "salaryMax", title: "Salary Max (£)", type: "number" },
    { name: "description", title: "Job Description", type: "array", of: [{ type: "block" }] },
    { name: "postedAt", title: "Posted At", type: "datetime", initialValue: () => new Date().toISOString() },
    { name: "isActive", title: "Active", type: "boolean", initialValue: true },
    { name: "applyEmail", title: "Applications Email", type: "string" },
  ],
  preview: {
    select: { title: "title", subtitle: "location" },
  },
};
