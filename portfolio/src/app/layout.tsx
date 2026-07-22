import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-systems-portfolio.vercel.app"),
  title: {
    default: "Omprakash Sahani | ML Systems Engineer",
    template: "%s | Omprakash Sahani",
  },
  description: "ML systems engineering portfolio focused on distributed training, search evaluation, benchmarking, autograd, and performance analysis.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Omprakash Sahani | ML Systems Engineer",
    description: "ML systems engineering portfolio focused on distributed training, search evaluation, benchmarking, autograd, and performance analysis.",
    siteName: "Omprakash Sahani Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Omprakash Sahani | ML Systems Engineer",
    description: "ML systems engineering portfolio focused on distributed training, search evaluation, benchmarking, autograd, and performance analysis.",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

const themeScript = `
(() => {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    const preference = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    const resolved = preference === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    document.documentElement.dataset.themePreference = preference;
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.style.colorScheme = resolved;
  } catch {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
