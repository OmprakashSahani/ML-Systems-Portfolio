"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "@/app/journey/journey.module.css";

type StoryStatus = "idle" | "running" | "paused" | "complete";
const durations = [8000, 8000, 9000, 11000, 9000, 9000];
const feeds = [
  ["identity: Omprakash Sahani", "focus: ML systems + software engineering", "systems: distributed and performance-aware", "principle: understand beneath the interface", "building from first principles", "workspace: ready", "next chapter: education"],
  ["loading academic timeline", "diploma: computer engineering", "foundation: programming + computer systems", "btech: computer science and engineering", "academic progression: complete", "next chapter: engineering foundation"],
  ["loading optimization model", "forward pass: ŷ = f(x; θ)", "loss computed: L(θ)", "gradient evaluated: ∇θ L(θ)", "worker gradients synchronized", "parameter update applied", "benchmark and reproducibility checks active"],
  ["indexing engineering systems", "connecting project architecture", "validating benchmarks and evidence", "project map: active", "six systems: linked"],
  ["loading programming toolchain", "mapping backend and systems capabilities", "checking ML infrastructure", "evaluation stack: ready", "engineering toolkit: connected"],
  ["reliable infrastructure", "performance-aware software", "distributed systems", "next chapter: in progress"],
];
const projects = [
  ["Atlas AI", "Training, inference, observability", "/projects/atlas-ai"],
  ["LeRobot State Atlas", "Robotics-data analysis and 3D coverage", "/projects/lerobot-state-atlas"],
  ["SearchEval Lab", "Retrieval evaluation and regression analysis", "/projects/searcheval-lab"],
  ["Benchmark Guardian", "Performance regression detection", "/projects/benchmark-guardian"],
  ["Distributed Training Profiler", "Communication, memory, and scaling analysis", "/projects/profiler"],
  ["Autograd Engine", "Reverse-mode automatic differentiation", "/projects/autograd"],
];
const skills = [
  ["Programming", "Python", "Java", "C", "C++", "SQL", "R"],
  ["Systems", "Distributed Systems", "System Design", "Backend Systems", "APIs", "Testing", "Automation"],
  ["ML Infrastructure", "Distributed Training", "Autograd", "Transformer Systems", "Inference Workflows", "Experiment Tracking", "Reproducibility"],
  ["Performance and Evaluation", "Benchmarking", "Profiling", "Observability", "Regression Detection", "Memory Analysis", "Search Evaluation"],
];

function Progress({ scene }: { scene: number }) {
  return <div className={styles.progress} aria-hidden="true"><span>{String(scene).padStart(2, "0")} / 06</span><div>{[1,2,3,4,5,6].map((n) => <i key={n} data-on={n <= scene} />)}</div></div>;
}

function Terminal({ history, typing, scene }: { history: string[]; typing: string; scene: number }) {
  return <div className={styles.terminal} aria-hidden="true"><div className={styles.terminalHead}><span>TERMINAL</span><b>CHAPTER {String(scene).padStart(2, "0")}</b></div><div className={styles.terminalBody}>{history.map((line, i) => <p key={`${line}-${i}`}><span>&gt;</span> {line}</p>)}{typing && <p><span>&gt;</span> {typing}<i /></p>}</div></div>;
}

function Laptop({ history, typing }: { history: string[]; typing: string }) {
  return <div className={styles.notebook} aria-hidden="true"><div className={styles.display}><div className={styles.displayCamera}/><div className={styles.laptopBar}><i/><i/><i/><span>story.editor / identity.systems</span><b>SCENE 01 · WRITING</b></div><div className={styles.displayScreen}><Terminal history={history} typing={typing} scene={1}/></div><div className={styles.displayLip}/></div><div className={styles.notebookHinge}><i/><i/></div><div className={styles.notebookBase}><span/></div></div>;
}

function Panel({ scene, active, paused, children }: { scene: number; active: boolean; paused: boolean; children: ReactNode }) {
  return <div className={styles.visualPanel} data-active={active} data-paused={paused}><div className={styles.panelTop}><span>ENGINEERING STORY</span><span>SCENE {String(scene).padStart(2, "0")}</span></div><div className={styles.panelMain}>{children}</div><Progress scene={scene}/></div>;
}

function IdentityVisual({ active, paused, history, typing }: { active:boolean; paused:boolean; history:string[]; typing:string }) {
  return <Panel scene={1} active={active} paused={paused}><div className={styles.identityVisual}><div className={styles.profile}><Image src="/about/omprakash-sahani.png" alt="Portrait of Omprakash Sahani" width={1254} height={1254} sizes="(max-width: 767px) 180px, 210px" priority/><h3>Omprakash Sahani</h3><p>Computer science graduate</p><div><span>ML Systems</span><span>Software Engineering</span><span>Distributed Systems</span></div></div><div className={styles.profileConnector} aria-hidden="true"><i/><i/><i/></div><Laptop history={history} typing={typing}/></div></Panel>;
}

function EducationVisual({ active, paused, history, typing }: { active:boolean; paused:boolean; history:string[]; typing:string }) {
  return <Panel scene={2} active={active} paused={paused}><div className={styles.educationLayout} aria-hidden="true"><div className={styles.academicAnnotations}><span>ACADEMIC FOUNDATION</span><span>DEGREE PATH</span></div><div className={styles.academicIllustration}><svg viewBox="0 0 600 250" fill="none"><path className={styles.annotation} d="M18 30h96m372 0h96M28 220h544M68 45v161m464-161v161"/><path className={styles.measurements} d="M80 56h14m-7-7v14M506 56h14m-7-7v14M80 194h14m-7-7v14M506 194h14m-7-7v14"/><path className={styles.buildingBack} d="M107 202V88h386v114M128 88V70h344v18M145 70 300 16 455 70M174 70l126-38 126 38M160 78h280"/><path className={styles.building} d="M116 202h368M143 184V94h314v90M168 103v68m52-68v68m160-68v68m52-68v68M259 184v-67h82v67M273 184v-53h54v53M140 184h320m-337 18h354m-335 14h316m-296 13h276"/><path className={styles.windows} d="M179 116h28v36h-28zm214 0h28v36h-28zM282 143h36m-18-26v67"/><path className={styles.cap} d="m472 39 51-20 52 20-52 20-51-20Zm20 17v28c21 15 42 15 63 0V56"/><rect x="488" y="108" width="80" height="59" rx="5"/><path d="M503 124h50m-50 14h40m-40 14h46"/><path className={styles.book} d="M25 127c30-11 54-6 75 9v57c-21-15-45-20-75-9v-57Zm75 9c21-15 45-20 75-9v57c-30-11-54-6-75 9v-57Z"/><circle cx="300" cy="51" r="3"/><path className={styles.researchMotif} d="M42 103h62m-52-12 12 12-12 12M496 194h62m-12-12 12 12-12 12"/></svg></div><div className={styles.qualifications}><article><span className={styles.checkpoint}>01</span><div><strong>Diploma</strong><time>2017–2020</time><p>Computer Engineering</p></div></article><span className={styles.qualificationArrow}>→</span><article><span className={styles.checkpoint}>02</span><div><strong>B.Tech</strong><time>2020–2023</time><p>Computer Science and Engineering</p></div></article></div><p className={styles.educationFlow}>Foundations <b>→</b> Diploma <b>→</b> B.Tech <b>→</b> Systems work</p></div><Terminal history={history} typing={typing} scene={2}/></Panel>;
}

function EngineeringVisual({ active, paused, history, typing }: { active:boolean; paused:boolean; history:string[]; typing:string }) {
  return <Panel scene={3} active={active} paused={paused}><p className="sr-only">The visual connects a model prediction to mean-squared-error loss, gradient computation, parameter updates, distributed gradient averaging, and reproducible benchmark evaluation.</p><div className={styles.mathVisual} aria-hidden="true"><div className={styles.mathLayer}><span className={styles.layerName}>LEARNING MODEL</span><div className={styles.modelRelation}><b>x</b><i>→</i><strong>ŷ = f(x; θ)</strong><i>→</i><b>prediction</b></div></div><div className={`${styles.mathLayer} ${styles.optimization}`}><span className={styles.layerName}>OPTIMIZATION</span><div className={styles.lossEquation}>L(θ) = <span>1/n</span> Σᵢ₌₁ⁿ (yᵢ − ŷᵢ)²</div><i className={styles.mathArrow}>→</i><div className={styles.gradientEquation}>gₜ = ∇θ L(θₜ)</div><i className={styles.mathArrow}>→</i><div className={styles.updateEquation}>θₜ₊₁ = θₜ − ηgₜ</div></div><div className={`${styles.mathLayer} ${styles.distributed}`}><span className={styles.layerName}>DISTRIBUTED EVALUATION</span><div className={styles.workers}><span>worker 0 · g₀</span><span>worker 1 · g₁</span><span>worker N · gₙ</span></div><i className={styles.mergeArrow}>↓</i><strong>ḡ = (1/N) Σₖ₌₁ᴺ gₖ</strong><i className={styles.mathArrow}>→</i><b>shared update</b><i className={styles.mathArrow}>→</i><b>benchmark</b></div><div className={styles.annotations}><span>memory: measured</span><span>communication: profiled</span><span>latency: benchmarked</span><span>reproducibility: checked</span></div></div><Terminal history={history} typing={typing} scene={3}/></Panel>;
}

function ProjectsVisual({ active, paused, history, typing }: { active:boolean; paused:boolean; history:string[]; typing:string }) {
  const nodes=[["Atlas AI",16,23],["LeRobot",16,69],["SearchEval",50,13],["Benchmark",84,23],["Profiler",84,69],["Autograd",50,82]];
  return <Panel scene={4} active={active} paused={paused}><div className={styles.projectVisual} aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">{nodes.map(([,x,y],i)=><g key={i}><path className={styles.projectLine} style={{animationDelay:`${i*90}ms`}} d={`M50 50L${x} ${y}`}/><rect x={Number(x)-10} y={Number(y)-6} width="20" height="12" rx="2"/></g>)}<circle cx="50" cy="50" r="11"/></svg>{nodes.map(([label,x,y])=><span key={String(label)} className={styles.projectNodeLabel} style={{"--node-x":`${x}%`,"--node-y":`${y}%`} as CSSProperties}>{label}</span>)}<span className={`${styles.projectNodeLabel} ${styles.centralProjectLabel}`}>Engineering<br/>Systems</span></div><Terminal history={history} typing={typing} scene={4}/></Panel>;
}

function SkillsVisual({ active, paused, history, typing }: { active:boolean; paused:boolean; history:string[]; typing:string }) {
  return <Panel scene={5} active={active} paused={paused}><div className={styles.capabilityVisual} aria-hidden="true"><div className={styles.toolkit}>Engineering<br/>Toolkit</div>{[["01","Programming","</>"],["02","Systems","●—●"],["03","ML Infrastructure","▤"],["04","Performance + Evaluation","⌁"]].map((z,i)=><div className={styles.zone} data-zone={i+1} key={z[1]}><span>{z[0]}</span><strong>{z[2]}</strong><b>{z[1]}</b></div>)}<svg viewBox="0 0 560 260" fill="none"><path d="M280 130 130 62M280 130 430 62M280 130 130 198M280 130 430 198"/></svg></div><Terminal history={history} typing={typing} scene={5}/></Panel>;
}

function Chapter({ scene, active, paused, chapterRef, narrative, visual }: { scene:number; active:boolean; paused:boolean; chapterRef:(node:HTMLElement|null)=>void; narrative:ReactNode; visual:(active:boolean,paused:boolean)=>ReactNode }) {
  return <section ref={chapterRef} tabIndex={-1} data-journey-scene={scene} className={`${styles.chapter} ${active?styles.active:""}`}><div className={styles.chapterGrid}><div className={styles.narrative}>{narrative}</div>{visual(active,paused)}</div></section>;
}

export default function EngineeringJourney() {
  const [activeScene,setActiveScene]=useState(1);
  const [status,setStatus]=useState<StoryStatus>("idle");
  const [reducedMotion,setReducedMotion]=useState(false);
  const [history,setHistory]=useState<string[]>([]);
  const [typing,setTyping]=useState("");
  const [terminalScene,setTerminalScene]=useState(1);
  const [reset,setReset]=useState(0);
  const refs=useRef<(HTMLElement|null)[]>([]);
  const overviewRef=useRef<HTMLElement>(null);
  const cursor=useRef({key:"",line:0,char:0});
  const typingGeneration=useRef(0);
  const programmatic=useRef(false);
  const hiddenRunning=useRef(false);
  const paused=status==="paused"||reducedMotion;

  const pause=useCallback(()=>setStatus(s=>s==="running"?"paused":s),[]);
  const scrollTo=useCallback((scene:number,focus=false)=>{
    programmatic.current=true;
    const target=refs.current[scene-1];
    target?.scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"center"});
    if(focus) target?.focus({preventScroll:true});
    window.setTimeout(()=>{programmatic.current=false;},reducedMotion?0:900);
  },[reducedMotion]);
  const skip=useCallback(()=>{
    typingGeneration.current+=1; setStatus("complete"); setActiveScene(6); setTerminalScene(6); setHistory([]); setTyping(""); programmatic.current=true;
    overviewRef.current?.scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"center"});
    overviewRef.current?.focus({preventScroll:true});
    window.setTimeout(()=>{programmatic.current=false;},reducedMotion?0:900);
  },[reducedMotion]);
  const start=()=>{ if(reducedMotion){scrollTo(1,true);return;} typingGeneration.current+=1;setStatus("running");setActiveScene(1);setTerminalScene(1);setHistory([]);setTyping("");setReset(v=>v+1);scrollTo(1,true); };
  const restart=()=>{typingGeneration.current+=1;setActiveScene(1);setTerminalScene(1);setHistory([]);setTyping("");setReset(v=>v+1);setStatus(reducedMotion?"idle":"running");scrollTo(1,true);};

  useEffect(()=>{const media=matchMedia("(prefers-reduced-motion: reduce)");const update=()=>{setReducedMotion(media.matches);if(media.matches)setStatus("idle");};update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update);},[]);
  useEffect(()=>{const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveScene(Number((visible.target as HTMLElement).dataset.journeyScene));},{rootMargin:"-20% 0px -30% 0px",threshold:[.15,.4,.65]});refs.current.forEach(r=>r&&observer.observe(r));return()=>observer.disconnect();},[]);
  useEffect(()=>{if(status!=="running"||reducedMotion)return;const timer=window.setTimeout(()=>{if(activeScene<6){const next=activeScene+1;setActiveScene(next);scrollTo(next);}else skip();},durations[activeScene-1]??0);return()=>clearTimeout(timer);},[activeScene,reducedMotion,scrollTo,skip,status]);
  useEffect(()=>{const interrupt=(e:Event)=>{if(status!=="running")return;if(e instanceof KeyboardEvent&&!["ArrowDown","ArrowUp","PageDown","PageUp","Home","End"," ","Escape"].includes(e.key))return;pause();};window.addEventListener("wheel",interrupt,{passive:true});window.addEventListener("touchstart",interrupt,{passive:true});window.addEventListener("pointerdown",interrupt,{passive:true});window.addEventListener("keydown",interrupt);return()=>{window.removeEventListener("wheel",interrupt);window.removeEventListener("touchstart",interrupt);window.removeEventListener("pointerdown",interrupt);window.removeEventListener("keydown",interrupt);};},[pause,status]);
  useEffect(()=>{const visibility=()=>{if(document.hidden){hiddenRunning.current=status==="running";if(hiddenRunning.current)setStatus("paused");}else if(hiddenRunning.current&&!reducedMotion){hiddenRunning.current=false;setStatus("running");}};document.addEventListener("visibilitychange",visibility);return()=>document.removeEventListener("visibilitychange",visibility);},[reducedMotion,status]);
  useEffect(()=>{const scene=activeScene,lines=feeds[scene-1];typingGeneration.current+=1;const generation=typingGeneration.current;if(reducedMotion||status==="paused")return;let characterTimer:number|undefined,betweenLineTimer:number|undefined;const key=`${scene}-${reset}`;const fresh=cursor.current.key!==key;if(fresh)cursor.current={key,line:0,char:0};const valid=()=>typingGeneration.current===generation&&activeScene===scene;const type=()=>{if(!valid())return;const c=cursor.current,line=lines[c.line];if(c.char<line.length){c.char++;setTyping(line.slice(0,c.char));characterTimer=window.setTimeout(type,48);}else{betweenLineTimer=window.setTimeout(()=>{if(!valid())return;setHistory(h=>[...h,line].slice(-7));setTyping("");c.line=(c.line+1)%lines.length;c.char=0;characterTimer=window.setTimeout(type,250);},1150);}};characterTimer=window.setTimeout(()=>{if(!valid())return;if(fresh){setTerminalScene(scene);setHistory([]);setTyping("");}type();},fresh?80:120);return()=>{typingGeneration.current+=1;if(characterTimer!==undefined)window.clearTimeout(characterTimer);if(betweenLineTimer!==undefined)window.clearTimeout(betweenLineTimer);};},[activeScene,reducedMotion,reset,status]);
  const terminalHistory=reducedMotion?feeds[activeScene-1]:terminalScene===activeScene?history:[];
  const terminalTyping=reducedMotion?"":terminalScene===activeScene?typing:"";
  const chapter=(scene:number,label:string,heading:string,content:ReactNode)=><><p className={styles.sceneLabel}>{label}</p><h2>{heading}</h2>{content}</>;

  return <div className={styles.journey}>
    <section className={styles.intro} aria-labelledby="journey-heading"><p className={styles.eyebrow}>INTERACTIVE STORY</p><h1 id="journey-heading">Engineering Story</h1><p className={styles.lede}>A guided visual story of who I am, where I started, what I studied, the systems I have built, and the kind of engineering work I want to pursue.</p><p className={styles.handwritten}>Learning, building, measuring, and moving forward.</p><p className={styles.support}>Scroll normally, or start the guided story and let each chapter unfold automatically.</p><div className={styles.controls} aria-label="Guided story controls">{status==="idle"?<button onClick={start}>Start Story</button>:<>{status==="running"?<button onClick={pause}>Pause</button>:status==="paused"?<button onClick={()=>setStatus("running")} disabled={reducedMotion}>Resume</button>:null}<button onClick={restart}>Restart</button></>}<button onClick={skip}>Skip to Overview</button></div>{reducedMotion&&<p className={styles.motionNote}>Guided movement is disabled by your reduced-motion preference.</p>}</section>
    <div className={styles.chapters} onClick={pause}>
      <Chapter scene={1} active={activeScene===1} paused={paused} chapterRef={n=>{refs.current[0]=n;}} narrative={chapter(1,"01 · Who I Am","The person behind the systems",<><p>I’m Omprakash Sahani, a computer science graduate focused on ML systems, software engineering, and distributed systems. I enjoy understanding how systems behave beneath the interface and building tools that make them easier to inspect, evaluate, and improve.</p><p className={styles.callout}>Curiosity led me from computer engineering fundamentals to building complete systems-oriented projects from first principles.</p><div className={styles.tags}><span>ML Systems</span><span>Software Engineering</span><span>Distributed Systems</span></div></>)} visual={(a,p)=><IdentityVisual active={a} paused={p} history={a?terminalHistory:feeds[0].slice(0,3)} typing={a?terminalTyping:""}/>}/>
      <Chapter scene={2} active={activeScene===2} paused={paused} chapterRef={n=>{refs.current[1]=n;}} narrative={chapter(2,"02 · Education","From computer engineering to computer science",<div className={styles.timeline}><section><time>2017–2020</time><h3>Diploma in Computer Engineering</h3><p>Maharashtra State Board of Technical Education</p><p>First Class</p></section><section><time>2020–2023</time><h3>Bachelor of Technology in Computer Science and Engineering</h3><p>Sanjay Ghodawat University</p><p>CGPA: 8.40/10</p><p>First Class with Distinction</p></section></div>)} visual={(a,p)=><EducationVisual active={a} paused={p} history={a?terminalHistory:feeds[1].slice(0,3)} typing={a?terminalTyping:""}/>}/>
      <Chapter scene={3} active={activeScene===3} paused={paused} chapterRef={n=>{refs.current[2]=n;}} narrative={chapter(3,"03 · Engineering Foundation","Learning by building and measuring",<><p className={styles.period}>2024 — Present</p><p>Since 2024, I have been designing and building independent projects across ML systems, distributed training, software engineering, performance analysis, benchmarking, search evaluation, reproducibility, and robotics-data systems.</p><p className={styles.loop}>build → measure → debug → improve</p></>)} visual={(a,p)=><EngineeringVisual active={a} paused={p} history={a?terminalHistory:feeds[2].slice(0,3)} typing={a?terminalTyping:""}/>}/>
      <Chapter scene={4} active={activeScene===4} paused={paused} chapterRef={n=>{refs.current[3]=n;}} narrative={chapter(4,"04 · Projects","Systems I have built",<ul className={styles.projects}>{projects.map(([name,detail,href])=><li key={name}><Link href={href}><strong>{name}</strong><span>{detail}</span></Link></li>)}</ul>)} visual={(a,p)=><ProjectsVisual active={a} paused={p} history={a?terminalHistory:feeds[3].slice(0,3)} typing={a?terminalTyping:""}/>}/>
      <Chapter scene={5} active={activeScene===5} paused={paused} chapterRef={n=>{refs.current[4]=n;}} narrative={chapter(5,"05 · Skills","The tools behind the work",<div className={styles.skills}>{skills.map(([name,...items])=><section key={name}><h3>{name}</h3><ul>{items.map(i=><li key={i}>{i}</li>)}</ul></section>)}</div>)} visual={(a,p)=><SkillsVisual active={a} paused={p} history={a?terminalHistory:feeds[4].slice(0,3)} typing={a?terminalTyping:""}/>}/>
      <section ref={n=>{refs.current[5]=n;}} tabIndex={-1} data-journey-scene="6" className={`${styles.chapter} ${activeScene===6?styles.active:""}`}><div className={`${styles.chapterGrid} ${styles.finalGrid}`}><div className={`${styles.narrative} ${styles.direction}`}>{chapter(6,"06 · Direction","Where I am heading",<><p>Today, I’m continuing to build systems-oriented projects while preparing for software engineering and ML systems roles. I’m especially interested in reliable infrastructure, performance-aware software, distributed systems, and tools that make complex ML workflows easier to understand.</p><p className={styles.roleLine}>ML Systems · Software Engineering · Distributed Systems</p><svg viewBox="0 0 480 105" fill="none" aria-hidden="true"><path d="M20 20c90 0 95 32 190 32M20 52h190M20 84c90 0 95-32 190-32M210 52h240m-16-14 16 14-16 14"/><circle cx="210" cy="52" r="9"/></svg></>)}</div><section id="journey-overview" ref={overviewRef} tabIndex={-1} className={styles.overview} aria-labelledby="overview-heading"><Progress scene={6}/><p className={styles.eyebrow}>FINAL OVERVIEW</p><h2 id="overview-heading">Explore the work</h2><p>The animation is the story layer. The complete technical details, architecture decisions, validation evidence, and source code are available in the project case studies.</p><div className={styles.actions}><Link href="/projects">View Projects</Link><Link href="/about">About Me</Link><a href="/Omprakash_Sahani_Resume.pdf" download="Omprakash_Sahani_Resume.pdf">Download Resume</a><a href="https://github.com/OmprakashSahani" target="_blank" rel="noopener noreferrer">View GitHub</a></div><Terminal history={activeScene===6?terminalHistory:feeds[5].slice(0,3)} typing={activeScene===6?terminalTyping:""} scene={6}/></section></div></section>
    </div>
  </div>;
}
