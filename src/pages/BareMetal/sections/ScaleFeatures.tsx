interface Feature {
  id: string;
  tag: string;
  counter: string;
  total: string;
  heading: string;
  body: string;
  imageAlt: string;
  imageSrc: string;
  imageLeft: boolean;
}

const FEATURES: Feature[] = [
  {
    id: "pipeline",
    tag: "Scale",
    counter: "01",
    total: "03",
    heading: "Multi-Gigawatt Pipeline Across North America",
    body:
      "We've secured multi-gigawatt capacity across Canada and the United States, backed by renewable hydro, wind, and natural gas. Long-term power agreements and owned generation assets ensure we can deploy capital into AI infrastructure on predictable timelines.",
    imageAlt:
      "Data center hallway with server racks and green activity lights, reflective floor",
    imageSrc: "",
    imageLeft: true,
  },
  {
    id: "rowtie",
    tag: "Control",
    counter: "02",
    total: "03",
    heading: "Factory-Built, Field-Deployed in Weeks",
    body:
      "Traditional data centers take 18-24 months to build—our modular Rowtie systems deploy in 8-12 weeks. Each 40-foot module contains complete power and cooling.",
    imageAlt: "Brightly lit data center hallway with rows of server racks",
    imageSrc: "",
    imageLeft: false,
  },
  {
    id: "control",
    tag: "Control",
    counter: "03",
    total: "03",
    heading: "Vertically Integrated. Completely Controlled.",
    body:
      "We own power generation assets and develop our own facilities. Controlling the critical path from electricity to rack space means capacity scales on our timeline, costs stay predictable, and expansion decisions aren't constrained by third-party availability or pricing.",
    imageAlt:
      "Data center hallway with server racks and green activity lights",
    imageSrc: "",
    imageLeft: true,
  },
];

function ScaleFeatures() {
  return (
    <section aria-labelledby="scale-features-heading">
      <h2 id="scale-features-heading" className="sr-only">
        Infrastructure Scale and Control Features
      </h2>

      {FEATURES.map((feature) => (
        <article
          key={feature.id}
          aria-labelledby={`feature-heading-${feature.id}`}
          data-anim="feature"
        >
          {/* Image side */}
          <div style={{ order: feature.imageLeft ? 0 : 1 }}>
            <img
              src={feature.imageSrc}
              alt={feature.imageAlt}
              width={760}
              height={600}
              loading="lazy"
              data-anim="feature-image"
            />
            <p aria-label="Feature category" data-anim="feature-text">
              {feature.tag}
            </p>
          </div>

          {/* Content side */}
          <div style={{ order: feature.imageLeft ? 1 : 0 }}>
            <span aria-hidden="true">{/* decorative icon placeholder */}</span>
            <p data-anim="feature-text">
              <span aria-hidden="true">{feature.counter}</span>
              <span className="sr-only">
                Feature {feature.counter} of {feature.total}
              </span>
              <span aria-hidden="true"> / {feature.total}</span>
            </p>
            <h3
              id={`feature-heading-${feature.id}`}
              data-anim="feature-text"
            >
              {feature.heading}
            </h3>
            <p data-anim="feature-text">{feature.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ScaleFeatures;
