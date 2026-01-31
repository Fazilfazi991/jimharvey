"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesOverview() {
    // Services data is imported from @/data/services

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
        <section id="services" className="py-20 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <span className="h-px w-8 bg-primary"></span>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
                        <span className="h-px w-8 bg-primary"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        Accounting & Bookkeeping Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-muted-foreground"
                    >
                        Flexible service packages designed for UAE businesses that need accurate books, on‑time filings, and clear reports.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div key={i} variants={item} className="h-full">
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <Card className="group border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full cursor-pointer hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                                            <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                            {service.title}
                                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base text-muted-foreground">
                                            {service.shortDescription}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground mb-4">Need something specific? Talk to us about a tailored package.</p>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
}
