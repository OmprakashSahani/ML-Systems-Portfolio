import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { projects } from "@/data/projects";

const description = "Selected ML systems projects spanning distributed training, benchmarking, search evaluation, reproducibility, and developer infrastructure.";

export const metadata: Metadata = {
  title: "Selected Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Selected Projects | Omprakash Sahani", description, url: "/projects", type: "website" },
  twitter: { card: "summary", title: "Selected Projects | Omprakash Sahani", description },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected Projects",
    description,
    url: "https://ml-systems-portfolio.vercel.app/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `https://ml-systems-portfolio.vercel.app${project.link}`,
      })),
    },
  };

  return (
    <div className="portfolio-page relative min-h-screen overflow-hidden bg-[#0b0f1a] px-6 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="background-grid absolute inset-0" />
      <SiteHeader />
      <main id="main-content" aria-labelledby="projects-heading" className="relative z-10 mx-auto max-w-6xl pb-20 pt-9 md:pt-10">
        <div className="mx-auto mb-10 max-w-[720px] text-center">
          <h1 id="projects-heading" className="text-3xl font-semibold md:text-4xl">Selected Projects</h1>
          <p className="mt-4 text-base leading-relaxed text-gray-400">ML systems projects spanning infrastructure, performance engineering, distributed training, search evaluation, and reproducible tooling.</p>
        </div>
        <ProjectGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
