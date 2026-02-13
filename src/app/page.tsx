import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import OurSpace from "@/components/OurSpace";
import Location from "@/components/Location";
import CTAOrder from "@/components/CTAOrder";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <OurSpace />
      <Location />
      <CTAOrder />
    </>
  );
}
