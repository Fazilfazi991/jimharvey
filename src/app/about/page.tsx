import { PageHero } from "@/components/layout/PageHero";
import { AboutUs } from "@/components/home/AboutUs";
import { WhyUs } from "@/components/home/WhyUs";
import { TrustFactors } from "@/components/home/TrustFactors";

import { LeadCapture } from "@/components/home/LeadCapture";

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About Jim Harvey"
                subtitle="Your trusted partner for audit, accounting, and tax services in the UAE."
                backgroundImage="/images/about-hero.jpg"
            />
            <AboutUs />
            <WhyUs />

            <TrustFactors />
            <LeadCapture />
        </>
    );
}
