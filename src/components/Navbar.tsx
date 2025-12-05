import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mazar-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#services", label: "خدماتنا" },
    { href: "#gallery", label: "معرضنا" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Mazar Antiques" className="h-14 w-14 object-cover rounded-full" />
            <span className="font-serif text-2xl font-semibold text-foreground hidden sm:block">
              Mazar
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#contact" className="hidden md:block btn-gold text-sm">
            تواصل الآن
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-sans text-base py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-gold text-center mt-2">
                تواصل الآن
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
