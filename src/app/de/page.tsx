import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "OneGold Deutschland — Gold and Silver Simplified",
  alternates: { canonical: "/de" },
};

export default function Page() {
  return <LandingPage />;
}
