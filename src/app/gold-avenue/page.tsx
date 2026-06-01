import GaMobile from "@/components/ga/GaMobile";
import GaDesktop from "@/components/ga/GaDesktop";

export const metadata = {
  title: "Redeem at Gold Avenue — OneGold",
  description:
    "GOLD AVENUE and OneGold are Bullion International Group companies. OneGold members in Europe can redeem their vaulted metal through GOLD AVENUE.",
};

export default function GoldAvenuePage() {
  return (
    <main>
      <div className="block min-[1024px]:hidden">
        <GaMobile />
      </div>
      <div className="hidden min-[1024px]:block">
        <GaDesktop />
      </div>
    </main>
  );
}
