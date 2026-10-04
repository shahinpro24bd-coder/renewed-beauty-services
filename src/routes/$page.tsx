import { createFileRoute } from "@tanstack/react-router";

/** Every other public page: /about.html, /service.html, /contact.html … */
export const Route = createFileRoute("/$page")({
  head: ({ params }) => {
    const labels: Record<string, string> = {
      "about.html": "Hakkımda",
      "service.html": "Tedaviler",
      "appoinment.html": "Randevu",
      "contact.html": "İletişim",
    };
    const label = labels[params.page] ?? "Sayfa";
    const title = `${label} | Dr. Fatema Mirza`;
    const description = `Dr. Fatema Mirza — plastic and aesthetic surgery, ${label.toLocaleLowerCase("tr-TR")}, appointments in Dhaka and Gazipur.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { renderSitePage } = await import("@/lib/site-content/render.server");
        const slug = String(params.page).replace(/\.html$/i, "");
        return renderSitePage(request, slug);
      },
    },
  },
});
