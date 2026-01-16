"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const phoneNumber = "971542763828"; // WhatsApp format without + or spaces
    const message = "Hello! I'm interested in your accounting services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    );
}
