import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  category: string;
  heading: string;
  body: string;
  ctaHref: string;
  imageAlt: string;
}

const TABS: Tab[] = [
  {
    id: "cloud",
    label: "Cloud",
    category: "Infrastructure",
    heading: "Scalable cloud compute for AI workloads",
    body: "Deploy GPU clusters on demand with full network isolation and enterprise SLAs.",
    ctaHref: "#",
    imageAlt: "Cloud infrastructure diagram",
  },
  {
    id: "inference-api",
    label: "Inference API",
    category: "Developer Tools",
    heading: "Serve any model with a single API endpoint",
    body: "Unified inference layer across open and closed models with sub-100ms latency.",
    ctaHref: "#",
    imageAlt: "Inference API diagram",
  },
  {
    id: "access",
    label: "Access",
    category: "Platform",
    heading: "Enterprise access control and compliance built in",
    body: "Role-based access, audit logs, and SOC 2 compliance out of the box.",
    ctaHref: "#",
    imageAlt: "Access control diagram",
  },
];

function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section aria-labelledby="product-platform-heading" className="bg-surfacePrimaryDark text-textOnSurface px-4 sm:px-16 py-32">
      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <h2 id="product-platform-heading" data-anim="headline" className="font-sans font-medium text-display-xl tracking-tight text-textOnSurface mb-4">
          Your AI Cloud Platform Infrastructure Partner
        </h2>
        <p data-anim="subtext" className="text-body-large text-textOnSurfaceSecondary">
          Full control of your infrastructure and workflow.
        </p>
      </div>

      {/* Tab list */}
      <div role="tablist" aria-label="Product platform tabs" className="flex gap-0 border-b border-borderPrimary/20 mb-12">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === i}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-3 text-body-medium font-sans text-textOnSurfaceSecondary border-b-2 border-transparent hover:text-textOnSurface transition-colors -mb-px ${activeTab === i ? "border-surfaceAccent text-textOnSurface" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab panel */}
      {TABS.map((tab, i) =>
        activeTab === i ? (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            data-anim="panel"
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-borderPrimary/20"
          >
            {/* Image side */}
            <div className="relative bg-surfaceTertiaryDark">
              <img
                src=""
                alt={tab.imageAlt}
                width={760}
                height={520}
                loading="lazy"
                data-anim="panel-image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content side */}
            <div data-anim="panel-content" className="bg-surfaceQuaternaryDark p-8 sm:p-12 flex flex-col justify-between">
              <span className="section-label mb-2 block">{tab.category}</span>
              <h3 className="font-sans font-medium text-heading-h3 text-textOnSurface mb-4">{tab.heading}</h3>
              <p className="text-body-large text-textOnSurfaceSecondary mb-8">{tab.body}</p>

              {/* Partner logos */}
              <ul role="list" aria-label="Partner integrations" className="flex flex-wrap gap-4 mb-8">
                {Array.from({ length: 6 }).map((_, j) => (
                  <li key={j}>
                    <img
                      src=""
                      alt={`Partner logo ${j + 1}`}
                      width={80}
                      height={32}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              <div aria-label="Tab position" className="flex items-center gap-2 text-body-small text-textOnSurfaceSecondary mt-auto">
                <span aria-current="true">
                  {String(activeTab + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true">—</span>
                <span>{String(TABS.length).padStart(2, "0")}</span>
              </div>

              <a href={tab.ctaHref} data-anim="cta" className="btn-primary inline-block mt-6">
                Learn more
              </a>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
}

export default ProductTabs;
