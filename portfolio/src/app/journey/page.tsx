import type { Metadata } from "next";
import EngineeringJourney from "@/components/EngineeringJourney";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const description = "A guided visual story of Omprakash Sahani’s education, independent engineering work, ML systems projects, technical skills, and current professional direction.";

export const metadata: Metadata = {
  title: "Engineering Story",
  description,
  alternates: { canonical: "/journey" },
  openGraph: { title: "Engineering Story | Omprakash Sahani", description, url: "/journey", type: "website" },
  twitter: { card: "summary", title: "Engineering Story | Omprakash Sahani", description },
};

export default function JourneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Engineering Story",
    description,
    url: "https://ml-systems-portfolio.vercel.app/journey",
    about: {
      "@type": "Person",
      name: "Omprakash Sahani",
      url: "https://ml-systems-portfolio.vercel.app/about",
    },
  };

  return (
    <div className="portfolio-page relative min-h-screen overflow-hidden bg-[#0b0f1a] px-6 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="background-grid absolute inset-0" />
      <SiteHeader />
      <main id="main-content">
        <EngineeringJourney />
      </main>
      <SiteFooter />
    </div>
  );
}
