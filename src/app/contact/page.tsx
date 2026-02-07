import { PageHero } from "@/components/layout/PageHero";
import { LeadCapture } from "@/components/home/LeadCapture";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Get in touch with our team for expert financial advice and support."
                backgroundImage="/images/contact-hero.jpg"
            />

            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <Card className="text-center p-6 border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="text-muted-foreground">+971 50 804 3876</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-6 border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-muted-foreground">info@jhaccounting.ae</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-6 border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                <p className="text-muted-foreground">Al Qusais 2, Dubai</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <LeadCapture />
                    </div>
                </div>
            </section>
        </>
    );
}
