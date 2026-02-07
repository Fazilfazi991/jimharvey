import { PageHero } from "@/components/layout/PageHero";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function TermsConditionsPage() {
    return (
        <>
            <PageHero
                title="Terms & Conditions"
                subtitle="Rules and regulations for using our services."
                backgroundImage="/images/contact-hero.jpg"
            />

            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing this website and using the services of Jim Harvey Accounting & Bookkeeping, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website and services.
                        </p>

                        <h2>2. Services</h2>
                        <p>
                            Jim Harvey Accounting & Bookkeeping provides accounting, bookkeeping, VAT, corporate tax, and auditing services in compliance with UAE laws. All services are subject to a separate engagement agreement which details the scope, fees, and deliverables.
                        </p>

                        <h2>3. User Responsibilities</h2>
                        <p>
                            You agree to provide accurate, complete, and timely information necessary for us to perform our services effectively. You are responsible for ensuring your business complies with all applicable UAE laws and regulations.
                        </p>

                        <h2>4. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, and images, is the property of Jim Harvey Accounting & Bookkeeping and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                        </p>

                        <h2>5. Limitation of Liability</h2>
                        <p>
                            To the extent permitted by UAE law, Jim Harvey Accounting & Bookkeeping shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services, or for any errors or omissions in the information provided.
                        </p>

                        <h2>6. Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates, specifically the laws of the Emirate of Dubai. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the Dubai Courts.
                        </p>

                        <h2>7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
                        </p>

                        <h2>8. Contact Information</h2>
                        <p>
                            For any queries regarding these Terms and Conditions, please contact us at:
                        </p>
                        <p>
                            <strong>Jim Harvey Accounting & Bookkeeping</strong><br />
                            Al Qusais 2, Dubai, UAE<br />
                            Email: info@jhaccounting.ae<br />
                            Phone: +971 50 804 3876
                        </p>
                    </div>
                </div>
            </section>

            <LeadCapture />
        </>
    );
}
