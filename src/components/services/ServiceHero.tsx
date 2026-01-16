"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function ServiceHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 pt-24 md:pt-32 pb-16">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Monthly Accounting & Bookkeeping for UAE Businesses
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Accurate books, on‑time reports, and VAT‑ready records every month.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" className="text-lg px-8">
                                Get a Monthly Accounting Proposal
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary/10">
                                Schedule a 15‑Minute Call
                            </Button>
                        </div>
                    </motion.div>

                    {/* Stats Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                    >
                        <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                            <div className="flex items-center justify-center mb-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-foreground mb-1">100%</p>
                            <p className="text-sm text-muted-foreground">VAT‑compliant records</p>
                        </div>

                        <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                            <div className="flex items-center justify-center mb-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-foreground mb-1">150+</p>
                            <p className="text-sm text-muted-foreground">Businesses supported in UAE</p>
                        </div>

                        <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                            <div className="flex items-center justify-center mb-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-foreground mb-1">&lt; 7 Days</p>
                            <p className="text-sm text-muted-foreground">Average onboarding time</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
