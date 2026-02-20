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
    <section aria-labelledby="any-model-heading">
      <div aria-label="Cost advantage: 25% lower total cost of ownership">
        <strong data-anim="count-up" data-value="25">
          25
        </strong>
        <span>%</span>
        <span>Lower TCO</span>
      </div>

      <h2 id="any-model-heading" data-anim="headline">
        Any model. Any agent.
      </h2>

      <p data-anim="subtext">
        Run any open or closed model on dedicated infrastructure —{" "}
        {MODELS.map((model, i) => (
          <span key={model.name}>
            <a href={model.href}>{model.name}</a>
            {i < MODELS.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      <a href="#" data-anim="cta">
        Learn More
      </a>

      <div
        role="img"
        aria-label="Platform radar visualization"
        data-anim="radar"
      />
    </section>
  );
}

export default AnyModelSection;
