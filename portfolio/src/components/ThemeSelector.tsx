"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
  {
    value: "light",
    label: "Light",
    icon: <path d="M12 3v2m0 14v2M3 12h2m14 0h2m-3.64-6.36-1.42 1.42M8.06 15.94l-1.42 1.42m0-11.72 1.42 1.42m7.88 8.88 1.42 1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <path d="M20 15.1A8.5 8.5 0 0 1 8.9 4 8.5 8.5 0 1 0 20 15.1Z" />,
  },
  {
    value: "system",
    label: "System",
    icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
  },
];

function applyTheme(preference: Theme) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const resolved = preference === "system" ? (media.matches ? "dark" : "light") : preference;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
}

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const initial = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    applyTheme(initial);
    const frame = requestAnimationFrame(() => setTheme(initial));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => theme === "system" && applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  useEffect(() => {
    const onThemeChange = (event: Event) => setTheme((event as CustomEvent<Theme>).detail);
    window.addEventListener("portfolio-theme-change", onThemeChange);
    return () => window.removeEventListener("portfolio-theme-change", onThemeChange);
  }, []);

  const select = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new CustomEvent<Theme>("portfolio-theme-change", { detail: nextTheme }));
  };

  return (
    <div className="theme-selector" role="group" aria-label="Colour theme">
      {themes.map(({ value, label, icon }) => (
        <button
          key={value}
          type="button"
          className="theme-option"
          aria-label={`Use ${label.toLowerCase()} theme`}
          aria-pressed={theme === value}
          title={label}
          onClick={() => select(value)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </button>
      ))}
    </div>
  );
}
