"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactButton from "@/components/ContactButton";
import MobileNavigation, { GitHubIcon, LinkedInIcon, UserIcon } from "@/components/MobileNavigation";
import ThemeSelector from "@/components/ThemeSelector";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <nav aria-label="Primary navigation" className="site-nav relative z-20 mx-auto flex max-w-6xl items-center justify-between py-6">
        <Link href="/" aria-label="Homepage" className="flex items-center gap-2 font-mono text-sm tracking-wide text-gray-300 transition hover:text-blue-300 md:text-base">
          <span className="text-blue-400">01</span><span>· ∇L(θ)</span>
        </Link>
        <div className="site-nav-links flex items-center gap-2 text-[15px] md:text-base">
          <Link href="/journey" aria-label="Engineering Story" aria-current={pathname === "/journey" ? "page" : undefined} title="Engineering Story" className={`inline-flex h-[2.375rem] items-center rounded-[.65rem] border border-white/10 bg-white/5 px-3.5 text-[13px] font-semibold text-gray-400 transition hover:border-blue-400/40 hover:bg-white/10 hover:text-blue-300 lg:px-3 ${pathname === "/journey" ? "border-blue-400/40 bg-blue-400/10 text-blue-400" : ""}`}>Engineering Story</Link>
          <div className="header-utility" role="group" aria-label="Navigation, social links, and theme controls">
            <Link href="/about" aria-label="About Omprakash Sahani" aria-current={pathname === "/about" ? "page" : undefined} title="About" className="utility-link"><UserIcon /></Link>
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
