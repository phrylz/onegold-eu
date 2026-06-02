import MobileLanding from "@/components/MobileLanding";
import DesktopLanding from "@/components/desktop/DesktopLanding";

/**
 * Shared landing composition rendered by the locale routes (/, /en-gb, /de,
 * /it, /fr). These currently render identical content as starting points;
 * locale-specific copy/pricing can diverge per route later.
 */
export default function LandingPage() {
  return (
    <main>
      <div className="block min-[1024px]:hidden">
        <MobileLanding />
      </div>
      <div className="hidden min-[1024px]:block">
        <DesktopLanding />
      </div>
    </main>
  );
}
