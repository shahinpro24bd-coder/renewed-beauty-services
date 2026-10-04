import { createFileRoute } from "@tanstack/react-router";

/** Home page — rendered from the database copy of the original markup. */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Fatema Mirza | Plastic and Aesthetic Surgeon in Dhaka" },
      { name: "description", content: "Dr. Fatema Mirza provides reconstructive and aesthetic surgical care in Dhaka and Gazipur, Bangladesh." },
      { property: "og:title", content: "Dr. Fatema Mirza | Plastic and Aesthetic Surgeon in Dhaka" },
      { property: "og:description", content: "Reconstructive and aesthetic surgical care, appointments, and chamber information for Dr. Fatema Mirza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/img/dr-fatema-logo.webp",
        fetchPriority: "high",
      },
    ],
  }),
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { renderSitePage } = await import("@/lib/site-content/render.server");
        return renderSitePage(request, "index");
      },
    },
  },
});
