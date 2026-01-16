import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-primary-foreground pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 - Brand */}
                    {/* Brand Info */}
                    <div className="flex flex-col gap-4">
                        <div className="relative h-24 w-64">
                            <Image
                                src="/logo.png"
                                alt="Jim Harvey Accounting"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Accuracy, compliance, and clarity for UAE businesses.
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#industries" className="hover:text-primary transition-colors">Industries</Link></li>
                            <li><Link href="#resources" className="hover:text-primary transition-colors">Resources</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-primary transition-colors">Bookkeeping</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Accounting & Reporting</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">VAT Compliance</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Outsourced Accounting</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cleanup & Catch-up</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Dubai, UAE</li>
                            <li>+971 ...</li>
                            <li>contact@jimharvey.ae</li>
                        </ul>
                        <div className="pt-2">
                            <Link href="#" className="text-gray-300 hover:text-primary text-xs underline">Privacy Policy</Link>
                            <span className="mx-2 text-gray-500">|</span>
                            <Link href="#" className="text-gray-300 hover:text-primary text-xs underline">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Jim Harvey Accounting & Bookkeeping. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                        <Link href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
