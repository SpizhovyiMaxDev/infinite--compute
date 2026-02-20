function TrustedBySection() {
  return (
    <section aria-labelledby="trusted-heading">
      {/* Eyebrow */}
      <p aria-label="Section label">
        ■ Control
      </p>

      {/* Heading */}
      <h2 id="trusted-heading" data-anim="headline">
        Trusted by AI-first companies deploying models at scale.
      </h2>

      {/* Body */}
      <p data-anim="subtext">
        From 100-GPU prototypes to 100,000-GPU superclusters, our platform
        scales with your ambition.
      </p>

      {/* Testimonial card */}
      <figure data-anim="card">
        {/* Company logo */}
        <img
          src=""
          alt="Cologix"
          width={120}
          height={40}
          loading="lazy"
        />

        {/* Quote */}
        <blockquote>
          <p>
            Infinite Compute gives us the density and reliability we need to
            run production AI workloads without compromise.
          </p>
        </blockquote>

        {/* Attribution */}
        <figcaption>
          <img
            src=""
            alt="Sean Maskell avatar"
            width={56}
            height={56}
            loading="lazy"
          />
          <div>
            <span>Sean Maskell</span>
            <span>
              VP of Engineering,{" "}
              <a
                href="https://www.cologix.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cologix
              </a>
            </span>
          </div>
        </figcaption>

        {/* Navigation */}
        <button type="button" aria-label="View next testimonial">
          Next
        </button>
      </figure>

      {/* Compliance certifications */}
      <ul role="list" aria-label="Compliance certifications">
        <li>
          <article>
            <h3>SOC2 TYPE 2</h3>
            <p>
              Independently audited security controls you can build on.
            </p>
          </article>
        </li>
        <li>
          <article>
            <h3>HIPAA Compliant</h3>
            <p>
              Healthcare-grade data protection for sensitive workloads.
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default TrustedBySection;
