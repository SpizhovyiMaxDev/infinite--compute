import { ArrowRight } from "lucide-react";
import StatCard from "../../../ui/StatCard";

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="mx-auto px-4 sm:px-16">
        <div className="min-h-screen py-2 flex justify-end flex-col pt-25">
          <div className="mb-auto">
            <div className="mb-6 flex items-center gap-2 text-sm text-white">
              <span className="h-2 w-2 bg-green-400" />
              Bare Metal
            </div>
            <h1
              className="
              font-semibold leading-[1.05]
              text-[clamp(2.5rem,6vw,5.5rem)]
              tracking-tight
              max-w-5xl
            "
            >
              <span>Where Gigawatts</span>
              <br />
              <span>Become Intelligence</span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-4 mb-20">
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
            <div className="flex-1">
              <div className="h-2 w-2 bg-green-400 mb-3"></div>

              <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-medium text-zinc-200 tracking-tight">
                324+ km2
              </p>
              <p className="text-[clamp(0.80rem,1.2vw,1.1rem)] text-zinc-400">
                Space across the all North America
              </p>
            </div>

            <div className="flex-1">
              <div className="h-2 w-2 bg-green-400 mb-3"></div>

              <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-medium text-zinc-200 tracking-tight">
                324+ km2
              </p>
              <p className="text-[clamp(0.80rem,1.2vw,1.1rem)] text-zinc-400">
                Space across the all North America
              </p>
            </div>

            <div className="w-full sm:flex-1 max-w-[280px] sm:max-w-none aspect-[16/9] bg-zinc-800 rounded-md border border-zinc-700" />
          </div>
        </div>

        

        <div className="h-full flex items-center  min-h-screen">
          <h2 className="text-[clamp(1.8rem,4.5vw,3.8rem)] text-zinc-200 max-w-6xl">
          Purpose-built infrastructure where energy, cooling, and compute converge to produce intelligence at scale. 
          </h2>
        </div>


        <div className="min-h-screen h-full"> 

        <div className="mt-28 max-w-6xl">
          <h2
            className="
            font-medium leading-[1.1]
            text-[clamp(1.8rem,4.5vw,3.8rem)]
            text-zinc-200
            "
            >
            Purpose-built infrastructure where energy, cooling, and compute converge to produce
            intelligence at scale.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
