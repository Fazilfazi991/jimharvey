"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Industries() {
    const industries = [
        "Trading & Distribution",
        "Professional Services",
        "E-commerce",
        "Restaurants & Hospitality",
        "Startups",
        "Holding Companies",
        "Real Estate",
        "Healthcare Clinics"
    ];

    return (
        <section id="industries" className="py-20 bg-background">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                >
                    Industries We Support
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Tailored accounting and bookkeeping support for a wide range of UAE businesses.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                            <Badge variant="secondary" className="text-lg py-2 px-6 rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                                {industry}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
