import { ReactNode } from "react";
import Link from "next/link";
import CaseStudyTabs, { CaseStudyTab } from "@/components/CaseStudyTabs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export function PanelCard({ title, children }: { title: string; children: ReactNode }) {
  return <section className="case-panel-card"><h2 className="mb-3 text-xl font-semibold">{title}</h2>{children}</section>;
}

export function ProjectLinks({ children }: { children: ReactNode }) {
  return <div className="case-project-links">{children}</div>;
}

export default function CaseStudyShell({ identifier, title, updated, introduction, links, tabs, showBackLink = true, structuredData }: { identifier: string; title: string; updated: string; introduction: string; links: ReactNode; tabs: CaseStudyTab[]; showBackLink?: boolean; structuredData?: object }) {
  return (
    <div className="portfolio-page relative min-h-screen overflow-x-hidden bg-[#0b0f1a] px-6 text-white">
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
      <div className="background-grid absolute inset-0" />
      <SiteHeader />
      <main id="main-content" className="case-study-container relative z-10 mx-auto max-w-6xl">
        <header className="case-study-heading">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-400">{identifier}</p>
          <div className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div><h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1><p className="mt-1 text-xs text-gray-500">Updated: {updated}</p></div>
            <ProjectLinks>{links}</ProjectLinks>
          </div>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-400 md:text-base">{introduction}</p>
        </header>
        <CaseStudyTabs tabs={tabs} />
        {showBackLink && <Link href="/projects" className="case-study-back">← Back to Selected Projects</Link>}
      </main>
      <SiteFooter />
    </div>
  );
}
