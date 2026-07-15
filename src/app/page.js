import AboutPreview from "./components/AboutPreview/AboutPreview";
import CTABand from "./components/CTABand/CTABand";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NurseryBand from "./components/NurseryBand/NurseryBand";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import TrustStrip from "./components/TrustStrip/TrustStrip";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <TrustStrip />
      <AboutPreview />
      <NurseryBand />
      <Products />
      <Services />
      <CTABand />
    </main>
  );
}