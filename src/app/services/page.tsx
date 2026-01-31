import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Expert accounting, tax, and advisory solutions tailored for UAE businesses."
                backgroundImage="/images/services-hero.jpg"
            />

            <section className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.slug} className="group border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <CardDescription className="text-base text-muted-foreground mb-6">
                                        {service.shortDescription}
                                    </CardDescription>
                                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                        <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                                            Learn More <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCapture />
        </>
    );
}
