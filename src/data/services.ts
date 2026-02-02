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
        slug: "monthly-quarterly-bookkeeping",
        title: "Monthly & Quarterly Bookkeeping",
        shortDescription: "Recording daily transactions, bank reconciliations, payables and receivables, and monthly closing.",
        fullDescription: "Stay on top of your finances with our comprehensive bookkeeping services. We ensure every transaction is accurately recorded, classified, and reconciled, giving you a clear picture of your financial health at all times. Whether you need monthly or quarterly updates, our team ensures your books are always audit-ready.",
        icon: Book,
        features: [
            "Daily transaction recording",
            "Bank and credit card reconciliation",
            "Accounts payable and receivable management",
            "Monthly financial closing",
            "Expense tracking and categorization"
        ],
        benefits: [
            "Always know your cash flow position",
            "Reduce end-of-year stress",
            "Make informed business decisions",
            "Ensure compliance with local regulations"
        ],
        heroImage: "/images/services.png"
    },
    {
        slug: "financial-accounting-reporting",
        title: "Financial Accounting & Reporting",
        shortDescription: "Preparation of balance sheet, income statement, and cash flow reports for management and investors.",
        fullDescription: "Gain deep insights into your business performance with our expert financial reporting. We move beyond basic data entry to provide you with structured financial statements—Balance Sheets, Income Statements, and Cash Flow Statements—that help stakeholders understand the true value and trajectory of the business.",
        icon: FileSpreadsheet,
        features: [
            "Balance Sheet preparation",
            "Profit & Loss (Income) statements",
            "Cash Flow analysis",
            "Custom management reports",
            "Budgeting and forecasting support"
        ],
        benefits: [
            "Clear visibility into profitability",
            "Attract investors with professional reports",
            "Identify cost-saving opportunities",
            "Strategic planning support"
        ],
        heroImage: "/images/hero.png"
    },
    {
        slug: "vat-compliance-filing",
        title: "VAT Compliance & Filing",
        shortDescription: "Computing VAT, preparing and filing returns, and aligning records with FTA requirements.",
        fullDescription: "Navigating UAE VAT laws can be complex. Our team ensures your business remains fully compliant with the Federal Tax Authority (FTA). From registration to accurate return filing and refund processing, we handle the technical details so you don't face penalties.",
        icon: Calculator,
        features: [
            "VAT registration and deregistration",
            "Quarterly VAT return filing",
            "VAT refund processing",
            "FTA audit support and representation",
            "Transaction compliance review"
        ],
        benefits: [
            "Avoid costly fines and penalties",
            "Ensure accurate tax calculations",
            "Timely submissions to the FTA",
            "Peace of mind regarding tax liabilities"
        ],
        heroImage: "/images/why-us.png"
    },
    {
        slug: "corporate-tax-filing",
        title: "Corporate Tax Filing",
        shortDescription: "Expert guidance on corporate tax registration, return filing, and compliance to ensure seamless adherence to UAE regulations.",
        fullDescription: "With the introduction of Corporate Tax in the UAE, businesses need a strategic partner to ensure compliance and optimization. We assist with registration, tax computation, and filing, ensuring your business meets all legal obligations while optimizing your tax position legally.",
        icon: Building2,
        features: [
            "Corporate Tax registration",
            "Taxable income computation",
            "Tax return filing",
            "Transfer pricing documentation",
            "Tax group formation and management"
        ],
        benefits: [
            "Full compliance with UAE Corporate Tax Law",
            "Optimized tax structure",
            "Risk mitigation",
            "Strategic tax planning"
        ],
        heroImage: "/images/services.png"
    },
    {
        slug: "outsourced-accounting",
        title: "Outsourced Accounting Department",
        shortDescription: "End‑to‑end outsourced function so you can focus on running your business.",
        fullDescription: "Transform your finance function without the overhead of an in-house team. Our outsourced accounting service acts as your complete finance department, handling everything from payroll to CFO-level strategy, scaling with your business needs.",
        icon: Users,
        features: [
            "Full-service finance team access",
            "Payroll processing and WPS compliance",
            "Vendor and payment management",
            "CFO advisory services",
            "Scalable support structure"
        ],
        benefits: [
            "Significant cost savings vs in-house hires",
            "Access to senior financial expertise",
            "Continuity of service (no sick leave gaps)",
            "Focus on your core business growth"
        ],
        heroImage: "/images/hero.png"
    },
    {
        slug: "cleanup-catchup-accounting",
        title: "Cleanup & Catch‑up Accounting",
        shortDescription: "Fixing backlogs, correcting errors, and bringing books up to date from company inception.",
        fullDescription: "Fallen behind on your books? Don't worry. Our cleanup and catch-up service is designed to organize chaotic financial records, reconcile historical transactions, and bring your accounts up to date, giving you a fresh start and peace of mind.",
        icon: History,
        features: [
            "Historical data entry and reconciliation",
            "Error detection and correction",
            "Suspense account clearing",
            "Restatement of financial reports",
            "Process implementation to prevent future backlogs"
        ],
        benefits: [
            "Restore confidence in your numbers",
            "Prepare for audit or due diligence",
            "Clear outstanding tax liabilities",
            "Fresh start for your financial records"
        ],
        heroImage: "/images/why-us.png"
    }
];
