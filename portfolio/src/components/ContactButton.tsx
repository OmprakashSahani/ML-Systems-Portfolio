"use client";

import { useState } from "react";

export default function ContactButton() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "Om.Sahani@icloud.com";

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
        onClick={() => {
          setShowEmail(!showEmail);
          setCopied(false);
        }}
        className="font-semibold text-blue-400 hover:text-blue-300 transition"
      >
        Contact
      </button>

      {/* Floating dropdown */}
      {showEmail && (
        <div className="absolute right-0 top-full mt-3 w-max rounded-xl border border-white/10 bg-[#0b0f1a]/90 backdrop-blur px-4 py-3 text-sm text-gray-300 shadow-lg">

          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            EMAIL
          </p>

          <p className="text-sm font-medium text-gray-200 mb-2">
            {email}
          </p>

          <button
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