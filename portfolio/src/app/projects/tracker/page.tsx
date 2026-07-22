import Link from "next/link";
import CaseStudyShell, { PanelCard } from "@/components/CaseStudyShell";
import { projectMetadata } from "@/lib/metadata";

export const metadata = projectMetadata("ML Experiment Tracker", "CLI-based experiment tracking for structured run logging, reproducibility, and metric comparison.", "/projects/tracker");

export default function TrackerPage() {
  return <CaseStudyShell identifier="PROJECT 08 · EXPERIMENT TRACKING" title="ML Experiment Tracker" updated="May 2026" introduction="Built a CLI-based experiment tracking system for reproducible ML workflows, structured run logging, metric comparison, and evaluation across experiments." links={<a href="https://github.com/OmprakashSahani/ML-Experiment-Tracker" target="_blank" rel="noopener noreferrer">View Repository →</a>} showBackLink={false} tabs={[
    { id: "overview", label: "Overview", content: <div><PanelCard title="Problem"><p>As experiment counts grow, unstructured records make it difficult to reproduce results, compare configurations, and select the strongest run.</p></PanelCard><section className="atlas-technical-highlights" aria-labelledby="tracker-technical-highlights-title"><h2 id="tracker-technical-highlights-title" className="text-lg font-semibold">Technical Highlights</h2><p className="atlas-technology-list">Python · CLI · JSON Storage · PyTest · CI/CD</p><ul><li>Timestamped, reproducible experiment runs</li><li>Structured metric logging and comparison</li><li>CLI-driven experimentation workflow</li></ul></section><Link href="/projects" className="case-study-back atlas-overview-back">← Back to Selected Projects</Link></div> },
    { id: "design", label: "System Design", content: <PanelCard title="System Design"><ul><li>CLI interface for experiment management</li><li>Local JSON storage for runs and metadata</li><li>Timestamped run creation for reproducibility</li><li>Structured metric logging and comparison</li></ul></PanelCard> },
    { id: "workflow", label: "Workflow", content: <PanelCard title="Workflow"><p>Create Run → Record Configuration → Log Metrics → Persist Results → Compare Runs → Select Best Result</p></PanelCard> },
    { id: "results", label: "Results", content: <div><div className="case-panel-grid atlas-natural-grid"><PanelCard title="Results and Insights"><ul><li>Enabled reproducible tracking through structured JSON storage.</li><li>Simplified model-performance comparison across runs.</li><li>Exposed accuracy and loss differences between baseline and tuned runs.</li><li>Improved workflow clarity through CLI interaction.</li></ul></PanelCard><PanelCard title="Example Output"><pre>{`- baseline | accuracy=0.95, loss=0.42
- tuned    | accuracy=0.97, loss=0.36`}</pre></PanelCard></div><div className="mt-4"><PanelCard title="Takeaway"><p>Effective ML experimentation requires structured tracking, reproducible runs, and reliable metric comparison across configurations.</p></PanelCard></div></div> },
  ]} />;
}
