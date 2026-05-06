import Link from "next/link";

export default function ProfilerPage() {
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
          Distributed Training Profiler
        </h1>

        <p className="mb-6 text-xs text-gray-500">
          Updated: May 2026
        </p>

        <a
          href="https://github.com/OmprakashSahani/dist-training-profiler"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block text-sm text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition"
        >
          View Repository →
        </a>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a systems-oriented profiler for analyzing communication overhead,
          memory bottlenecks, scaling efficiency, and distributed training behavior
          in large-scale ML workloads.
        </p>

        {/* Highlights */}
        <ul className="mb-12 flex flex-wrap gap-4 text-sm text-blue-400">
          <li>• Communication vs compute bottleneck analysis</li>
          <li>• ZeRO memory optimization simulation</li>
          <li>• Scaling efficiency & overlap analysis</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 leading-relaxed">
            Large-scale distributed training is constrained by communication overhead,
            GPU memory limits, and synchronization bottlenecks. Understanding these
            trade-offs is critical for efficient LLM and distributed ML training.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Distributed training step simulation</li>
            <li>• Ring all-reduce communication modeling</li>
            <li>• Communication-computation overlap analysis</li>
            <li>• GPU memory feasibility estimation</li>
            <li>• ZeRO-1 / ZeRO-2 / ZeRO-3 optimization modeling</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>

          <p className="mb-6 text-gray-400">
            The profiler models distributed training behavior across communication,
            memory, and scaling dimensions to identify bottlenecks and optimization opportunities.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/profiler-architecture.png"
              alt="Distributed training profiler architecture"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Communication overhead increases significantly with worker count</li>
            <li>• Scaling efficiency degrades as synchronization dominates execution</li>
            <li>• Communication-computation overlap reduces effective synchronization cost</li>
            <li>• Large models rapidly become memory-bound</li>
            <li>• ZeRO optimization dramatically reduces memory requirements</li>
          </ul>
        </section>

        {/* Scaling Graph */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Scaling Analysis</h2>

          <p className="mb-6 text-gray-400">
            Scaling behavior demonstrates how communication increasingly dominates
            training step time as worker count grows.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/scaling_efficiency.png"
              alt="Scaling efficiency graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Takeaway */}
        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
          Large-scale ML training is fundamentally constrained by communication
          and memory systems, not just compute throughput.
        </p>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">
            Python · Distributed Systems · Memory Modeling · Performance Analysis
          </p>
        </section>

      </div>
    </main>
  );
}