"use client";

import { useState } from "react";

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
                                    <p className="text-muted-foreground">+971 50 804 3876</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold">
                                    E
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Email</p>
                                    <p className="text-muted-foreground">info@jhaccounting.ae</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold">
                                    L
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Office Location</p>
                                    <p className="text-muted-foreground">Al Qusais 2, Dubai</p>
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
                        <LeadForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
        terms: false,
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, terms: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        if (!formData.terms) {
            setStatus("error");
            setErrorMessage("Please agree to the Privacy Policy.");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    industry: "",
                    message: "",
                    terms: false,
                });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to submit form. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status === "success" && (
                <div className="p-4 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                    Thank you! Your request has been sent successfully. We'll be in touch shortly.
                </div>
            )}
            {status === "error" && (
                <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm font-medium">
                    {errorMessage}
                </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+971..." value={formData.phone} onChange={handleChange} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" placeholder="e.g. Retail, Service,..." value={formData.industry} onChange={handleChange} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" value={formData.message} onChange={handleChange} />
            </div>

            <div className="flex items-start gap-2 pt-2">
                <Checkbox id="terms" checked={formData.terms} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to the <span className="underline hover:text-primary">Privacy Policy</span> and consent to being contacted.
                </Label>
            </div>

            <Button type="submit" className="w-full text-lg h-12 mt-4" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Request Consultation"}
            </Button>
        </form>
    );
}
