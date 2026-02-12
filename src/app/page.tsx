import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <MenuHighlights />
      <Gallery />
      <Location />
    </>
  );
}
