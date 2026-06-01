import PrivacyContent from "@/components/legal/PrivacyContent";
import DesktopFooter from "@/components/desktop/DesktopFooter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | OneGold",
  description:
    "OneGold Privacy Policy — effective June 1st, 2023. Learn how OneGold, LLC collects, uses, shares, and safeguards your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyContent />
      <div className="hidden min-[1024px]:block">
        <DesktopFooter />
      </div>
      <div className="block min-[1024px]:hidden">
        <Footer />
      </div>
    </>
  );
}
