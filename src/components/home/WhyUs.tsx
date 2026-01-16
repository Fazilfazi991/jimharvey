"use client";

import { ShieldCheck, MessageSquare, UserCheck, Lock, Cloud, Layers } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function WhyUs() {
    const reasons = [
        {
            title: "Local UAE Compliance Expertise",
            description: "Deep understanding of UAE corporate, VAT, and reporting requirements to keep your business fully compliant.",
            icon: ShieldCheck,
        },
        {
            title: "Clear, Jargon‑Free Communication",
            description: "Straightforward explanations so you always know your numbers and next steps.",
            icon: MessageSquare,
        },
        {
            title: "Dedicated Point of Contact",
            description: "A single accountant who understands your business and coordinates all your accounting needs.",
            icon: UserCheck,
        },
        {
            title: "Secure & Confidential Processes",
            description: "Secure systems, strict data privacy, and carefully controlled access to your financial information.",
            icon: Lock,
        },
        {
            title: "Cloud‑Ready and Digital",
            description: "Support for modern, cloud‑based tools to give you real‑time visibility of your finances.",
            icon: Cloud,
        },
        {
            title: "Flexible Packages for SMEs",
            description: "Packages designed around typical UAE SME bookkeeping and reporting needs.",
            icon: Layers,
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="why-us" className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    Why Choose Jim Harvey
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Choosing the right accounting partner in the UAE means more than just data entry. It means proactive support, local knowledge, and reliable insights.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden lg:block relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg"
                            >
                                <Image
                                    src="/images/why-us.png"
                                    alt="Growth and Security"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:w-2/3 grid sm:grid-cols-2 gap-8"
                    >
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="flex flex-col gap-4 p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors"
                            >
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <reason.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
