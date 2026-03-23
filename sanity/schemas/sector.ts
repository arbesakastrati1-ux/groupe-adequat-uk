export const sectorSchema = {
  name: "sector",
  title: "Sector",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "description", title: "Description", type: "text" },
    { name: "icon", title: "Icon Name (lucide-react)", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
  ],
};
