import { Truck, Palette, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "تشكيلة متنوعة",
    description: "نوفر لك أرقى وأجمل قطع الأنتيكات بأشكال وتصاميم مختلفة تناسب جميع الأذواق",
  },
  {
    icon: Palette,
    title: "تصميم حسب الطلب",
    description: "نصنع لك القطعة التي تحلم بها بالشكل والحجم واللون الذي تريده",
  },
  {
    icon: Truck,
    title: "توصيل لأي مكان",
    description: "نوصل طلبك لأي مكان بأمان وسرعة مع ضمان وصول المنتج بحالة ممتازة",
  },
  {
    icon: ShieldCheck,
    title: "جودة مضمونة",
    description: "جميع منتجاتنا مصنوعة من أفضل الخامات مع ضمان الجودة والمتانة",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            خدماتنا
          </span>
          <h2 className="section-title gold-underline pb-4">ماذا نقدم لك</h2>
          <p className="section-subtitle mt-6">
            نسعى دائماً لتقديم أفضل الخدمات لعملائنا الكرام
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
