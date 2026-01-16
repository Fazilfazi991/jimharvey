"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready for Clean, VAT‑Ready Books Every Month?
                        </h2>
                        <p className="text-xl text-white/90">
                            Get started with a free consultation and see how we can simplify your accounting.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                            Request Your Free Consultation
                        </h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="service-name">Name *</Label>
                                    <Input id="service-name" placeholder="Your name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="service-company">Company *</Label>
                                    <Input id="service-company" placeholder="Company name" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="service-email">Email *</Label>
                                    <Input id="service-email" type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="service-phone">Phone / WhatsApp *</Label>
                                    <Input id="service-phone" type="tel" placeholder="+971..." required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service-transactions">Estimated Monthly Transactions</Label>
                                <Input id="service-transactions" placeholder="e.g., 50-100" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service-message">Tell us about your business</Label>
                                <Textarea
                                    id="service-message"
                                    placeholder="What industry are you in? What accounting challenges are you facing?"
                                    className="min-h-[120px]"
                                />
                            </div>

                            <Button className="w-full text-lg h-14" size="lg">
                                Request Free Consultation
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">
                                We'll get back to you within 24 hours with a customized proposal.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
