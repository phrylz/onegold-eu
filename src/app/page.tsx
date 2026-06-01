import MobileLanding from "@/components/MobileLanding";
import DesktopLanding from "@/components/desktop/DesktopLanding";

export default function Home() {
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
