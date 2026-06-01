import SupportMobile from "@/components/support/SupportMobile";
import SupportDesktop from "@/components/support/SupportDesktop";

export const metadata = {
  title: "International Support | OneGold",
  description:
    "Contact OneGold customer support by phone or email for questions about your account, an order, or using our app.",
};

export default function SupportPage() {
  return (
    <main>
      <div className="block min-[1024px]:hidden">
        <SupportMobile />
      </div>
      <div className="hidden min-[1024px]:block">
        <SupportDesktop />
      </div>
    </main>
  );
}
