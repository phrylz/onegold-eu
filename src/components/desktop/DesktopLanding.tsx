import DesktopPriceBar from "@/components/desktop/DesktopPriceBar";
import DesktopHero from "@/components/desktop/DesktopHero";
import DesktopAsFeatured from "@/components/desktop/DesktopAsFeatured";
import DesktopOutro from "@/components/desktop/DesktopOutro";
import DesktopReviews from "@/components/desktop/DesktopReviews";
import DesktopFeatures from "@/components/desktop/DesktopFeatures";
import DesktopChart from "@/components/desktop/DesktopChart";
import DesktopCta from "@/components/desktop/DesktopCta";
import DesktopAbout from "@/components/desktop/DesktopAbout";
import DesktopFooter from "@/components/desktop/DesktopFooter";

export default function DesktopLanding() {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      <DesktopPriceBar localeSelector />
      <DesktopHero />
      <DesktopAsFeatured />
      <DesktopOutro />
      <DesktopReviews />
      <DesktopFeatures />
      <DesktopChart />
      <DesktopCta />
      <DesktopAbout />
      <DesktopFooter />
    </div>
  );
}
