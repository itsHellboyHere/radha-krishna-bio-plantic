import AboutPreview from "./components/AboutPreview/AboutPreview";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NurseryBand from "./components/NurseryBand/NurseryBand";
import TrustStrip from "./components/TrustStrip/TrustStrip";

export const metadata = {
  title: "Radha Krishna Bio Plantic | Coming Soon",
  description:
    "Radha Krishna Bio Plantic — quality bio & tissue-culture plants. Chilkana Road, Saharanpur, U.P. Website launching soon.",
};



export default function Home() {
  return (
    <main>
      <HeroCarousel/>
      {/* <TrustStrip/> */}
      {/* <AboutPreview/> */}
      {/* <NurseryBand/> */}
    </main>
  );
}