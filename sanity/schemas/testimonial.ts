export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text", validation: (R: any) => R.required() },
    { name: "author", title: "Author Name", type: "string", validation: (R: any) => R.required() },
    { name: "role", title: "Role / Job Title", type: "string" },
    { name: "company", title: "Company", type: "string" },
    {
      name: "context", title: "Context", type: "string",
      options: { list: ["employers", "candidates", "general"] },
    },
  ],
  preview: {
    select: { title: "author", subtitle: "company" },
  },
};
