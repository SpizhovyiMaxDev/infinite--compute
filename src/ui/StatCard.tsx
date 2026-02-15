import { HardDrive } from "lucide-react";

type StatCardProps = {
  title: string;
  subtitle: string;
};

function StatCard({ title, subtitle }: StatCardProps) {
  return (
    <div className="bg-white border border-zinc-800 p-8 rounded-md relative group transition aspect-square flex flex-col justify-between">

      <div className="absolute top-6 left-6">
        <div className="w-15 h-15 sm:h-[5vw] sm:w-[5vw] bg-slate-950 border border-zinc-700 flex items-center justify-center">
          <HardDrive size={25} className="text-white" />
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-[clamp(1.5rem,2vw,2.4rem)] font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm md:text-md text-slate-900">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatCard;
