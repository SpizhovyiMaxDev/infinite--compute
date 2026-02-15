import { useSmoothScroll } from "./hooks/useSmoothScroll";
import BareMetal from "./pages/BareMetal/BareMetal";

function App() {
  useSmoothScroll();
  return <BareMetal />;
}

export default App;
