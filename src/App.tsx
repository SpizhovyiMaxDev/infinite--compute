import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./pages/BareMetal/sections/Hero";
import AnyModelSection from "./pages/BareMetal/sections/AnyModelSection";
import ProductTabs from "./pages/BareMetal/sections/ProductTabs";
import TrustedBySection from "./pages/BareMetal/sections/TrustedBySection";
import TestimonialSection from "./pages/BareMetal/sections/TestimonialSection";
import NorthAmericaFootprint from "./pages/BareMetal/sections/NorthAmericaFootprint";
import ScaleFeatures from "./pages/BareMetal/sections/ScaleFeatures";
import BareMetalSection from "./pages/BareMetal/sections/BareMetalSection";
import CallToAction from "./pages/BareMetal/sections/CallToAction";

function App() {
  useSmoothScroll();
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AnyModelSection />
        <ProductTabs />
        <TrustedBySection />
        <TestimonialSection />
        <NorthAmericaFootprint />
        <ScaleFeatures />
        <BareMetalSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
