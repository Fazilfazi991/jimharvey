"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function ServiceFAQ() {
    const faqs = [
        {
            question: "Do you support cloud tools like Xero / QuickBooks?",
            answer: "Yes, we work with all major cloud accounting platforms including Xero, QuickBooks, Zoho Books, and Wave. We can also work with Excel or Google Sheets if that's what you prefer."
        },
        {
            question: "Can you catch up on previous months?",
            answer: "Absolutely. We offer specialized cleanup and catch-up services to bring your books up to date from any starting point, whether it's a few months or several years behind."
        },
        {
            question: "Is VAT filing included or separate?",
            answer: "Our monthly accounting packages include VAT-ready record keeping. VAT return preparation and filing can be added as a separate service or included in higher-tier packages."
        },
        {
            question: "How quickly can you onboard my business?",
            answer: "Most businesses are fully onboarded within 7 days. We'll review your current setup, configure your accounting system, and start processing your first month's transactions right away."
        },
        {
            question: "What if my transaction volume exceeds the package limit?",
            answer: "No problem. We'll discuss your actual volume and either adjust to a more suitable package or create a custom plan that fits your needs."
        },
        {
            question: "Do I need to be in Dubai to use your services?",
            answer: "Not at all. We serve businesses across the entire UAE. All our services are delivered remotely through secure cloud platforms and video calls."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about our monthly accounting services
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-lg font-semibold text-foreground text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
