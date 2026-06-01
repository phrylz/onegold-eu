import LegalContent from "@/components/legal/LegalContent";
import DesktopFooter from "@/components/desktop/DesktopFooter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "User Agreement | OneGold",
  description:
    "OneGold User Agreement — effective January 10, 2024. Read the full terms governing your relationship with OneGold, LLC.",
};

export default function LegalPage() {
  return (
    <>
      <LegalContent />
      <div className="hidden min-[1024px]:block">
        <DesktopFooter />
      </div>
      <div className="block min-[1024px]:hidden">
        <Footer />
      </div>
    </>
  );
}
