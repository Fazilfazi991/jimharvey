"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
    const faqs = [
        {
            question: "Do you work with startups and small businesses?",
            answer: "Yes, our packages are specifically designed for SMEs and startups in the UAE, providing scalable support as you grow.",
        },
        {
            question: "Can you help if our books are behind?",
            answer: "Absolutely. We offer specialized cleanup and catch-up accounting services to fix backlogs, correct errors, and bring your books up to date.",
        },
        {
            question: "Do you support cloud accounting systems?",
            answer: "Yes, we support and recommend modern cloud-based platforms like Xero, QuickBooks, and Zoho Books to give you real-time visibility.",
        },
        {
            question: "How do you price your services?",
            answer: "Our pricing is flexible and depends on the volume of transactions and complexity of your business. We offer monthly or quarterly packages tailored to your needs.",
        },
    ];

    return (
        <section id="faq" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                </div>

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
        </section>
    );
}
