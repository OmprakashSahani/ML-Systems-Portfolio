import Link from "next/link";

export default function TrackerPage() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white px-6 py-20">
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
          ML Experiment Tracker
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          A lightweight experiment tracking system for logging training runs,
          comparing metrics, and visualizing model performance.
        </p>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="leading-relaxed text-gray-400">
            ML experiments become hard to compare when metrics are stored
            manually. This project creates a simple workflow to log runs,
            store results, and compare accuracy across experiments.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• CLI command creates timestamped run files.</li>
            <li>• Metrics are stored as structured JSON.</li>
            <li>• Plot script reads run history and generates comparison graphs.</li>
            <li>• Simple design keeps the tracker understandable and extensible.</li>
          </ul>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results</h2>

          <p className="mb-6 leading-relaxed text-gray-400">
            Compared model performance across multiple training runs using the
            experiment tracking system. The graph shows accuracy trends across
            runs.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <img
              src="/images/accuracy.png"
              alt="Accuracy comparison graph"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">Python · JSON · CLI · Matplotlib</p>
        </section>
      </div>
    </main>
  );
}