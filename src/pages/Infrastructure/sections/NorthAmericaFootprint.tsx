import { useState } from "react";
import { FootprintItem } from "../../../ui/FootPrintItem";

function NorthAmericaFootprint() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-32">
      <div className="px-4 sm:px-16">
        <h2 className="text-[clamp(1.8rem,8vw,12.2rem)] leading-[1.1] slide-up-heading text-slate-950 mb-160">
          Our North American Footprint
        </h2>

        <div className="mt-20 max-w-3xl">
          <p className="text-[clamp(1.8rem,1.3vw,6.2rem)] text-slate-900 max-w-200 mb-20">
            We build where power is abundant and expansion is guaranteed, not where real estate is
            cheap. Every site is selected for multi-hundred-megawatt scalability, proximity to
            generation infrastructure, and stable jurisdiction.
          </p>

          <FootprintItem
            title="Manitoba"
            status="Live"
            isOpen={openIndex === 0}
            onClick={() => toggle(0)}
          >
            1 GW target. 100% renewable. 30,000-acre wind farm on-site. Lowest-latency transatlantic
            path from North America.
          </FootprintItem>

          <FootprintItem
            title="Newfoundland"
            status="Under Development"
            isOpen={openIndex === 1}
            onClick={() => toggle(1)}
          >
            Gateway to Europe via Greenland Connect subsea cable. Massive renewable surplus
            capacity. Multi-hundred-megawatt scalability.
          </FootprintItem>

          <FootprintItem
            title="Texas"
            status="Under Development"
            isOpen={openIndex === 2}
            onClick={() => toggle(2)}
          >
            Direct interconnection with ERCOT grid. Scalable land footprint. Optimized cooling
            efficiency and power economics.
          </FootprintItem>
        </div>
      </div>
    </section>
  );
}

export default NorthAmericaFootprint;
