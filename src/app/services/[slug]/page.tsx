import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { LeadCapture } from "@/components/home/LeadCapture";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ToolsTechnology } from "@/components/services/ToolsTechnology";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return services.map(service => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

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

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border group">
                            <Image
                                src={service.heroImage}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                                    <service.icon className="h-6 w-6 text-white" />
                                </div>
                                <p className="text-white font-medium text-lg border-l-4 border-primary pl-3">
                                    Professional & Reliable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToolsTechnology />

            {/* Related Services */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Related Services
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive financial solutions for your business growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedServices.map((related) => (
                            <Link key={related.slug} href={`/services/${related.slug}`} className="block h-full group">
                                <Card className="h-full border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 transition-colors group-hover:bg-primary group-hover:text-white">
                                            <related.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                            {related.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {related.shortDescription}
                                        </p>
                                        <div className="flex items-center text-primary text-sm font-medium">
                                            Learn More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCapture />
        </>
    );
}
