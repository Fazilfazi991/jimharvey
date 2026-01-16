"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function LeadCapture() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-primary/5 border-t border-primary/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Ready to Get Your Accounts Under Control?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Share a few details and the team will get back to you with options tailored to your business.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold">
                                    P
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Phone / WhatsApp</p>
                                    <p className="text-muted-foreground">+971 ...</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold">
                                    E
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Email</p>
                                    <p className="text-muted-foreground">contact@jimharvey.ae</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold">
                                    L
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Office Location</p>
                                    <p className="text-muted-foreground">Dubai, UAE</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-background rounded-2xl shadow-xl border border-border p-8"
                    >
                        <h3 className="text-xl font-bold text-foreground mb-6">Request a Free Consultation</h3>
                        <form className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Company name" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                                    <Input id="phone" type="tel" placeholder="+971..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Input id="industry" placeholder="e.g. Retail, Service,..." />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" />
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    I agree to the <span className="underline hover:text-primary">Privacy Policy</span> and consent to being contacted.
                                </Label>
                            </div>

                            <Button className="w-full text-lg h-12 mt-4">
                                Request Consultation
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
