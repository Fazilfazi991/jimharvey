"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage = "/images/hero-bg-inner.jpg" }: PageHeroProps) {
    return (
        <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center bg-primary/90 overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-20"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
