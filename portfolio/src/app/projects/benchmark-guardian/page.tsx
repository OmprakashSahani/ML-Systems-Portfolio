import Link from "next/link";

export default function BenchmarkGuardianPage() {
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
          Benchmark Guardian
        </h1>

        <p className="mb-6 text-xs text-gray-500">
          Updated: May 2026
        </p>

        <a
          href="https://github.com/OmprakashSahani/benchmark-guardian"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
        >
          View Repository →
        </a>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a developer infrastructure platform for automated benchmark regression
          detection, multi-metric performance analysis, and GitHub pull request feedback.
        </p>

        {/* Highlights */}
        <ul className="mb-12 flex flex-wrap gap-4 text-sm text-blue-400">
          <li>• GitHub App + webhook integration</li>
          <li>• Multi-metric regression detection engine</li>
          <li>• Automated PR feedback workflows</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>

          <p className="text-gray-400 leading-relaxed">
            Performance regressions in ML infrastructure and backend systems are often
            difficult to detect during code review. Latency, memory usage, throughput,
            and scaling efficiency can silently degrade without failing tests.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>

          <ul className="space-y-3 text-gray-400">
            <li>• GitHub App + webhook-driven architecture</li>
            <li>• Secure webhook signature verification</li>
            <li>• Multi-metric benchmark comparison engine</li>
            <li>• Severity classification and regression detection</li>
            <li>• Automated PR comment generation</li>
            <li>• SQLite persistence layer for benchmark storage</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>

          <p className="mb-6 text-gray-400">
            Event-driven backend architecture that processes GitHub pull request events,
            analyzes benchmark regressions, and publishes automated developer feedback.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/benchmark-guardian-architecture.png"
              alt="Benchmark Guardian architecture"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Live GitHub Integration</h2>

          <p className="mb-6 text-gray-400">
            Benchmark Guardian automatically analyzes pull request benchmarks
            and posts regression reports directly into GitHub discussions.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/pr-comment-demo.png"
              alt="Benchmark Guardian PR comment demo"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>

          <ul className="space-y-3 text-gray-400">
            <li>• Automated detection of latency, memory, and throughput regressions</li>
            <li>• Enabled benchmark feedback directly within pull request workflows</li>
            <li>• Classified regression severity across multiple performance dimensions</li>
            <li>• Demonstrated infrastructure-oriented performance observability workflows</li>
          </ul>
        </section>

        {/* Example Output */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Example Benchmark Report</h2>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-sm text-gray-300">
            <pre>{`latency_ms:  +18%  → HIGH regression
memory_mb:   +22%  → HIGH regression
throughput:   -8%  → MEDIUM regression`}</pre>
          </div>
        </section>

        {/* Takeaway */}
        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
          Performance regressions in ML infrastructure require automated,
          systems-aware analysis integrated directly into developer workflows.
        </p>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>

          <p className="text-blue-300">
            Python · FastAPI · GitHub Apps · Webhooks · SQLite · Performance Analysis
          </p>
        </section>

      </div>
    </main>
  );
}