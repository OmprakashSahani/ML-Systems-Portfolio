import Link from "next/link";

export default function BenchmarkPage() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to home
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-400">
          Project Case Study
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          ML Benchmark Suite
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          A config-driven benchmarking system for measuring throughput, latency,
          and memory usage across machine learning workloads.
        </p>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Status</h2>
          <p className="leading-relaxed text-gray-400">
            This project is currently being developed. It focuses on
            reproducible performance evaluation and system-level analysis of ML
            workloads.
          </p>
        </section>
      </div>
    </main>
  );
}