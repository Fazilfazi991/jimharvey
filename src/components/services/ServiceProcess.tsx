"use client";

import { UserPlus, FolderOpen, CheckSquare, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ServiceProcess() {
    const steps = [
        {
            number: "01",
            icon: UserPlus,
            title: "Onboarding & Data Review",
            description: "We review your current setup, understand your business model, and identify what records we need."
        },
        {
            number: "02",
            icon: FolderOpen,
            title: "Monthly Data Collection & Recording",
            description: "Collect invoices, receipts, and bank statements. Record all transactions in your accounting system."
        },
        {
            number: "03",
            icon: CheckSquare,
            title: "Reconciliations & Internal Checks",
            description: "Reconcile all accounts, verify accuracy, and run internal quality checks before finalizing."
        },
        {
            number: "04",
            icon: FileText,
            title: "Monthly Reports & Review Call",
            description: "Deliver financial statements and schedule a review call to discuss your numbers and answer questions."
        }
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
                            How the Monthly Process Works
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            A simple, structured workflow to keep your accounts accurate and up-to-date every month.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-border -z-10" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg relative z-10">
                                        <step.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10 -z-10">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
