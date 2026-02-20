interface ModelBadge {
  name: string;
  href: string;
}

const MODELS: ModelBadge[] = [
  { name: "OpenAI", href: "https://openai.com" },
  { name: "Llama", href: "https://llama.meta.com" },
  { name: "Mistral", href: "https://mistral.ai" },
  { name: "DeepSeek", href: "https://deepseek.com" },
];

function AnyModelSection() {
  return (
    <section aria-labelledby="any-model-heading" className="bg-surfacePrimaryDark text-textOnSurface px-4 sm:px-16 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div
            aria-label="Cost advantage: 25% lower total cost of ownership"
            className="inline-flex items-center gap-1 border border-borderAccent text-surfaceAccent text-body-small rounded-pill px-3 py-1 mb-6"
          >
            <strong data-anim="count-up" data-value="25" className="font-sans font-medium text-heading-h3 text-surfaceAccent">
              25
            </strong>
            <span>%</span>
            <span>Lower TCO</span>
          </div>

          <h2 id="any-model-heading" data-anim="headline" className="font-sans font-medium text-display-xl tracking-tight text-textOnSurface mb-6">
            Any model. Any agent.
          </h2>

          <p data-anim="subtext" className="text-body-large text-textOnSurfaceSecondary mb-8">
            Run any open or closed model on dedicated infrastructure —{" "}
            {MODELS.map((model, i) => (
              <span key={model.name}>
                <a href={model.href} className="text-textOnSurface underline underline-offset-2 hover:text-surfaceAccent transition-colors">
                  {model.name}
                </a>
                {i < MODELS.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          <a href="#" data-anim="cta" className="btn-primary inline-block">
            Learn More
          </a>
        </div>

        <div
          role="img"
          aria-label="Platform radar visualization"
          data-anim="radar"
          className="w-full aspect-square max-w-lg rounded-lg bg-surfaceTertiaryDark border border-borderPrimary/20"
        />
      </div>
    </section>
  );
}

export default AnyModelSection;
