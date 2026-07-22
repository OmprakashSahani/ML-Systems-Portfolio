"use client";

import { useState } from "react";
import ContactButton from "@/components/ContactButton";
import ThemeSelector from "@/components/ThemeSelector";

function GitHubIcon() {
  return <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.11c.98 0 1.95.13 2.86.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
}

function LinkedInIcon() {
  return <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M5.37 7.98H1.05V21h4.32V7.98ZM3.21 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM21 13.53c0-3.92-2.09-5.74-4.88-5.74-2.25 0-3.26 1.24-3.82 2.11V7.98H7.98V21h4.32v-6.45c0-1.7.32-3.35 2.43-3.35 2.08 0 2.11 1.95 2.11 3.46V21H21v-7.47Z" /></svg>;
}

export { GitHubIcon, LinkedInIcon };

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-navigation">
      <button type="button" className="mobile-menu-button" aria-label={`${open ? "Close" : "Open"} navigation menu`} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
      </button>
      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <a href="https://github.com/OmprakashSahani" target="_blank" rel="noopener noreferrer" aria-label="Omprakash Sahani on GitHub" title="GitHub" className="mobile-menu-link"><GitHubIcon />GitHub</a>
          <a href="https://www.linkedin.com/in/omprakashsahani/" target="_blank" rel="noopener noreferrer" aria-label="Omprakash Sahani on LinkedIn" title="LinkedIn" className="mobile-menu-link"><LinkedInIcon />LinkedIn</a>
          <div className="mobile-menu-contact"><ContactButton label="Email" /></div>
          <div className="mobile-menu-footer"><span className="text-xs text-gray-500">Theme</span><ThemeSelector /></div>
        </div>
      )}
    </div>
  );
}
