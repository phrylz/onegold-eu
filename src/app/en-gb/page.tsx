import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "OneGold UK — Gold and Silver Simplified",
  alternates: { canonical: "/en-gb" },
};

export default function Page() {
  return <LandingPage />;
}
