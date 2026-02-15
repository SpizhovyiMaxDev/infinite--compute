import { ArrowRight } from "lucide-react";
import StatCard from "../../../ui/StatCard";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);


  useGSAP(
    () => {
      const selector = gsap.utils.selector(sectionRef);

      // Heading load animation
      const spans = selector(".heading-load span");
      gsap.from(spans, {
        yPercent: -120,
        autoAlpha: 0,
        duration: 2,
        ease: "power4.out",
      });

      // Cards Animation
      const cards = selector(".card");
      gsap.from(cards, {
        yPercent: 120,
        autoAlpha: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });

      // Buttons Animation
      const btnContainer = selector(".btns-container");
      gsap.from(btnContainer, {
        yPercent: 120,
        autoAlpha: 0,
        duration: 2,
        ease: "power4.out",
      });

      // Slide up heading animation
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

      // Stats blocks animation
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

      // Video scroll sync
      const video = videoRef.current;
      if (!video) return;
      
      let scrollTimeout: number;
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          video.play();
      
          clearTimeout(scrollTimeout);
          scrollTimeout = window.setTimeout(() => {
            video.pause();
          }, 120); // pause after scroll stops
        },
      });
      
    },
    { scope: sectionRef },
  );

  return (
    <section className="relative w-full text-white overflow-hidden bg-black" ref={sectionRef}>
      <div className="fixed inset-0 z-0">
      <video
  ref={videoRef}
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
  src="/Manitoba.mov"
/>  
        <div className="absolute z-5 inset-0 bg-blue-950/70" />
      </div>

      <div className="mx-auto px-4 sm:px-16 pb-32 relative z-10">
        <div className="min-h-screen mb-19 flex justify-end flex-col pt-25">
          <div className="mb-auto mt-10">
            <div className="mb-6 flex items-center gap-2 text-sm text-white">
              <span className="h-2 w-2 bg-green-400" />
              Bare Metal
            </div>
            <h1
              className="
              heading-load
              overflow-hidden
              font-semibold leading-[1.05]
              text-[clamp(2.5rem,6vw,5.5rem)]
              tracking-tight
              "
            >
              <span className="block overflow-hidden">
                <span className="block heading-line">Where Gigawatts</span>
              </span>

              <span className="block overflow-hidden">
                <span className="block heading-line">Become Intelligence</span>
              </span>
            </h1>

            <div className="btns-container mt-10 flex flex-wrap gap-4 mb-20">
              <button className="px-6 py-3 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition">
                Secondary
              </button>

              <button className="px-6 py-3 bg-green-500 text-black rounded-md hover:bg-green-400 transition flex items-center gap-2">
                Primary
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full pb-10 gap-8 sm:gap-20 items-start sm:items-end">
            <div className="card flex-1">
              <div className="h-2 w-2 bg-green-400 mb-3"></div>

              <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-medium text-zinc-200 tracking-tight">
                324+ km2
              </p>
              <p className="text-[clamp(0.80rem,1.2vw,1.1rem)] text-zinc-300">
                Space across the all North America
              </p>
            </div>

            <div className="flex-1 card">
              <div className="h-2 w-2 bg-green-400 mb-3"></div>

              <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-medium text-zinc-200 tracking-tight">
                324+ km2
              </p>
              <p className="text-[clamp(0.80rem,1.2vw,1.1rem)] text-zinc-300">
                Space across the all North America
              </p>
            </div>

            <div className="card w-full sm:flex-1 max-w-[280px] sm:max-w-none aspect-video bg-zinc-800 rounded-md border border-zinc-700" />
          </div>
        </div>

        <div className="h-full flex items-center  min-h-[70vh]">
          <h2 className="text-[clamp(1.8rem,5vw,7.2rem)] text-zinc-200 leading-[1.1] slide-up-heading">
            Purpose-built infrastructure where energy, cooling, and compute converge to produce
            intelligence at scale.
          </h2>
        </div>

        <div>
          <div className="mt-28">
            <h2
              className="
              slide-up-heading
              font-medium leading-[1.1]
              text-[clamp(1.8rem,5vw,7.2rem)]
            text-zinc-200
              mb-40
              "
            >
              From 100-GPU prototypes to 100,000-GPU superclusters—deploy the models that define the
              next decade of AI.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard title="180 MW" subtitle="Production capacity live" />
            <StatCard title="2.5 GW" subtitle="Secured contracted power" />
            <StatCard title="1.25 PUE" subtitle="Efficiency engineered at scale" />
            <StatCard title="99.99%" subtitle="Uptime service-level agreement" />
          </div>
        </div>
      </div>
    </section>
  );
}
