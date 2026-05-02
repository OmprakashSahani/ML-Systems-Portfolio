import Link from "next/link";

export default function DistributedPage() {
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
          Distributed Training with DDP
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
          A distributed training project focused on data parallelism, gradient
          synchronization, communication overhead, and scaling behavior across
          multiple workers.
        </p>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Problem</h2>
          <p className="leading-relaxed text-gray-400">
            Training larger models requires distributing computation across
            multiple devices. This project studies how model replicas process
            different data shards and synchronize gradients before optimizer
            updates.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">System Design</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• One process owns one model replica.</li>
            <li>• Each worker receives a different mini-batch shard.</li>
            <li>• Gradients are synchronized using all-reduce.</li>
            <li>• Optimizer step runs after synchronized gradients are available.</li>
          </ul>
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Engineering Trade-offs</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• More GPUs increase throughput but also communication cost.</li>
            <li>• Batch size affects convergence and hardware utilization.</li>
            <li>• Synchronization frequency impacts scalability.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
          <p className="text-blue-300">PyTorch · DDP · NCCL · CUDA · Multi-GPU</p>
        </section>

      </div>
    </main>
  );
}