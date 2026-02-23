import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateInfrastructureHeroUI(selector: gsap.utils.SelectorFunc) {
  // Heading load animation
  const spans = selector(".heading-load span");
  gsap.from(spans, {
    yPercent: -120,
    autoAlpha: 0,
    duration: 2,
    ease: "power4.out",
  });

  // Cards
  const cards = selector(".card");
  gsap.from(cards, {
    yPercent: 120,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
  });

  // Buttons
  const btnContainer = selector(".btns-container");
  gsap.from(btnContainer, {
    yPercent: 120,
    autoAlpha: 0,
    duration: 2,
    ease: "power4.out",
  });

  // Slide-up headings
  selector(".slide-up-heading").forEach((el: Element) => {
    gsap.fromTo(
      el,
      {
        y: 80,
        autoAlpha: 0,
        scale: 0.98,
        filter: "blur(8px)",
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Stats blocks
  gsap.utils.toArray(".box").forEach((el, i) => {
    gsap.fromTo(
      el as HTMLElement,
      {
        y: 10,
        autoAlpha: 0,
        scale: 0.98,
        filter: "blur(6px)",
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
}

export function animateToggleHeight(element: HTMLElement, isOpen: boolean, duration = 0.4) {
  if (!element) return;

  if (isOpen) {
    gsap.to(element, {
      height: element.scrollHeight,
      opacity: 1,
      duration,
      ease: "power3.out",
    });
  } else {
    gsap.to(element, {
      height: 0,
      opacity: 0,
      duration,
      ease: "power3.inOut",
    });
  }
}
