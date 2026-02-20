function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="relative bg-hero-gradient text-textOnSurface px-4 sm:px-16 py-40 text-center overflow-hidden">
      <p aria-label="Section label" data-anim="cta-label" className="section-label justify-center flex items-center gap-2 mb-6">
        ■ Get Started
      </p>

      <h2 id="cta-heading" data-anim="cta-heading" className="font-sans font-medium text-display-xl tracking-tight text-textOnSurface max-w-3xl mx-auto mb-6">
        The infrastructure layer for the intelligence era.
      </h2>

      <p data-anim="cta-body" className="text-body-large text-textOnSurfaceSecondary max-w-xl mx-auto mb-12">
        Deploy bare metal GPU clusters at gigawatt scale. No queue. No noisy
        neighbours. Just compute.
      </p>

      <nav aria-label="Call to action" className="flex flex-wrap justify-center gap-4">
        <a href="#" data-anim="cta-btn" className="btn-primary">
          Get Started
        </a>
        <a href="#" data-anim="cta-btn" className="btn-secondary">
          Contact Us
        </a>
      </nav>
    </section>
  );
}

export default CallToAction;
