import { Truck, Palette, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Diverse Collection",
    description: "We offer the finest and most beautiful antique pieces in various shapes and designs to suit all tastes",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "We create the piece you dream of in the shape, size, and color you desire",
  },
  {
    icon: Truck,
    title: "Delivery Anywhere",
    description: "We deliver your order anywhere safely and quickly with guaranteed excellent condition",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Quality",
    description: "All our products are made from the finest materials with quality and durability guaranteed",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="section-title gold-underline pb-4">What We Offer</h2>
          <p className="section-subtitle mt-6">
            We always strive to provide the best services for our valued customers
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
