"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutUs() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted relative shadow-xl">
                            <Image
                                src="/images/about.png"
                                alt="Jim Harvey Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Stats Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl border border-border max-w-[240px]"
                        >
                            <div className="space-y-4">
                                <div>
                                    <p className="text-3xl font-bold text-primary">100%</p>
                                    <p className="text-sm text-muted-foreground">VAT-compliant record keeping</p>
                                </div>
                                <div className="h-px bg-border" />
                                <div>
                                    <p className="text-3xl font-bold text-primary">24/7</p>
                                    <p className="text-sm text-muted-foreground">Access to your financial reports</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2 flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            About Jim Harvey Accounting & Bookkeeping
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Jim Harvey Accounting & Bookkeeping is a UAE‑based firm dedicated to keeping your financial records accurate, compliant, and ready for decision‑making. The team supports SMEs, startups, and established companies with reliable accounting foundations that meet local regulations.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Full compliance with UAE accounting and VAT requirements",
                                "Clear financial reports for owners and management",
                                "Personal, long‑term relationships instead of one‑off support"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <span className="text-base text-foreground">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
