import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/90 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-28 w-80 md:h-32 md:w-96">
            <Image
              src="/logo.png"
              alt="Jim Harvey Accounting"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-primary transition-colors hover:border-b-2 hover:border-primary py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Extras */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white/90 whitespace-nowrap">
            <Phone className="h-4 w-4 text-primary" />
            <span>+971 54 276 3828</span>
          </div>
          <Button className="font-semibold">Get a Free Consultation</Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="text-lg font-bold">Jim Harvey</Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button className="w-full">Get a Free Consultation</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
