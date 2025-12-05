import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/mazar-logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Mazar Antiques" className="h-16 w-16 object-cover rounded-full" />
              <div>
                <h3 className="font-serif text-2xl font-bold">Mazar</h3>
                <span className="text-primary-foreground/70 text-sm">Antiques</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed mb-6">
              وجهتك الأولى لأرقى قطع الأنتيكات والديكور. نصنع الجمال بين يديك.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "الرئيسية" },
                { href: "#services", label: "خدماتنا" },
                { href: "#gallery", label: "معرضنا" },
                { href: "#about", label: "من نحن" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 font-sans text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "فازات وأنتيكات",
                "تصميم حسب الطلب",
                "ديكورات منزلية",
                "توصيل لجميع المحافظات",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 font-sans text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <span className="text-primary-foreground/70 text-xs block">اتصل بنا</span>
                  <a href="tel:+201234567890" className="text-primary-foreground font-sans text-sm hover:text-primary transition-colors">
                    +20 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <span className="text-primary-foreground/70 text-xs block">راسلنا</span>
                  <a href="mailto:info@mazar.com" className="text-primary-foreground font-sans text-sm hover:text-primary transition-colors">
                    info@mazar.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <span className="text-primary-foreground/70 text-xs block">موقعنا</span>
                  <span className="text-primary-foreground font-sans text-sm">
                    مصر - جميع المحافظات
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 font-sans text-sm text-center">
              © {new Date().getFullYear()} Mazar Antiques. جميع الحقوق محفوظة.
            </p>
            <p className="text-primary-foreground/60 font-sans text-sm">
              صُنع بـ ❤️ في مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
