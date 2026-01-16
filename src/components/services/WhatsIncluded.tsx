"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, CreditCard, BarChart3, Calculator, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsIncluded() {
    const deliverables = [
        {
            icon: FileText,
            title: "Recording all sales, expenses, and journal entries",
            description: "Complete transaction recording for accurate financial tracking"
        },
        {
            icon: CreditCard,
            title: "Bank and card reconciliations",
            description: "Monthly reconciliation to ensure all accounts match"
        },
        {
            icon: BarChart3,
            title: "Payables and receivables tracking",
            description: "Monitor what you owe and what's owed to you"
        },
        {
            icon: Calculator,
            title: "Monthly financial statements",
            description: "P&L, balance sheet, and cash flow reports delivered on time"
        },
        {
            icon: Shield,
            title: "VAT‑ready records and basic compliance support",
            description: "Maintain FTA-compliant records for stress-free audits"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What's Included in Monthly Accounting
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to keep your books accurate, compliant, and decision-ready.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {deliverables.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors hover:shadow-md"
                        >
                            <div className="shrink-0">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mid-page CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/20"
                >
                    <p className="text-lg text-foreground mb-4">
                        Not sure which package fits your business?
                    </p>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        Talk to an Accountant
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
