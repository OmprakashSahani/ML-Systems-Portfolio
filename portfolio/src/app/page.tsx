import Link from "next/link";
import ContactButton from "@/components/ContactButton";

const projects = [
  {
    title: "Autograd Engine",
    description:
      "Reverse-mode autodiff engine with dynamic computation graphs and topological backpropagation. Verified gradient correctness and analyzed trade-offs between memory usage, execution efficiency, and graph flexibility.",
    tags: ["Python", "Autograd", "Backpropagation", "Performance"],
    link: "/projects/autograd",
    github: "https://github.com/OmprakashSahani/autograd-engine",
  },
  {
    title: "Distributed Training",
    description:
      "Distributed training simulator analyzing scaling efficiency, communication overhead, and system-level bottlenecks across data-parallel workloads.",
    tags: ["Python", "Distributed Systems", "All-Reduce", "Performance"],
    link: "/projects/distributed",
    github: "https://github.com/OmprakashSahani/distml-core",
  },
  {
    title: "ML Experiment Tracker",
    description:
      "CLI-based experiment tracking system for reproducible ML workflows, enabling structured run logging, metric comparison, and evaluation across experiments.",
    tags: ["Python", "CLI", "Reproducibility", "ML Systems"],
    link: "/projects/tracker",
    github: "https://github.com/OmprakashSahani/ML-Experiment-Tracker",
  },
  {
    title: "ML Benchmark Suite",
    description:
      "Config-driven benchmarking system measuring throughput, latency, and memory usage.",
    tags: ["Benchmarking", "Performance", "Systems"],
    link: "/projects/benchmark",
    github: "https://github.com/OmprakashSahani/ml-benchmark-suite",
  },
];

const journey = [
  {
    period: "2017 — 2020",
    title: "Diploma in Computer Engineering",
    description:
      "Built foundational knowledge in programming, data structures, and core system concepts, forming the base for further study in computer science and engineering.",
  },
  {
    period: "2020 — 2023",
    title: "B.Tech in Computer Science and Engineering",
    description:
      "Built strong foundations in computer science, including data structures, operating systems, distributed systems, and machine learning, shaping a systems-oriented approach to problem solving.",
  },
  {
    period: "2023 — Present",
    title: "ML Systems Engineering (Independent)",
    description:
      "Building distributed training systems, autograd engines, and performance benchmarking tools from first principles.",
  },
  {
  period: "Next",
  title: "ML Systems Engineering & Research",
  description:
    "Moving toward building and studying large-scale machine learning systems, combining distributed systems, optimization, and performance engineering to understand how models behave under real-world constraints.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0f1a] px-6 text-white">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293730_1px,transparent_1px),linear-gradient(to_bottom,#1f293730_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="absolute left-1/2 top-32 md:top-36 -translate-x-1/2 flex items-center justify-center">

      {/* Core glow (softer) */}
      <div className="absolute h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

      {/* Ripple 1 */}
      <div className="absolute h-40 w-40 rounded-full border border-blue-400/20 [animation:ripple_5s_linear_infinite]" />

      {/* Ripple 2 */}
      <div className="absolute h-40 w-40 rounded-full border border-blue-400/15 [animation:ripple_5s_linear_infinite] [animation-delay:1.5s]" />

      {/* Ripple 3 */}
      <div className="absolute h-40 w-40 rounded-full border border-blue-400/10 [animation:ripple_5s_linear_infinite] [animation-delay:3s]" />

      </div>

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm md:text-base tracking-wide text-gray-300 hover:text-blue-300 transition">
          <span className="text-blue-400">01</span>
          <span>· ∇L(θ)</span>
        </Link>

        <div className="flex items-center gap-8 text-[15px] md:text-base">

          <a href="#projects" className="font-medium text-gray-200 hover:text-blue-300 transition">
          Projects
          </a>

          <a href="#journey" className="font-medium text-gray-200 hover:text-blue-300 transition">
          Journey
          </a>

          <a href="https://github.com/OmprakashSahani" className="font-medium text-gray-200 hover:text-blue-300 transition">
          GitHub
          </a>

          <a href="https://www.linkedin.com/in/omprakashsahani/" className="font-medium text-gray-200 hover:text-blue-300 transition">
          LinkedIn
          </a>

          <ContactButton />
          
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="max-w-3xl animate-[fadeIn_1s_ease-out] text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Distributed ML · Optimization · Systems
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Omprakash Sahani
          </h1>

          <h2 className="mb-6 text-xl text-blue-400 md:text-2xl">
            ML Systems Engineer
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            I build distributed training systems, autograd engines, and performance-focused ML infrastructure from first principles—analyzing how memory, communication, and compute constraints shape real-world performance.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="#projects"
              className="rounded-xl bg-blue-400 px-5 py-3 text-sm font-medium text-[#0b0f1a] hover:bg-blue-300 transition"
            >
              View Selected Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 hover:border-blue-400 hover:text-blue-300 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl pb-28">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-400">
            Selected Work
          </p>
          <h3 className="text-3xl font-semibold md:text-4xl">
            Systems projects focused on performance, scalability, and real-world behavior
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[300px] flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-white/10"
            >
              <Link href={project.link} className="flex flex-1 flex-col">
                <h4 className="mb-3 text-xl font-semibold">{project.title}</h4>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/30 px-3 py-1 text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm text-blue-400 hover:text-blue-300"
              >
                View Code →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Education / Career Journey */}
      <section id="journey" className="relative z-10 mx-auto max-w-6xl pb-28">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-400">
            Journey
          </p>
          <h3 className="text-3xl font-semibold md:text-4xl">
            From foundations to ML systems engineering
          </h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-blue-400/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={item.title}
                className="relative grid gap-6 md:grid-cols-2"
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)] md:left-1/2" />

                <div
                  className={`ml-10 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                <div
                  className={`rounded-2xl p-6 backdrop-blur transition duration-300 hover:-translate-y-1 ${
                    index === journey.length - 2
                      ? "border border-blue-400/40 bg-blue-400/5"
                      : "border border-white/10 bg-white/5 hover:border-blue-400/70 hover:bg-white/10"
                  }`}
                >

                    <p className="mb-2 text-sm font-medium text-blue-400">
                      {item.period}
                    </p>

                    <h4 className="mb-3 text-xl font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-8 text-sm text-gray-500">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 Omprakash Sahani</p>
          <p>ML Systems · Distributed Training · Optimization</p>
        </div>
      </footer>
    </main>
  );
}