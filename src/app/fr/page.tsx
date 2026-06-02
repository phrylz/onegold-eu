import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "OneGold France — Gold and Silver Simplified",
  alternates: { canonical: "/fr" },
};

export default function Page() {
  return <LandingPage />;
}
