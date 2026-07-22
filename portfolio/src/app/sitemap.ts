import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/projects/atlas-ai", "/projects/benchmark-guardian", "/projects/searcheval-lab", "/projects/profiler", "/projects/distributed", "/projects/autograd", "/projects/repro-audit", "/projects/tracker"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://ml-systems-portfolio.vercel.app${route}`,
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
