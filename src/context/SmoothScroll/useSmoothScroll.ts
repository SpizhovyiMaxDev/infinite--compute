import { createContext, useContext } from "react";
import Lenis from "lenis";

export type SmoothScrollContextType = {
  lenis: Lenis | null;
};

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export function useSmoothScroll(): SmoothScrollContextType {
  return useContext(SmoothScrollContext);
}
