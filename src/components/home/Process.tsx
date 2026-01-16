"use client";
import { Search, FileText, Settings, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export function Process() {
    const steps = [
        {
            title: "Initial Consultation",
            description: "Understand your business model, current books, and regulatory requirements.",
            icon: Search,
        },
        {
            title: "Assessment & Proposal",
            description: "Review your current records and propose a clear, fixed‑scope package.",
            icon: FileText,
        },
        {
            title: "Setup & Cleanup",
            description: "Organize existing data, configure tools, and bring accounts up to date.",
            icon: Settings,
        },
        {
            title: "Ongoing Support & Reporting",
            description: "Deliver regular bookkeeping, reconciliations, and clear reports on schedule.",
            icon: BarChart,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        How We Work With You
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A simple, structured process to get your accounts under control and keep them that way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="h-24 w-24 rounded-full bg-background border-4 border-secondary flex items-center justify-center mb-6 shadow-sm group-hover:border-primary transition-colors duration-300">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl">
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {i + 1}. {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
