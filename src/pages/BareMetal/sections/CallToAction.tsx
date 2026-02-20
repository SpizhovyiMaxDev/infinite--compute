function CallToAction() {
  return (
    <section aria-labelledby="cta-heading">
      <p aria-label="Section label" data-anim="cta-label">
        ■ Get Started
      </p>

      <h2 id="cta-heading" data-anim="cta-heading">
        The infrastructure layer for the intelligence era.
      </h2>

      <p data-anim="cta-body">
        Deploy bare metal GPU clusters at gigawatt scale. No queue. No noisy
        neighbours. Just compute.
      </p>

      <nav aria-label="Call to action">
        <a href="#" data-anim="cta-btn">
          Get Started
        </a>
        <a href="#" data-anim="cta-btn">
          Contact Us
        </a>
      </nav>
    </section>
  );
}

export default CallToAction;
