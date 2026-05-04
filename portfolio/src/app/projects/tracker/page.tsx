import Link from "next/link";

export default function TrackerPage() {
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

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          ML Experiment Tracker
        </h1>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          Built a CLI-based experiment tracking system to support reproducible ML workflows,
          enabling structured run logging, metric comparison, and evaluation across experiments.
        </p>

        {/* Problem */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 leading-relaxed">
            Managing machine learning experiments becomes difficult as runs increase.
            Without proper tracking, it is hard to reproduce results, compare configurations,
            and identify the best-performing models.
          </p>
        </section>

        {/* System Design */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• CLI interface for experiment management</li>
            <li>• Local JSON-based storage for runs and metadata</li>
            <li>• Timestamped run creation for reproducibility</li>
            <li>• Metric logging and structured comparison</li>
          </ul>
        </section>

        {/* Workflow */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Workflow</h2>
          <p className="text-gray-400">
            Issue → Branch → Code → Test → PR → CI → Merge → Release
          </p>
        </section>

        {/* Results & Insights */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Results & Insights</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• Enabled reproducible experiment tracking using structured JSON storage</li>
            <li>• Simplified comparison of model performance across runs</li>
            <li>• Identified differences in accuracy and loss between baseline and tuned runs</li>
            <li>• Improved workflow clarity through CLI-based interaction</li>
          </ul>
        </section>

        {/* Example Output */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Example Output</h2>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-sm text-gray-300">
            <pre>
{`- baseline | accuracy=0.95, loss=0.42
- tuned    | accuracy=0.97, loss=0.36`}
            </pre>
          </div>
        </section>

        {/* Tech */}
        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 backdrop-blur p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">
            Python · CLI · JSON Storage · PyTest · CI/CD
          </p>
        </section>

      </div>
    </main>
  );
}