"use client";

import { useId, useState } from "react";

type ContactButtonProps = {
  iconOnly?: boolean;
  label?: string;
};

export default function ContactButton({ iconOnly = false, label = "Contact" }: ContactButtonProps) {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const detailsId = useId();

  const email = "Omprakash.Sahani1206@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
      setShowEmail(false);
    }, 900);
  };

  return (
    <div className="relative">
      {/* Contact button */}
      <button
        type="button"
        aria-expanded={showEmail}
        aria-controls={detailsId}
        onClick={() => {
          setShowEmail(!showEmail);
          setCopied(false);
        }}
        aria-label={iconOnly ? "Email Omprakash Sahani" : undefined}
        title={iconOnly ? "Email" : undefined}
        className={iconOnly ? "utility-link contact-icon-button" : "font-semibold text-blue-400 hover:text-blue-300 transition"}
      >
        {iconOnly ? (
          <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        ) : label}
      </button>

      {/* Floating dropdown */}
      {showEmail && (
        <div id={detailsId} className="contact-popover absolute right-0 top-full z-30 mt-3 w-max rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 shadow-lg">

          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            EMAIL
          </p>

          <a href={`mailto:${email}`} className="block text-sm font-medium text-gray-200 mb-2 hover:text-blue-300">
            {email}
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="text-xs text-blue-400 hover:text-blue-300 transition"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>

        </div>
      )}
    </div>
  );
}
