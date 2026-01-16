"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 h-full w-full bg-[linear-gradient(to_bottom_left,#E6FAFA_0%,#FFFFFF_50%)] opactiy-50" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                            Reliable Accounting & Bookkeeping Services in the UAE
                        </h1>
                        <p className="text-lg text-muted-foreground/80 md:text-xl">
                            Helping businesses stay compliant, cash‑flow positive, and always audit‑ready with clear, accurate numbers.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "VAT‑compliant accounting aligned with UAE regulations",
                                "Flexible monthly and quarterly bookkeeping packages",
                                "Dedicated accountant for your business"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                                    className="flex items-center gap-3 text-base text-foreground"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 mt-4"
                        >
                            <Button size="lg" className="text-base font-semibold px-8">
                                Book a Free Consultation
                            </Button>
                            <Button size="lg" variant="outline" className="text-base font-semibold text-primary border-primary hover:bg-primary/10">
                                View Our Services
                            </Button>
                        </motion.div>

                        {/* Trust Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/80 font-medium"
                        >
                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Serving SMEs & startups across the UAE
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Specialized in FTA & VAT compliance
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Confidential, secure, cloud‑ready systems
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative mx-auto lg:ml-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-2 flex items-center justify-center relative shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 ease-out">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/hero.png"
                                    alt="Modern Accounting Office in UAE"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative UI elements overlay */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-lg shadow-xl border border-border flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Audit Ready</p>
                                    <p className="text-xs text-muted-foreground">100% Compliant</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
