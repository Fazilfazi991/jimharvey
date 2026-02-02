import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/#industries" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/90 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Resized Logo Container */}
          <div className="relative h-12 w-40 md:h-16 md:w-56">
            <Image
              src="/logo.png"
              alt="Jim Harvey Accounting"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - Changed breakpoint to xl */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            link.name === "Services" ? (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-white hover:text-primary transition-colors py-4 group-hover:text-primary"
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl p-2 flex flex-col gap-1 ring-1 ring-primary/5">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/80 transition-colors group/item"
                      >
                        <div className="mt-1 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <service.icon className="h-4 w-4 text-primary group-hover/item:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                            {service.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="h-px bg-border my-1" />
                    <Link
                      href="/services"
                      className="text-center text-sm font-medium text-primary p-2 hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA & Extras - Changed breakpoint to xl */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white/90 whitespace-nowrap">
            <Phone className="h-4 w-4 text-primary" />
            <span>+971 54 276 3828</span>
          </div>
          <Button className="font-semibold">Get a Free Consultation</Button>
        </div>

        {/* Mobile Menu - Changed breakpoint to xl */}
        <div className="flex xl:hidden items-center gap-4">
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
