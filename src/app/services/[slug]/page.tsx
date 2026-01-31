import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { LeadCapture } from "@/components/home/LeadCapture";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return services.map(service => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <PageHero
                title={service.title}
                subtitle={service.shortDescription}
            />

            <section className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.fullDescription}
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                            </div>
                                            <span className="text-base text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                                            </div>
                                            <span className="text-base text-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Graphic/Image replacement since actual images may be placeholders */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl border border-border">
                            {/* Using a placeholder or the heroImage if available */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/30 flex items-center justify-center">
                                <service.icon className="h-32 w-32 text-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LeadCapture />
        </>
    );
}
