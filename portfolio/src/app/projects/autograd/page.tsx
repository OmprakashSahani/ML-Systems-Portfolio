import Link from "next/link";

export default function AutogradPage() {
  return (
    <main className="relative min-h-screen bg-[#0b0f1a] text-white px-6 py-20 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293730_1px,transparent_1px),linear-gradient(to_bottom,#1f293730_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Back */}
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-blue-400 hover:text-blue-300 transition"
        >
          ← Back to home
        </Link>

        {/* Header */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-400">
          Project Case Study
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Autograd Engine (From Scratch)
        </h1>

        <a
          href="https://github.com/OmprakashSahani/autograd-engine"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          View Repository →
        </a>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a reverse-mode autodiff engine from scratch to understand how
          computation graphs are constructed and executed. Focused on correctness,
          scalability, and system-level trade-offs in gradient computation.
        </p>

        <ul className="mb-8 flex flex-wrap gap-4 text-sm text-gray-400">
          <li>• ~1e-10 gradient error</li>
          <li>• Scales to 10,000+ nodes</li>
          <li>• Iterative DFS (no recursion limit)</li>
        </ul>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="leading-relaxed text-gray-400">
            Modern ML frameworks abstract away gradient computation, making it
            difficult to understand how backpropagation and graph execution work
            internally. This project rebuilds autograd from first principles to
            analyze system behavior and execution trade-offs.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Dynamic computation graph (define-by-run)</li>
            <li>• Reverse-mode autodiff using topological traversal</li>
            <li>• Gradient accumulation across dependency paths</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Architecture</h2>
          <p className="mb-6 text-gray-400">
            The system builds a dynamic computation graph during forward execution
            and performs reverse-mode differentiation using topological traversal.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/autograd-architecture.png"
              alt="Autograd architecture diagram"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* Results & Insights */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Gradient correctness validated (~1e-10 error)</li>
            <li>• Backward pass scales approximately linearly with graph size</li>
            <li>• Recursive traversal introduced depth limits (~1k nodes)</li>
            <li>• Replaced recursion with iterative DFS, scaling to 10,000+ nodes</li>
            <li>• Observed trade-offs between flexibility, memory usage, and execution efficiency</li>
          </ul>
        </section>

        {/* Benchmark */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Benchmark</h2>
          <p className="mb-6 text-gray-400">
            Backward pass performance increases with graph size, demonstrating
            near-linear scaling behavior.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <img
              src="/images/backward_benchmark.png"
              alt="Backward benchmark graph"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </section>

        <p className="mb-12 rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 text-sm leading-relaxed text-gray-300">
          <span className="font-semibold text-blue-300">Takeaway:</span>{" "}
            Autograd performance depends not only on mathematical correctness, but also on graph traversal strategy, memory behavior, and execution overhead.
        </p>

        {/* Tech Stack */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">
            Python · NumPy · Autograd · Backpropagation · Performance Analysis
          </p>
        </section>

      </div>
    </main>
  );
}