"use client";
import { FileCheck, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export function TrustFactors() {
    return (
        <section className="py-20 bg-secondary/30 border-y border-border">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Credentials, Compliance & Assurance
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-4 flex flex-col items-center gap-4"
                    >
                        <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-sm">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Licensed Professionals</h3>
                            <p className="text-muted-foreground text-sm">Licensed professionals with UAE accounting experience</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="px-4 py-4 flex flex-col items-center gap-4"
                    >
                        <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-sm">
                            <FileCheck className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">VAT Specialists</h3>
                            <p className="text-muted-foreground text-sm">Experience with VAT, FTA audits, and local regulations</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="px-4 py-4 flex flex-col items-center gap-4"
                    >
                        <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-sm">
                            <ClipboardCheck className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Quality Assurance</h3>
                            <p className="text-muted-foreground text-sm">Standardized internal review process for all financial statements</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
