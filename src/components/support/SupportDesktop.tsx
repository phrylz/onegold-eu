import SupportHeader from "@/components/support/SupportHeader";
import SupportContacts from "@/components/support/SupportContacts";
import DesktopFooter from "@/components/desktop/DesktopFooter";

export default function SupportDesktop() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden bg-white">
      {/* Page Top: price bar + nav header + promo bar */}
      <SupportHeader />

      {/* Introduction */}
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-[20px] px-4 py-[80px] text-center">
        <h1 className="w-full text-[48px] font-normal leading-normal text-black">
          OneGold Customer Support
        </h1>
        <p className="w-full text-[18px] leading-normal text-black">
          Contact us by phone or email for questions about your account, an order, or using our app.
        </p>
      </div>

      {/* Contact cards with gradient background */}
      <SupportContacts />

      {/* Footer */}
      <DesktopFooter />
    </div>
  );
}
