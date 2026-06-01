import FaqMobile from "@/components/faq/FaqMobile";
import FaqDesktop from "@/components/faq/FaqDesktop";

export const metadata = {
  title: "FAQ | OneGold EU",
  description:
    "Frequently asked questions about OneGold – the precious metals investment platform.",
};

export default function FaqPage() {
  return (
    <main>
      <div className="block min-[1024px]:hidden">
        <FaqMobile />
      </div>
      <div className="hidden min-[1024px]:block">
        <FaqDesktop />
      </div>
    </main>
  );
}
