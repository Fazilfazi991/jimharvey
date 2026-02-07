import { PageHero } from "@/components/layout/PageHero";
import { LeadCapture } from "@/components/home/LeadCapture";

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHero
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your information."
                backgroundImage="/images/contact-hero.jpg"
            />

            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2>1. Introduction</h2>
                        <p>
                            Jim Harvey Accounting & Bookkeeping ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL).
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details provided voluntarily through forms.</li>
                            <li><strong>Financial Information:</strong> Data necessary for providing accounting, bookkeeping, and tax services, collected securely.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected via cookies and analytics tools.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use your data for the following purposes:</p>
                        <ul>
                            <li>To provide and manage our accounting and financial services.</li>
                            <li>To communicate with you regarding your inquiries, updates, and service-related matters.</li>
                            <li>To comply with UAE legal and regulatory requirements, including FTA and tax regulations.</li>
                            <li>To improve our website and user experience.</li>
                        </ul>

                        <h2>4. Data Protection and Security</h2>
                        <p>
                            We implement robust security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use secure servers and encryption protocols to safeguard sensitive financial information.
                        </p>

                        <h2>5. Sharing of Information</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. We may share your data with:
                        </p>
                        <ul>
                            <li><strong>Legal Authorities:</strong> When required by UAE law or to comply with a legal process.</li>
                            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our business (e.g., IT support, cloud hosting), subject to confidentiality agreements.</li>
                        </ul>

                        <h2>6. Your Rights</h2>
                        <p>Under the UAE PDPL, you have the right to:</p>
                        <ul>
                            <li>Access your personal data held by us.</li>
                            <li>Request correction of inaccurate or incomplete data.</li>
                            <li>Request deletion of your data ("Right to be Forgotten"), subject to legal retention periods.</li>
                            <li>Withdraw consent for data processing at any time.</li>
                        </ul>

                        <h2>7. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect site functionality.
                        </p>

                        <h2>8. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or UAE laws. The updated version will be posted on this page with the effective date.
                        </p>

                        <h2>9. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
