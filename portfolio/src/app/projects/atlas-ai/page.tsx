import Link from "next/link";

export default function AtlasAIPage() {
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
          Flagship Systems Platform
        </p>

        <h1 className="mb-2 text-4xl font-bold md:text-5xl">
          Atlas AI
        </h1>

        <p className="mb-6 text-xs text-gray-500">
          Updated: May 2026
        </p>

        <a
          href="https://github.com/OmprakashSahani/atlas-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
        >
          View Repository →
        </a>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a distributed AI infrastructure platform focused on transformer systems,
          distributed training behavior, inference optimization, observability,
          and performance engineering under real systems constraints.
        </p>

        {/* Highlights */}
        <ul className="mb-12 flex flex-wrap gap-4 text-sm text-blue-400">
          <li>• Transformer infrastructure + KV-cache systems</li>
          <li>• Distributed runtime & communication profiling</li>
          <li>• Serving, observability, and benchmark automation</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>

          <p className="text-gray-400 leading-relaxed">
            Modern AI systems are constrained not only by model quality, but also by
            communication overhead, memory scaling, inference latency, synchronization cost,
            and observability limitations. Atlas AI explores these problems through a
            systems-oriented infrastructure platform.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>

          <ul className="space-y-3 text-gray-400">
            <li>• Reverse-mode autograd + optimizer infrastructure</li>
            <li>• Transformer runtime with KV-cache and streaming generation</li>
            <li>• Distributed multiprocessing runtime with communication profiling</li>
            <li>• FastAPI inference server with observability endpoints</li>
            <li>• Benchmark automation and regression detection workflows</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>

          <p className="mb-6 text-gray-400">
            Atlas AI integrates training infrastructure, transformer systems,
            distributed runtimes, serving infrastructure, and observability into a unified ML systems platform.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/atlas-architecture.png"
              alt="Atlas AI architecture"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>

          <ul className="space-y-3 text-gray-400">
            <li>• Observed throughput degradation as autoregressive sequence length increased</li>
            <li>• Communication profiling exposed scaling bottlenecks in distributed runtimes</li>
            <li>• KV-cache growth significantly impacted transformer memory behavior</li>
            <li>• Streaming generation reduced perceived inference latency</li>
            <li>• Benchmark automation enabled regression-oriented infrastructure validation</li>
          </ul>
        </section>

        {/* Benchmark */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Transformer Benchmark</h2>

          <p className="mb-6 text-gray-400">
            Transformer generation throughput decreases as token count increases,
            revealing inference scaling and KV-cache effects.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/transformer_generation_benchmark.png"
              alt="Transformer benchmark"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Demo */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Serving & Observability</h2>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/dashboard-api.png"
              alt="Atlas AI dashboard"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Takeaway */}
        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
          Modern AI systems are fundamentally constrained by memory behavior,
          communication overhead, inference latency, and observability — not just model architecture.
        </p>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>

          <p className="text-blue-300">
            Python · Transformers · FastAPI · Distributed Systems · Observability
          </p>
        </section>

      </div>
    </main>
  );
}