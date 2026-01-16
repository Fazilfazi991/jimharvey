"use client";

import { Building2, Rocket, ShoppingCart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function IdealClients() {
    const clientTypes = [
        {
            icon: Rocket,
            title: "Startups",
            description: "New businesses that need clean books from day one"
        },
        {
            icon: ShoppingCart,
            title: "E-commerce",
            description: "Online retailers with high transaction volumes"
        },
        {
            icon: Briefcase,
            title: "Service Businesses",
            description: "Consultants, agencies, and professional services"
        },
        {
            icon: Building2,
            title: "SMEs",
            description: "Established companies looking to outsource accounting"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-foreground/95">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Who This Service Is For
                        </h2>
                        <p className="text-lg text-white/80">
                            Perfect for UAE businesses that need clean books for VAT/FTA, don't want to hire a full-time accountant, and want monthly numbers for better decisions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {clientTypes.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-background rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
                        >
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <client.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{client.title}</h3>
                            <p className="text-muted-foreground text-sm">{client.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
