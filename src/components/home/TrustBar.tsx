import { ShieldCheck, Award } from "lucide-react";

export function TrustBar() {
    return (
        <section className="bg-secondary/30 py-12 border-b border-border">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Trusted by businesses across Dubai and the UAE
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                    {/* Placeholders for logos as per PRD */}
                    <div className="flex items-center gap-2 text-xl font-bold text-foreground/80">
                        <div className="h-8 w-8 bg-foreground/20 rounded-full" />
                        ClientLogo
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-foreground/80">
                        <div className="h-8 w-8 bg-foreground/20 rounded-full" />
                        Partner
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-foreground/80">
                        <div className="h-8 w-8 bg-foreground/20 rounded-full" />
                        Agency
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-foreground/80">
                        <div className="h-8 w-8 bg-foreground/20 rounded-full" />
                        Startup
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground/70">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <span>Secure & Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>10+ Years Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
