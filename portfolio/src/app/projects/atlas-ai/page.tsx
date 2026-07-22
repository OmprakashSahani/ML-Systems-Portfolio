import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { PanelCard } from "@/components/CaseStudyShell";
import { projectMetadata } from "@/lib/metadata";

export const metadata = projectMetadata("Atlas AI", "Distributed AI infrastructure platform for transformer systems, distributed training, inference optimization, observability, and performance engineering.", "/projects/atlas-ai");

const repositoryLink = <a href="https://github.com/OmprakashSahani/atlas-ai" target="_blank" rel="noopener noreferrer">View Repository →</a>;

export default function AtlasAIPage() {
  return (
    <CaseStudyShell
      identifier="PROJECT 01 · ML INFRASTRUCTURE"
      title="Atlas AI"
      updated="May 2026"
      introduction="Built a distributed AI infrastructure platform for transformer systems, distributed training behavior, inference optimization, observability, and performance engineering under real systems constraints."
      links={repositoryLink}
      showBackLink={false}
      tabs={[
        { id: "overview", label: "Overview", content: <div><PanelCard title="Problem"><p>Modern AI systems are constrained not only by model quality, but by communication overhead, memory scaling, inference latency, synchronization cost, and observability limitations.</p></PanelCard><section className="atlas-technical-highlights" aria-labelledby="atlas-technical-highlights-title"><h2 id="atlas-technical-highlights-title" className="text-lg font-semibold">Technical Highlights</h2><p className="atlas-technology-list">Python · Transformers · FastAPI · Distributed Systems · Observability</p><ul><li>Transformer infrastructure and KV-cache systems</li><li>Distributed runtime and communication profiling</li><li>Serving, observability, and benchmark automation</li></ul></section><Link href="/projects" className="case-study-back atlas-overview-back">← Back to Selected Projects</Link></div> },
        { id: "design", label: "System Design", content: <PanelCard title="System Design"><ul><li>Reverse-mode autograd and optimizer infrastructure</li><li>Transformer runtime with KV cache and streaming generation</li><li>Distributed multiprocessing runtime with communication profiling</li><li>FastAPI inference server with observability endpoints</li><li>Benchmark automation and regression-detection workflows</li></ul></PanelCard> },
        { id: "architecture", label: "Architecture", content: <section className="atlas-architecture-panel" aria-labelledby="atlas-architecture-title"><h2 id="atlas-architecture-title" className="text-xl font-semibold">Architecture</h2><p>Atlas AI integrates training infrastructure, transformer systems, distributed runtimes, serving, and observability into one ML systems platform.</p><Image src="/images/atlas-architecture.png" alt="Atlas AI training, transformer, serving, and observability architecture" width="1536" height="1024" className="atlas-architecture-image" sizes="(min-width: 1280px) 1100px, calc(100vw - 4rem)" /></section> },
        { id: "results", label: "Results", content: <div className="case-panel-grid atlas-natural-grid"><PanelCard title="Results and Insights"><ul><li>Throughput degraded as autoregressive sequence length increased.</li><li>Communication profiling exposed distributed-runtime bottlenecks.</li><li>KV-cache growth materially affected transformer memory behavior.</li><li>Streaming generation reduced perceived inference latency.</li><li>Benchmark automation enabled regression-oriented validation.</li></ul></PanelCard><PanelCard title="Takeaway"><p>Modern AI systems are constrained by memory behavior, communication overhead, inference latency, and observability—not only model architecture.</p></PanelCard></div> },
        { id: "benchmarks", label: "Benchmarks", content: <div className="case-panel-grid atlas-natural-grid"><PanelCard title="Transformer Benchmark"><p>Generation throughput decreases as token count increases, revealing inference-scaling and KV-cache effects.</p><img src="/images/transformer_generation_benchmark.png" alt="Atlas AI transformer generation throughput benchmark" width="800" height="500" className="case-study-image mt-4" loading="lazy" /></PanelCard><PanelCard title="Serving and Observability"><img src="/images/dashboard-api.png" alt="Atlas AI serving and observability dashboard" width="1536" height="1024" className="case-study-image" loading="lazy" /></PanelCard></div> },
      ]}
    />
  );
}
