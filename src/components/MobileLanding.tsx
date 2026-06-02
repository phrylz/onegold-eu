import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import CtaBand from "@/components/CtaBand";
import StatsBand from "@/components/StatsBand";
import AsFeaturedOn from "@/components/AsFeaturedOn";
import Reviews from "@/components/Reviews";
import AdvantagesChart from "@/components/AdvantagesChart";
import Outro from "@/components/Outro";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function MobileLanding() {
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col overflow-hidden bg-white">
      <SiteHeader />
      <Hero />
      <CtaBand />
      <StatsBand />
      <AsFeaturedOn />
      <Reviews />
      <AdvantagesChart />
      <Outro />
      <CtaBand />
      <FeaturesCarousel />
      <CtaBand />
      <About />
      <Footer />
    </div>
  );
}
