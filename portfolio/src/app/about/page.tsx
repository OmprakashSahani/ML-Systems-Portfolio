import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/MobileNavigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const description = "About Omprakash Sahani, a computer science graduate building ML systems, distributed-training tools, performance infrastructure, robotics-data analysis, benchmarking, and reproducible developer tooling.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Omprakash Sahani", description, url: "/about", type: "profile" },
  twitter: { card: "summary", title: "About | Omprakash Sahani", description },
};

const focusAreas = [
  {
    title: "ML Systems",
    description: "Training infrastructure, transformer systems, autograd, distributed runtimes, inference workflows, and the constraints that shape model execution.",
    tags: ["Distributed Training", "Autograd", "Transformers", "Inference"],
  },
  {
    title: "Software Engineering",
    description: "Backend systems, APIs, developer tooling, testing, automation, maintainable architecture, and reliable workflows that turn technical ideas into usable software.",
    tags: ["Backend Systems", "Developer Tooling", "Testing", "System Design"],
  },
  {
    title: "Performance Engineering",
    description: "Benchmarking, profiling, observability, regression detection, memory analysis, communication overhead, and reproducible evaluation.",
    tags: ["Benchmarking", "Profiling", "Observability", "Reproducibility"],
  },
  {
    title: "Robotics Data Systems",
    description: "State-space analysis, robot trajectories, workspace coverage, dataset diagnostics, and interactive tools for understanding embodied-AI data.",
    tags: ["LeRobot", "Forward Kinematics", "Dataset Analysis", "3D Visualization"],
  },
];

const proofItems = [
  <>Built <Link href="/projects/atlas-ai" className="font-medium text-blue-400 hover:text-blue-300 hover:underline">Atlas AI</Link>, an ML systems platform spanning autograd, transformer infrastructure, distributed runtime concepts, inference serving, observability, and benchmarking.</>,
  <>Built <Link href="/projects/lerobot-state-atlas" className="font-medium text-blue-400 hover:text-blue-300 hover:underline">LeRobot State Atlas</Link>, which transforms LeRobot trajectories through URDF-based forward kinematics into dual-arm workspace coverage and interactive three-dimensional diagnostics.</>,
  <>Built <Link href="/projects/searcheval-lab" className="font-medium text-blue-400 hover:text-blue-300 hover:underline">SearchEval Lab</Link> for evaluating TF-IDF, BM25, and hybrid retrieval systems with relevance metrics, latency analysis, regression detection, and query-level failure reporting.</>,
  <>Built tools for distributed-training profiling, benchmark-regression detection, reproducibility auditing, and automatic differentiation.</>,
  <>Maintain documented and tested public engineering projects with case studies, architecture views, validation evidence, and live demonstrations.</>,
];

function DownloadIcon() {
  return <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>;
}

function MailIcon() {
  return <svg className="social-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Omprakash Sahani",
    url: "https://ml-systems-portfolio.vercel.app/about",
    mainEntity: {
      "@type": "Person",
      name: "Omprakash Sahani",
      jobTitle: "ML Systems Engineer and Software Engineer",
      url: "https://ml-systems-portfolio.vercel.app",
      sameAs: ["https://github.com/OmprakashSahani", "https://www.linkedin.com/in/omprakashsahani/"],
    },
  };

  return (
    <div className="portfolio-page relative min-h-screen overflow-hidden bg-[#0b0f1a] px-6 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="background-grid absolute inset-0" />
      <SiteHeader />

      <main id="main-content" aria-labelledby="about-heading" className="relative z-10 mx-auto max-w-6xl pb-20 pt-8 md:pt-10">
        <section className="grid min-w-0 items-start gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)] md:gap-12 lg:grid-cols-[minmax(0,1.9fr)_minmax(300px,1fr)]">
          <div className="order-2 min-w-0 md:order-1">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-blue-400">About</p>
            <h1 id="about-heading" className="text-4xl font-semibold tracking-tight md:text-5xl">Omprakash Sahani</h1>
            <p className="mt-4 text-base font-medium text-blue-400 md:text-lg">ML Systems Engineer · Software Engineer · Distributed Systems</p>
            <div className="mt-7 max-w-[720px] space-y-5 text-base leading-relaxed text-gray-400">
              <p>I’m a computer science graduate who enjoys understanding how machine-learning systems behave beyond the model itself—how memory, communication, latency, observability, and reproducibility shape the way systems perform in practice.</p>
              <p>Since 2024, I’ve been building independent projects across autograd, transformer infrastructure, distributed training, benchmarking, search evaluation, reproducibility, and robotics-data analysis. I like working from first principles and turning those ideas into tested, documented tools that make complex systems easier to inspect.</p>
              <p>I’m looking for software engineering and ML systems roles where I can keep learning, contribute to reliable infrastructure, and help researchers and engineers understand and improve the systems they depend on.</p>
            </div>
          </div>

          <aside className="order-1 mx-auto w-full max-w-[300px] min-w-0 md:order-2 md:max-w-[320px]" aria-label="Profile details">
            <Image src="/about/omprakash-sahani.png" alt="Portrait of Omprakash Sahani" width={1254} height={1254} sizes="(max-width: 767px) 300px, (max-width: 1023px) 30vw, 320px" className="h-auto w-full rounded-xl border border-white/10" preload />
            <div className="mt-4 border-l border-blue-400/30 pl-4 text-sm leading-relaxed text-gray-500">
              <p>Kolhapur, Maharashtra, India</p>
              <p>Open to full-time opportunities</p>
            </div>
          </aside>
        </section>

        <section aria-labelledby="work-heading" className="mt-14 md:mt-16">
          <h2 id="work-heading" className="text-2xl font-semibold md:text-3xl">What I Work On</h2>
          <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{area.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {area.tags.map((tag) => <span key={tag} className="rounded-full border border-blue-400/30 px-3 py-1 text-xs text-blue-300">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Experience and selected work" className="mt-14 grid items-stretch gap-5 md:mt-16 md:grid-cols-[minmax(0,0.56fr)_minmax(0,1fr)]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
            <p className="mt-6 font-mono text-sm text-blue-400">2024 — Present</p>
            <h3 className="mt-2 text-lg font-semibold">Independent Engineering Work</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">Designing and building independent projects across ML systems, distributed training, software engineering, performance analysis, benchmarking, search evaluation, reproducibility, and robotics data.</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-gray-500">Approach</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">First-principles implementation, testing, documentation, benchmarking, and public case studies.</p>
          </article>

          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <h2 className="px-5 pt-6 text-2xl font-semibold sm:px-6 md:text-3xl">Selected Work</h2>
            <ol className="mt-3">
              {proofItems.map((item, index) => (
                <li key={index} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[2rem_minmax(0,1fr)] sm:px-6">
                  <span className="font-mono text-sm text-blue-400" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-gray-400">{item}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section aria-label="Education and links" className="mt-14 grid items-stretch gap-5 md:mt-16 md:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Education</h2>
            <div className="mt-6">
              <section aria-labelledby="btech-heading" className="pb-5">
                <h3 id="btech-heading" className="text-lg font-semibold">Bachelor of Technology</h3>
                <p className="mt-2 text-sm font-medium text-blue-400">Computer Science and Engineering</p>
                <p className="mt-2 text-sm text-gray-400">Sanjay Ghodawat University</p>
                <p className="mt-1 text-sm text-gray-500">2020–2023</p>
                <p className="mt-3 text-sm text-gray-400">CGPA: 8.40/10 · First Class with Distinction</p>
              </section>
              <section aria-labelledby="diploma-heading" className="border-t border-white/10 pt-5">
                <h3 id="diploma-heading" className="text-lg font-semibold">Diploma</h3>
                <p className="mt-2 text-sm font-medium text-blue-400">Computer Engineering</p>
                <p className="mt-2 text-sm text-gray-400">Maharashtra State Board of Technical Education</p>
                <p className="mt-1 text-sm text-gray-500">2017–2020</p>
                <p className="mt-3 text-sm text-gray-400">First Class</p>
              </section>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Links</h2>
            <div className="mt-6 grid gap-2">
              <a href="/Omprakash_Sahani_Resume.pdf" download="Omprakash_Sahani_Resume.pdf" className="inline-flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-blue-400 hover:bg-white/10 hover:text-blue-300"><DownloadIcon />Download Resume</a>
              <a href="https://github.com/OmprakashSahani" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-blue-400 hover:bg-white/10 hover:text-blue-300"><GitHubIcon />View GitHub</a>
              <a href="https://www.linkedin.com/in/omprakashsahani/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-blue-400 hover:bg-white/10 hover:text-blue-300"><LinkedInIcon />Connect on LinkedIn</a>
              <a href="mailto:Omprakash.Sahani1206@gmail.com" className="inline-flex min-h-11 w-full items-center gap-3 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-blue-400 hover:bg-white/10 hover:text-blue-300"><MailIcon />Send Email</a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
