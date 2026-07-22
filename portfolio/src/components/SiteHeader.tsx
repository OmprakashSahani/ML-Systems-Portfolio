import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import MobileNavigation, { GitHubIcon, LinkedInIcon } from "@/components/MobileNavigation";
import ThemeSelector from "@/components/ThemeSelector";

export default function SiteHeader() {
  return (
    <header>
      <nav aria-label="Primary navigation" className="site-nav relative z-20 mx-auto flex max-w-6xl items-center justify-between py-6">
        <Link href="/" aria-label="Homepage" className="flex items-center gap-2 font-mono text-sm tracking-wide text-gray-300 transition hover:text-blue-300 md:text-base">
          <span className="text-blue-400">01</span><span>· ∇L(θ)</span>
        </Link>
        <div className="site-nav-links flex items-center text-[15px] md:text-base">
          <div className="header-utility" role="group" aria-label="Social links and theme controls">
            <a href="https://github.com/OmprakashSahani" target="_blank" rel="noopener noreferrer" aria-label="Omprakash Sahani on GitHub" title="GitHub" className="utility-link"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/omprakashsahani/" target="_blank" rel="noopener noreferrer" aria-label="Omprakash Sahani on LinkedIn" title="LinkedIn" className="utility-link"><LinkedInIcon /></a>
            <ContactButton iconOnly />
            <ThemeSelector />
          </div>
        </div>
        <MobileNavigation />
      </nav>
    </header>
  );
}
