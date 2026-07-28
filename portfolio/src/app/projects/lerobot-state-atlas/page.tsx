import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { PanelCard } from "@/components/CaseStudyShell";

const description =
  "Robotics-data analysis system for reproducible dual-arm workspace coverage, trajectory playback, and interactive three-dimensional diagnostics from LeRobot state trajectories.";
const canonicalUrl =
  "https://ml-systems-portfolio.vercel.app/projects/lerobot-state-atlas";
const repositoryUrl =
  "https://github.com/OmprakashSahani/lerobot-state-atlas";
const liveDemoUrl = "https://lerobot-state-atlas.vercel.app/";

export const metadata: Metadata = {
  title: "LeRobot State Atlas",
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "LeRobot State Atlas",
    description,
    url: canonicalUrl,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "LeRobot State Atlas",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "LeRobot State Atlas",
  description,
  codeRepository: repositoryUrl,
  url: liveDemoUrl,
  author: { "@type": "Person", name: "Omprakash Sahani" },
  programmingLanguage: ["Python", "TypeScript"],
};

export default function LeRobotStateAtlasPage() {
  return (
    <CaseStudyShell
      identifier="PROJECT 02 · ROBOTICS DATA SYSTEMS"
      title="LeRobot State Atlas"
      updated="July 2026"
      introduction="A robotics-data analysis system that transforms LeRobot state trajectories into reproducible dual-arm workspace coverage, trajectory playback, and interactive three-dimensional diagnostics."
      links={
        <>
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            View Repository →
          </a>
        </>
      }
      structuredData={jsonLd}
      showBackLink={false}
      tabs={[
        {
          id: "overview",
          label: "Overview",
          content: (
            <div>
              <PanelCard title="Problem">
                <p>
                  Robot-state datasets are difficult to assess from joint values
                  alone. LeRobot State Atlas converts those states into left and
                  right tool trajectories and spatial coverage, making episode
                  behavior, repeatedly visited regions, coverage gaps, and dataset
                  quality easier to inspect. Its metadata and state-analysis
                  interfaces also expose the evidence needed to investigate
                  consistency around reset or resting behavior.
                </p>
              </PanelCard>
              <section
                className="atlas-technical-highlights"
                aria-labelledby="lerobot-technical-highlights-title"
              >
                <h2
                  id="lerobot-technical-highlights-title"
                  className="text-lg font-semibold"
                >
                  Technical Highlights
                </h2>
                <p className="atlas-technology-list">
                  LeRobot · Python · PyTorch · URDF · Plotly · Next.js · React Three Fiber
                </p>
                <ul>
                  <li>URDF-based forward kinematics for both tool trajectories</li>
                  <li>Configurable voxels with exact visit and episode counts</li>
                  <li>Interactive playback, radius queries, and deterministic exports</li>
                </ul>
              </section>
              <Link
                href="/projects"
                className="case-study-back atlas-overview-back"
              >
                ← Back to Selected Projects
              </Link>
            </div>
          ),
        },
        {
          id: "data-pipeline",
          label: "Data Pipeline",
          content: (
            <div className="case-panel-grid atlas-natural-grid">
              <PanelCard title="Processing Flow">
                <ol className="grid list-decimal gap-2 pl-5">
                  <li>Inspect LeRobot metadata, including state components and native FPS.</li>
                  <li>Resolve the requested dataset revision to a full immutable commit SHA.</li>
                  <li>Load selected episode states with the resolved revision pinned.</li>
                  <li>Load the TRLC-DK1 follower URDF and map state components to joints.</li>
                  <li>Compute left and right tool positions through forward kinematics.</li>
                  <li>Apply configurable rigid arm-base transforms for shared-world views.</li>
                  <li>Voxelize both arms and retain raw visits plus distinct episode identities.</li>
                  <li>Export deterministic, checksummed browser-data schema v1 bundles.</li>
                  <li>Load manifest and coverage first; request trajectories only for playback.</li>
                </ol>
              </PanelCard>
              <PanelCard title="Coordinate Frames">
                <p>
                  Static workspace plots keep separate left and right panels in
                  their local <code>base_link</code> frames. Interactive and
                  aggregated views transform both arms into a shared world frame
                  before voxelization.
                </p>
                <p className="mt-3">
                  The default 0.8 m lateral arm spacing is configurable and
                  provisional. It is not calibrated physical geometry.
                </p>
              </PanelCard>
            </div>
          ),
        },
        {
          id: "state-space-analysis",
          label: "State-Space Analysis",
          content: (
            <div className="case-panel-grid atlas-natural-grid">
              <PanelCard title="Analysis Capabilities">
                <ul>
                  <li>Left and right tool trajectories with episode boundaries preserved</li>
                  <li>Arm-specific occupied voxels and multi-episode aggregation</li>
                  <li>Raw frame-visit counts, log-scaled colours, and distinct episode counts</li>
                  <li>Coverage comparison through per-episode trajectory colours and counts</li>
                  <li>Exact Euclidean-radius queries around selected voxel centres</li>
                  <li>Bounded episode batches that retain aggregates instead of all trajectories</li>
                </ul>
              </PanelCard>
              <PanelCard title="Pinned Demo Validation Example">
                <dl className="case-metrics">
                  <div className="case-metric"><dt>Episodes</dt><dd>10</dd></div>
                  <div className="case-metric"><dt>Dataset frames</dt><dd>5,124</dd></div>
                  <div className="case-metric"><dt>Tool-point visits</dt><dd>10,248</dd></div>
                  <div className="case-metric"><dt>Arm voxel entries</dt><dd>1,224</dd></div>
                  <div className="case-metric"><dt>Voxel size</dt><dd>0.020 m</dd></div>
                  <div className="case-metric"><dt>Dataset FPS</dt><dd>50</dd></div>
                </dl>
                <p className="mt-3">
                  These are repository-bundled validation results for episodes
                  0–9 of <code>DreamMachines/actuator_unboxing_4h_diverse</code>,
                  not universal performance claims.
                </p>
              </PanelCard>
            </div>
          ),
        },
        {
          id: "visualization",
          label: "3D Visualization",
          content: (
            <section
              className="atlas-architecture-panel min-w-0 overflow-hidden"
              aria-labelledby="lerobot-visualization-title"
            >
              <h2
                id="lerobot-visualization-title"
                className="text-xl font-semibold"
              >
                3D Visualization
              </h2>
              <p>
                The statically deployed viewer renders left- and right-arm
                workspace coverage in a shared three-dimensional scene. Users can
                inspect raw visits, log-scaled visits, and distinct-episode
                coverage while controlling arm visibility, camera position,
                provisional arm spacing, trajectory playback, and voxel-radius
                queries.
              </p>
              <figure className="mt-6 min-w-0">
                <Image
                  src="/projects/lerobot-state-atlas/workspace-coverage.png"
                  alt="LeRobot State Atlas interactive viewer showing dual-arm voxelized workspace coverage and analysis controls"
                  width={1893}
                  height={881}
                  sizes="(min-width: 1280px) 1100px, calc(100vw - 4rem)"
                  className="block h-auto w-full max-w-full rounded-xl border border-[var(--border)]"
                />
                <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
                  LeRobot State Atlas viewer showing dual-arm voxelized workspace
                  coverage, analysis controls, dataset statistics, and provenance
                  for the bundled demo.
                </figcaption>
              </figure>
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-back mt-3"
              >
                Open Live Demo ↗
              </a>
            </section>
          ),
        },
        {
          id: "validation",
          label: "Validation",
          content: (
            <div className="case-panel-grid atlas-natural-grid">
              <PanelCard title="Automated Quality Gates">
                <ul>
                  <li>Python tests cover aggregation, schema, export, kinematics, transforms, CLI, coverage, and visualization.</li>
                  <li>Frontend tests cover bundle loading, accessibility content, playback, metrics, transforms, cache policy, spacing, and radius queries.</li>
                  <li>Browser-data validation checks JSON Schema structure, cross-file consistency, payload SHA-256 checksums, deterministic ordering, totals, CSR episode identities, and safe payload paths.</li>
                  <li>CI runs Ruff lint and format checks, frontend lint and TypeScript checks, a Next.js production build, whitespace checks, and generated-file policy checks.</li>
                </ul>
              </PanelCard>
              <PanelCard title="Repository Commands">
                <ul>
                  <li><code>uv run pytest</code></li>
                  <li><code>uv run ruff check .</code></li>
                  <li><code>uv run ruff format --check .</code></li>
                  <li><code>uv run lerobot-state-atlas validate-browser-data apps/web/public/atlas-data/demo-v1</code></li>
                  <li><code>npm run lint</code> · <code>npm run typecheck</code> · <code>npm test</code> · <code>npm run build</code></li>
                </ul>
              </PanelCard>
            </div>
          ),
        },
      ]}
    />
  );
}
