import { HardDrive } from "lucide-react";

type StatCardProps = {
  title: string;
  subtitle: string;
};

function StatCard({ title, subtitle }: StatCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-md relative group hover:border-green-500 transition">
      {/* Icon */}
      <div className="absolute top-6 left-6">
        <div className="h-10 w-10 bg-black border border-zinc-700 flex items-center justify-center">
          <HardDrive size={18} className="text-white" />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatCard;
