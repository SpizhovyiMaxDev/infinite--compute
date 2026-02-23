import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCanvasSequence(
  canvas: HTMLCanvasElement,
  section: HTMLElement,
  totalFrames = 226,
) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const images: HTMLImageElement[] = [];
  const frameState = { frame: 0 };

  // Preload frames
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
    images.push(img);
  }

  const render = () => {
    const img = images[Math.floor(frameState.frame)];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.naturalWidth / img.naturalHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgAspect;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const updateCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  };

  updateCanvasSize();

  const handleResize = () => updateCanvasSize();
  window.addEventListener("resize", handleResize);

  images[0].onload = () => {
    render();

    gsap.to(frameState, {
      frame: totalFrames - 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      onUpdate: render,
    });
  };

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}
