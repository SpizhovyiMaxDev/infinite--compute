import { useState } from "react";
import { FootprintItem } from "../../../ui/FootPrintItem";

function NorthAmericaFootprint() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-surfacePage text-textHeadings py-32" aria-labelledby="footprint-heading">
      <p aria-label="Section label" className="section-label px-4 sm:px-16 mb-4">■ Testimonials</p>
      <h2 id="footprint-heading" className="font-sans font-medium text-display-xl tracking-tight text-textHeadings px-4 sm:px-16 mb-16">
        Our North American Footprint
      </h2>

      <div className="px-4 sm:px-16">
        <p className="text-body-large text-textBody max-w-2xl mb-12">
          We build where power is abundant and expansion is guaranteed, not where real estate is
          cheap. Every site is selected for multi-hundred-megawatt scalability, proximity to
          generation infrastructure, and stable jurisdiction.
        </p>

        <div className="border-t border-borderPrimary">
          <div className="border-t border-borderPrimary py-6 first:border-t-0">
          <FootprintItem
            title="Manitoba"
            status="Live"
            isOpen={openIndex === 0}
            onClick={() => toggle(0)}
          >
            1 GW target. 100% renewable. 30,000-acre wind farm on-site. Lowest-latency transatlantic
            path from North America.
          </FootprintItem>
          </div>
          <div className="border-t border-borderPrimary py-6">
          <FootprintItem
            title="Newfoundland"
            status="Under Development"
            isOpen={openIndex === 1}
            onClick={() => toggle(1)}
          >
            Gateway to Europe via Greenland Connect subsea cable. Massive renewable surplus
            capacity. Multi-hundred-megawatt scalability.
          </FootprintItem>
          </div>
          <div className="border-t border-borderPrimary py-6">
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
      </div>

      <aside aria-labelledby="global-stats-heading" className="bg-surfacePrimaryDark text-textOnSurface px-4 sm:px-16 py-16 mt-16">
        <h3 id="global-stats-heading" className="font-sans font-medium text-heading-h3 text-textOnSurface mb-8">
          Join millions of humans in 160 countries with us
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <dt className="text-body-small text-textOnSurfaceSecondary mb-1">Dollars Earned</dt>
            <dd data-anim="stat-value" data-value="1.5" className="font-sans font-medium text-heading-h2 text-surfaceAccent">$1.5 Gazzilion</dd>
          </div>
          <div>
            <dt className="text-body-small text-textOnSurfaceSecondary mb-1">Total transactions</dt>
            <dd data-anim="stat-value" data-value="890638541" className="font-sans font-medium text-heading-h2 text-surfaceAccent">890,638,541</dd>
          </div>
          <div>
            <dt className="text-body-small text-textOnSurfaceSecondary mb-1">States Served</dt>
            <dd data-anim="stat-value" data-value="160" className="font-sans font-medium text-heading-h2 text-surfaceAccent">160+</dd>
          </div>
        </dl>
        <nav aria-label="Footprint actions" className="flex flex-wrap gap-3">
          <a href="#" className="btn-primary inline-block">Learn More</a>
          <a href="#" className="btn-secondary inline-block">Explore Platform</a>
        </nav>
      </aside>
    </section>
  );
}

export default NorthAmericaFootprint;
