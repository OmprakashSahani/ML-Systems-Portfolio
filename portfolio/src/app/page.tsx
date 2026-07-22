import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": "https://ml-systems-portfolio.vercel.app/#person", name: "Omprakash Sahani", url: "https://ml-systems-portfolio.vercel.app", sameAs: ["https://github.com/OmprakashSahani", "https://www.linkedin.com/in/omprakashsahani/"] },
      { "@type": "WebSite", "@id": "https://ml-systems-portfolio.vercel.app/#website", name: "Omprakash Sahani Portfolio", url: "https://ml-systems-portfolio.vercel.app", author: { "@id": "https://ml-systems-portfolio.vercel.app/#person" } },
    ],
  };

  return (
    <div className="portfolio-page relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0b0f1a] px-6 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="background-grid absolute inset-0" />

      <div aria-hidden="true" className="hero-decoration pointer-events-none absolute left-1/2 top-32 flex -translate-x-1/2 items-center justify-center md:top-36">
        <div className="hero-signal-reflection absolute h-40 w-40 rounded-full blur-2xl" />
        <div className="hero-signal-ring hero-signal-ring-first absolute h-40 w-40 rounded-full" />
        <div className="hero-signal-ring hero-signal-ring-second absolute h-40 w-40 rounded-full" />
        <div className="hero-signal-ring hero-signal-ring-third absolute h-40 w-40 rounded-full" />
      </div>

      <SiteHeader />

      <main id="main-content" aria-labelledby="hero-heading" className="relative z-10 flex flex-1 items-center justify-center py-12 md:py-16">
        <div className="max-w-[820px] translate-y-5 animate-[fadeIn_1s_ease-out] text-center md:translate-y-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Distributed ML · Optimization · Systems</p>
          <h1 id="hero-heading" className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">Omprakash Sahani</h1>
          <p className="mb-5 text-xl text-blue-400 md:text-2xl">ML Systems Engineer</p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:max-w-[820px]">I build ML systems and developer infrastructure from first principles—across distributed training, autograd, benchmarking, search evaluation, and observability—focused on how memory, communication, latency, and reproducibility shape real-world performance.</p>
          <p className="mt-5 text-sm font-medium text-gray-500">2024 — Present · Independent ML Systems Projects</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="rounded-xl bg-blue-400 px-5 py-3 text-sm font-medium text-[#0b0f1a] transition hover:bg-blue-300">View Selected Projects</Link>
            <a href="/Omprakash_Sahani_Resume.pdf" download="Omprakash_Sahani_Resume.pdf" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-blue-400 hover:text-blue-300">Download Resume</a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
