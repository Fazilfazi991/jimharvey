"use client";

import { X, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PainRelief() {
    const problems = [
        "Missed VAT deadlines and penalties",
        "Cash-flow blind spots",
        "Messy, incomplete records",
        "Audit stress and panic",
        "No clear financial picture"
    ];

    const solutions = [
        "Clean books with timely VAT filings",
        "Clear cash-flow visibility",
        "Organized, audit-ready records",
        "Stress-free FTA compliance",
        "Simple dashboards and reports"
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Avoid These Common Accounting Problems
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See the difference professional monthly accounting makes for your business.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Without */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 border-2 border-red-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Without Proper Accounting</h3>
                        </div>
                        <ul className="space-y-4">
                            {problems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <X className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <span className="text-foreground">{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* With */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background rounded-2xl p-8 border-2 border-primary"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">With Jim Harvey</h3>
                        </div>
                        <ul className="space-y-4">
                            {solutions.map((solution, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
