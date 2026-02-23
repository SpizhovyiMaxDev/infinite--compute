import { useRef, useEffect } from "react";
import { animateToggleHeight } from "../lib/animations/uiAnimations";

interface FootprintItemProps {
  title: string;
  status: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export function FootprintItem({ title, status, isOpen, children, onClick }: FootprintItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    animateToggleHeight(el, isOpen);
  }, [isOpen]);

  return (
    <div className="border-b border-slate-300 py-6">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <h3 className="text-xs sm:text-2xl font-medium text-slate-900">{title}</h3>
            <span
              className="
             inline-flex items-center gap-2
             px-3 py-1 text-xs sm:text-sm rounded
           bg-slate-100 text-slate-700
            "
            >
              <span
                className={`
        block w-2 h-2
        ${status === "Live" ? "bg-green-500 rounded-full" : "bg-orange-400"}
            `}
              />
              {status}
            </span>
          </div>
        </div>

        <span
          className={`py-2 px-3 ${isOpen ? "bg-green-400" : "bg-slate-200"} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          ↓
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="pt-6 text-slate-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
