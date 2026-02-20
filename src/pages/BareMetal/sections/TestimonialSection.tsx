import { useRef, useState } from "react";

function TestimonialSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - delta;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const TOTAL = 1;

  return (
    <section aria-labelledby="canada-heading">
      <h2 id="canada-heading" data-anim="headline">
        Built in Canada. For Canada. And Beyond.
      </h2>

      <p data-anim="subtext">
        Your data stays in Canada — compliant with PIPEDA and provincial
        privacy laws, with no cross-border transfer by default.
      </p>

      {/* Drag hint — decorative */}
      <p aria-hidden="true">Drag</p>

      {/* Scrollable testimonial track */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Customer testimonials — drag to browse"
        aria-live="polite"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          scrollSnapType: "x mandatory",
          overflowX: "auto",
          display: "flex",
        }}
      >
        <figure
          style={{ scrollSnapAlign: "start", flexShrink: 0 }}
          aria-label="Testimonial 1 of 1"
        >
          <blockquote>
            <p>
              Infinite Compute gives us the density and reliability we need to
              run production AI workloads without compromise.
            </p>
          </blockquote>
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
        </figure>
      </div>

      {/* Prev / Next controls */}
      <div>
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          aria-disabled={activeIndex === 0}
        >
          Prev
        </button>
        <span aria-live="polite" aria-atomic="true">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(TOTAL).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setActiveIndex((i) => Math.min(TOTAL - 1, i + 1))}
          aria-disabled={activeIndex === TOTAL - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
