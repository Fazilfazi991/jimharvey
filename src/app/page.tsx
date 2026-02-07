import { Hero } from "@/components/home/Hero";

import { AboutUs } from "@/components/home/AboutUs";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { TrustFactors } from "@/components/home/TrustFactors";
import { Process } from "@/components/home/Process";
import { Industries } from "@/components/home/Industries";
import { FAQ } from "@/components/home/FAQ";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutUs />
      <ServicesOverview />
      <WhyUs />
      <TrustFactors />
      <Process />
      <Industries />
      <FAQ />
      <LeadCapture />
    </>
  );
}
