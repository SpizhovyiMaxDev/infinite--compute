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
    <section aria-labelledby="product-platform-heading">
      {/* Intro */}
      <div>
        <h2 id="product-platform-heading" data-anim="headline">
          Your AI Cloud Platform Infrastructure Partner
        </h2>
        <p data-anim="subtext">
          Full control of your infrastructure and workflow.
        </p>
      </div>

      {/* Tab list */}
      <div role="tablist" aria-label="Product platform tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === i}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(i)}
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
          >
            {/* Image side */}
            <div>
              <img
                src=""
                alt={tab.imageAlt}
                width={760}
                height={520}
                loading="lazy"
                data-anim="panel-image"
              />
            </div>

            {/* Content side */}
            <div data-anim="panel-content">
              <span>{tab.category}</span>
              <h3>{tab.heading}</h3>
              <p>{tab.body}</p>

              {/* Partner logos */}
              <ul role="list" aria-label="Partner integrations">
                {Array.from({ length: 6 }).map((_, j) => (
                  <li key={j}>
                    <img
                      src=""
                      alt={`Partner logo ${j + 1}`}
                      width={80}
                      height={32}
                    />
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              <div aria-label="Tab position">
                <span aria-current="true">
                  {String(activeTab + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true">—</span>
                <span>{String(TABS.length).padStart(2, "0")}</span>
              </div>

              <a href={tab.ctaHref} data-anim="cta">
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
