import Link from "next/link";

export default function DistributedPage() {
  return (
    <main className="relative min-h-screen bg-[#0b0f1a] text-white px-6 py-20 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293730_1px,transparent_1px),linear-gradient(to_bottom,#1f293730_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Back */}
        <Link href="/" className="mb-10 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to home
        </Link>

        {/* Header */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-400">
          Project Case Study
        </p>

        <h1 className="mb-2 text-4xl font-bold md:text-5xl">
          Distributed Training Simulator
        </h1>

        <p className="mb-6 text-xs text-gray-500">
          Updated: May 2026
        </p>

        <a
          href="https://github.com/OmprakashSahani/distml-core"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          View Repository →
        </a>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a distributed training simulator to analyze scaling behavior,
          communication overhead, and system-level bottlenecks in data-parallel
          machine learning workloads.
        </p>

        <ul className="mb-12 flex flex-wrap gap-4 text-sm text-blue-400">
          <li>• ~0.77 efficiency (small models)</li>
          <li>• Compute → communication bound at ~8 workers</li>
          <li>• Negative scaling for large models (1000MB)</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 leading-relaxed">
            Distributed training is often assumed to scale linearly, but in practice
            communication overhead, model size, and network bandwidth limit performance.
            This project simulates distributed systems behavior to understand when and
            why scaling breaks down.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Data-parallel training with worker-level computation</li>
            <li>• All-reduce communication (Ring and Tree strategies)</li>
            <li>• Step time, speedup, and efficiency modeling</li>
            <li>• Communication ratio and bottleneck detection</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>
          <p className="text-gray-400 mb-6">
            The simulator models distributed training with compute and communication
            phases, followed by synchronization barriers across workers.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/distml-architecture.png"
              alt="Distributed training architecture"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Results & Insights (MOST IMPORTANT) */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Near-linear scaling achieved for small models (~0.77 efficiency)</li>
            <li>• Transition from compute-bound → communication-bound at ~8 workers</li>
            <li>• Large models (1000MB) showed negative scaling due to communication cost</li>
            <li>• Network bandwidth strongly impacts scalability (1GB/s vs 100GB/s)</li>
            <li>• Ring all-reduce outperformed tree strategy at higher worker counts</li>
          </ul>
        </section>

        {/* Communication Ratio Graph */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Communication Ratio</h2>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/gradient_size_comm_ratio.png"
              alt="Communication Ratio Graph"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Scaling Graph */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Scaling Behavior</h2>
          <p className="text-gray-400 mb-6">
            Step time, speedup, and efficiency vary significantly with worker count,
            revealing system bottlenecks at scale.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/step_time_scaling.png"
              alt="Scaling graph"
              className="rounded-lg"
            />
          </div>
        </section>

        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
            Distributed training stops scaling efficiently when communication overhead begins to dominate computation.
        </p>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">
            Python · Distributed Systems · All-Reduce · Performance Modeling
          </p>
        </section>

      </div>
    </main>
  );
}