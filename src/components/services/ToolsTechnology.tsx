"use client";

import { Cloud, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ToolsTechnology() {
    const tools = [
        { name: "Xero", supported: true },
        { name: "QuickBooks", supported: true },
        { name: "Zoho Books", supported: true },
        { name: "Wave", supported: true },
        { name: "Excel/Google Sheets", supported: true }
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Tools We Work With
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Cloud‑ready accounting and secure sharing of documents. We support the platforms you already use.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="grid sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12"
                    >
                        {tools.map((tool, i) => (
                            <div
                                key={i}
                                className="bg-background rounded-lg p-4 text-center border border-border hover:border-primary/50 transition-colors shadow-sm"
                            >
                                <p className="font-semibold text-foreground">{tool.name}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Cloud className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Cloud-Ready</h3>
                            <p className="text-sm text-muted-foreground">
                                Access your financial data anytime, anywhere
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Lock className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Secure Sharing</h3>
                            <p className="text-sm text-muted-foreground">
                                Bank-level encryption for all document transfers
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Real-Time Updates</h3>
                            <p className="text-sm text-muted-foreground">
                                See your financial position updated in real-time
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
