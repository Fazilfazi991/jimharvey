import { Book, FileSpreadsheet, Calculator, Building2, Users, History, LucideIcon } from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    features: string[];
    benefits: string[];
    heroImage: string;
}

export const services: Service[] = [
    {
        slug: "accounting-bookkeeping",
        title: "Accounting & Bookkeeping",
        shortDescription: "Complete financial  record keeping, monthly reports, and day-to-day transaction management.",
        fullDescription: "Our core Accounting & Bookkeeping service ensures your financial records are accurate, up-to-date, and fully compliant with UAE regulations. We handle everything from recording daily transactions to reconciling bank accounts and generating monthly financial statements, giving you complete visibility into your business performance.",
        icon: Book,
        features: [
            "Daily transaction recording & categorization",
            "Bank & credit card reconciliation",
            "Accounts Payable & Receivable management",
            "Monthly Management Reports (P&L, Balance Sheet)",
            "Maintenance of general ledger"
        ],
        benefits: [
            "Accurate financial overview",
            "Compliance with local laws",
            "Better cash flow management",
            "Audit-ready financial statements"
        ],
        heroImage: "/images/services.png"
    },
    {
        slug: "auditing-services",
        title: "Auditing Services",
        shortDescription: "Independent examination of financial records to ensure accuracy, compliance, and transparency.",
        fullDescription: "Our Auditing Services provide a thorough, independent evaluation of your organization's financial statements. We ensure your records provide a true and fair view of your financial position, helping you build trust with stakeholders, banks, and regulatory bodies while identifying areas for operational improvement.",
        icon: FileSpreadsheet,
        features: [
            "Statutory Audit",
            "Internal Audit",
            "Risk assessment & internal control review",
            "Fraud investigation & detection",
            "Compliance audit"
        ],
        benefits: [
            "Enhanced credibility with banks & investors",
            "Identification of operational risks",
            "Compliance with UAE Commercial Companies Law",
            "Improved internal controls"
        ],
        heroImage: "/images/hero.png"
    },
    {
        slug: "vat-services",
        title: "VAT Services",
        shortDescription: "Comprehensive VAT solutions including registration, filing, refunds, and compliance advisory.",
        fullDescription: "Navigate the complexities of UAE VAT with confidence. Our dedicated VAT Services cover the entire lifecycle of Value Added Tax compliance. From initial registration and accurate return filing to handling refunds and FTA audits, we ensure your business remains compliant and penalty-free.",
        icon: Calculator,
        features: [
            "VAT Registration & Deregistration",
            "VAT Return Filing & Payment management",
            "VAT Refund processing",
            "Transaction impact analysis",
            "FTA Audit assistance"
        ],
        benefits: [
            "Avoidance of heavy FTA penalties",
            "Optimized tax position",
            "Timely & accurate filings",
            "Expert representation before tax authorities"
        ],
        heroImage: "/images/why-us.png"
    },
    {
        slug: "corporate-services",
        title: "Corporate Services",
        shortDescription: "Strategic support for business formation, corporate tax compliance, and regulatory adherence.",
        fullDescription: "Our Corporate Services are designed to support your business at every stage of its lifecycle. Whether you are setting up a new entity, managing Corporate Tax obligations, or ensuring ongoing regulatory compliance, our expert team provides the strategic guidance and operational support you need to thrive in the UAE market.",
        icon: Building2,
        features: [
            "Corporate Tax Registration & Filing",
            "Business Incorporation & Licensing",
            "PRO Services & Visa processing",
            "Liquidations & deregistration",
            "Corporate governance advisory"
        ],
        benefits: [
            "Seamless business setup & operations",
            "Full compliance with Corporate Tax Law",
            "Reduced administrative burden",
            "Strategic business structuring"
        ],
        heroImage: "/images/services.png"
    }
];
