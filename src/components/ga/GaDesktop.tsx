import GaHeader from "@/components/ga/GaHeader";
import GaHero from "@/components/ga/GaHero";
import GaProducts from "@/components/ga/GaProducts";
import GaHowItWorks from "@/components/ga/GaHowItWorks";
import GaAdvantages from "@/components/ga/GaAdvantages";
import GaBullion from "@/components/ga/GaBullion";

export default function GaDesktop() {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      <GaHeader />
      <GaHero />
      <GaProducts />
      <GaHowItWorks />
      <GaAdvantages />
      <GaBullion />
    </div>
  );
}
