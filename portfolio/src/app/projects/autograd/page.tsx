import Link from "next/link";

export default function AutogradPage() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Back Link */}
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
          Autograd Engine from Scratch
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          A reverse-mode automatic differentiation engine designed to understand
          how modern deep learning frameworks build computation graphs, propagate
          gradients, and optimize parameters.
        </p>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="leading-relaxed text-gray-400">
            Deep learning frameworks hide the mechanics of gradient computation.
            This project rebuilds the core idea from first principles: track
            operations, construct a dynamic graph, and traverse it backward to
            compute gradients.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Each value stores data, gradient, parents, and backward function.</li>
            <li>• Operations create new graph nodes dynamically at runtime.</li>
            <li>• Backward pass uses topological ordering to avoid incorrect gradient flow.</li>
            <li>• Gradients accumulate when one node contributes to multiple downstream paths.</li>
          </ul>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Engineering Trade-offs</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Dynamic graphs are flexible but require careful dependency tracking.</li>
            <li>• Reverse-mode autodiff is efficient for scalar losses with many parameters.</li>
            <li>• Gradient accumulation is necessary for shared subgraphs.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">Python · NumPy · Autograd · Backpropagation</p>
        </section>

      </div>
    </main>
  );
}