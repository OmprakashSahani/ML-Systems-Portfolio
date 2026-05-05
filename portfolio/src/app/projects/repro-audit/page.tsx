import Link from "next/link";

export default function ReproAuditPage() {
  return (
    <main className="relative min-h-screen bg-[#0b0f1a] text-white px-6 py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293730_1px,transparent_1px),linear-gradient(to_bottom,#1f293730_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-blue-400 hover:text-blue-300 transition"
        >
          ← Back to home
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-400">
          Project Case Study
        </p>

        <h1 className="mb-2 text-4xl font-bold md:text-5xl">
          ML Reproducibility Auditor
        </h1>

        <p className="mb-6 text-xs text-gray-500">Updated: May 2026</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/OmprakashSahani/ml-repro-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
          >
            View Repository →
          </a>

          <a
            href="https://asciinema.org/a/OgamYxdbBFK8FMZk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
          >
            Watch Demo →
          </a>
        </div>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a CLI-based system to evaluate machine learning repositories for
          reproducibility, engineering quality, and ML systems design patterns using
          GitHub API-based analysis.
        </p>

        {/* Highlights */}
        <ul className="mb-12 flex flex-wrap gap-4 text-sm text-blue-400">
          <li>• Reproducibility scoring system</li>
          <li>• GitHub API-based analysis</li>
          <li>• ML systems pattern detection</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 leading-relaxed">
            Many ML repositories lack reproducibility, clear environment setup,
            and engineering discipline. Evaluating their reliability and system
            design quality is difficult without manual inspection.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• GitHub API-based repository inspection without cloning</li>
            <li>• Structure analysis for CI/CD, benchmarks, datasets, and packaging</li>
            <li>• Code quality and determinism checks</li>
            <li>• ML system pattern detection for PyTorch, distributed training, and all-reduce</li>
            <li>• Scoring engine with reproducibility score and risk classification</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>
          <p className="mb-6 text-gray-400">
            The tool fetches repository metadata through the GitHub API, analyzes
            structure and code signals, scores reproducibility, classifies risk,
            and generates actionable insights.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/repro-audit-architecture.png"
              alt="ML Reproducibility Auditor architecture"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Identified missing reproducibility signals such as CI/CD and seed control</li>
            <li>• Detected system-level patterns across real-world ML repositories</li>
            <li>• Provided automated evaluation of engineering maturity</li>
            <li>• Enabled comparison of ML infrastructure practices across projects</li>
          </ul>
        </section>

        {/* Example Output */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Example Output</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-sm text-gray-300">
            <pre>{`Reproducibility Score: 7.5/10
Risk Level: MEDIUM
Missing CI/CD → Not automatically validated
Missing seed control → Not reproducible`}</pre>
          </div>
        </section>

        {/* Takeaway */}
        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
          Reproducibility in ML systems depends on engineering practices, not just model design.
        </p>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">
            Python · CLI · GitHub API · Static Analysis · ML Systems
          </p>
        </section>
      </div>
    </main>
  );
}