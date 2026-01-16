"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PricingPackages() {
    const packages = [
        {
            name: "Starter",
            price: "1,500",
            description: "Perfect for new businesses and startups",
            features: [
                "Up to 50 transactions/month",
                "Monthly P&L and Balance Sheet",
                "Bank reconciliation",
                "Email support",
                "VAT-ready records"
            ],
            popular: false
        },
        {
            name: "Growth",
            price: "2,800",
            description: "For growing SMEs with more activity",
            features: [
                "Up to 150 transactions/month",
                "Monthly financial reports",
                "Bank & card reconciliations",
                "Priority email support",
                "Monthly review call",
                "VAT compliance support"
            ],
            popular: true
        },
        {
            name: "Established",
            price: "4,500",
            description: "Comprehensive support for established businesses",
            features: [
                "Up to 300 transactions/month",
                "Complete financial reporting",
                "Multi-account reconciliations",
                "Dedicated accountant",
                "Weekly check-ins",
                "Full VAT & compliance support",
                "Management dashboards"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-slate-900">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Simple, Transparent Monthly Packages
                        </h2>
                        <p className="text-lg text-white/80">
                            Choose the package that fits your transaction volume and support needs.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Card className={`h-full relative ${pkg.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-8 pt-8">
                                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                                        {pkg.name}
                                    </CardTitle>
                                    <div className="mb-2">
                                        <span className="text-sm text-muted-foreground">From</span>
                                        <div className="text-4xl font-bold text-primary">
                                            AED {pkg.price}
                                            <span className="text-lg text-muted-foreground font-normal">/month</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className="w-full"
                                        variant={pkg.popular ? "default" : "outline"}
                                    >
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Post-pricing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-white mb-4">
                        Tell us your transaction volume and we'll suggest the most suitable plan.
                    </p>
                    <Button size="lg">
                        Send My Details
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
