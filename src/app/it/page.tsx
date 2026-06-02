import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "OneGold Italia — Gold and Silver Simplified",
  alternates: { canonical: "/it" },
};

export default function Page() {
  return <LandingPage />;
}
