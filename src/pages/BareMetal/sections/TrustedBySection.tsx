function TrustedBySection() {
  return (
    <section aria-labelledby="trusted-heading" className="bg-surfacePage text-textHeadings px-4 sm:px-16 py-32">
      {/* Eyebrow */}
      <p aria-label="Section label" className="section-label mb-4">
        ■ Control
      </p>

      {/* Heading */}
      <h2 id="trusted-heading" data-anim="headline" className="font-sans font-medium text-display-xl tracking-tight text-textHeadings mb-6">
        Trusted by AI-first companies deploying models at scale.
      </h2>

      {/* Body */}
      <p data-anim="subtext" className="text-body-large text-textBody max-w-2xl mb-16">
        From 100-GPU prototypes to 100,000-GPU superclusters, our platform
        scales with your ambition.
      </p>

      {/* Testimonial card */}
      <figure data-anim="card" className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border border-borderPrimary mb-8">
        {/* Company logo */}
        <img
          src=""
          alt="Cologix"
          width={120}
          height={40}
          loading="lazy"
          className="mb-8"
        />

        {/* Quote */}
        <blockquote>
          <p className="font-sans text-heading-h4 text-textHeadings leading-snug mb-8">
            Infinite Compute gives us the density and reliability we need to
            run production AI workloads without compromise.
          </p>
        </blockquote>

        {/* Attribution */}
        <figcaption className="flex items-center gap-4">
          <img
            src=""
            alt="Sean Maskell avatar"
            width={56}
            height={56}
            loading="lazy"
            className="rounded-full"
          />
          <div>
            <span className="font-sans font-medium text-body-medium text-textHeadings block">Sean Maskell</span>
            <span className="text-body-small text-textOnSurfaceSecondary">
              VP of Engineering,{" "}
              <a
                href="https://www.cologix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textHeadings hover:text-surfaceAccent"
              >
                Cologix
              </a>
            </span>
          </div>
        </figcaption>

        {/* Navigation */}
        <button type="button" aria-label="View next testimonial" className="btn-secondary mt-8">
          Next
        </button>
      </figure>

      {/* Compliance certifications */}
      <ul role="list" aria-label="Compliance certifications" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <li>
          <article className="rounded-lg border border-borderPrimary p-8">
            <h3 className="font-sans font-medium text-heading-h4 text-textHeadings mb-2">SOC2 TYPE 2</h3>
            <p className="text-body-medium text-textBody">
              Independently audited security controls you can build on.
            </p>
          </article>
        </li>
        <li>
          <article className="rounded-lg border border-borderPrimary p-8">
            <h3 className="font-sans font-medium text-heading-h4 text-textHeadings mb-2">HIPAA Compliant</h3>
            <p className="text-body-medium text-textBody">
              Healthcare-grade data protection for sensitive workloads.
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default TrustedBySection;
