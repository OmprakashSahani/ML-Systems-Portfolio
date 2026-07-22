"use client";

import { KeyboardEvent, ReactNode, useId, useRef, useState } from "react";

export type CaseStudyTab = { id: string; label: string; content: ReactNode };

export default function CaseStudyTabs({ tabs }: { tabs: CaseStudyTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const baseId = useId().replace(/:/g, "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectByIndex = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActiveId(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") { event.preventDefault(); selectByIndex(index + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); selectByIndex(index - 1); }
    if (event.key === "Home") { event.preventDefault(); selectByIndex(0); }
    if (event.key === "End") { event.preventDefault(); selectByIndex(tabs.length - 1); }
  };

  return (
    <div className="case-study-tabs">
      <noscript><style>{`.case-study-panel[hidden] { display: block; }`}</style></noscript>
      <div role="tablist" aria-label="Case study sections" className="case-study-tablist">
        {tabs.map((tab, index) => {
          const selected = activeId === tab.id;
          return (
            <button key={tab.id} ref={(node) => { tabRefs.current[index] = node; }} id={`${baseId}-tab-${tab.id}`} type="button" role="tab" aria-selected={selected} aria-controls={`${baseId}-panel-${tab.id}`} tabIndex={selected ? 0 : -1} className="case-study-tab" onClick={() => setActiveId(tab.id)} onKeyDown={(event) => onKeyDown(event, index)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div key={tab.id} id={`${baseId}-panel-${tab.id}`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tab.id}`} tabIndex={0} hidden={activeId !== tab.id} className="case-study-panel">
          {tab.content}
        </div>
      ))}
    </div>
  );
}
