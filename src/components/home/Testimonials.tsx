"use client";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Testimonials() {
    const testimonials = [
        {
            quote: "Our accounts are now always up to date, and VAT submissions are no longer stressful. The team is responsive and explains everything clearly.",
            name: "Ahmed Al-Mansoori",
            role: "CEO, TechStart Dubai",
            rating: 5,
        },
        {
            quote: "They cleaned up years of backlogs and set up a simple reporting structure that our management can actually use.",
            name: "Sarah Johnson",
            role: "Operations Manager, Creative Agency",
            rating: 5,
        },
        {
            quote: "Professional, reliable, and truly understand the UAE market. Highly recommended for any SME.",
            name: "Mohammed Khan",
            role: "Founder, Retail Group",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-lg text-muted-foreground"
                    >
                        Businesses across Dubai and the wider UAE rely on Jim Harvey Accounting & Bookkeeping for dependable support and peace of mind.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Card className="bg-card border-none shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full">
                                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                                <CardContent className="pt-8 pb-8 px-8">
                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                                        ))}
                                    </div>
                                    <blockquote className="text-foreground text-base mb-6 italic leading-relaxed">
                                        &quot;{t.quote}&quot;
                                    </blockquote>
                                    <div>
                                        <p className="font-bold text-foreground">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
