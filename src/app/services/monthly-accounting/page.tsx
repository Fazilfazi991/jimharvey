import { ServiceHero } from "@/components/services/ServiceHero";
import { WhatsIncluded } from "@/components/services/WhatsIncluded";
import { IdealClients } from "@/components/services/IdealClients";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { PricingPackages } from "@/components/services/PricingPackages";
import { ToolsTechnology } from "@/components/services/ToolsTechnology";
import { PainRelief } from "@/components/services/PainRelief";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { FinalCTA } from "@/components/services/FinalCTA";

export const metadata = {
    title: "Monthly Accounting & Bookkeeping Services in UAE | Jim Harvey",
    description: "Professional monthly accounting and bookkeeping services for UAE businesses. VAT-compliant records, timely reports, and dedicated support from AED 1,500/month.",
};

export default function MonthlyAccountingPage() {
    return (
        <>
            <ServiceHero />
            <WhatsIncluded />
            <IdealClients />
            <ServiceProcess />
            <PricingPackages />
            <ToolsTechnology />
            <PainRelief />
            <ServiceFAQ />
            <FinalCTA />
        </>
    );
}
