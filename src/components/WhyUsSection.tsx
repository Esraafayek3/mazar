import { Award, Heart, Clock, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "High Quality",
    description: "We use the finest materials to ensure long-lasting products",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every piece is crafted with utmost care and attention to detail",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We commit to delivery schedules and ensure your complete satisfaction",
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description: "Our team is always available to answer your inquiries",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Why Us
          </span>
          <h2 className="section-title gold-underline pb-4">What Sets Us Apart</h2>
          <p className="section-subtitle mt-6">
            We always strive to provide a unique experience for every customer
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center shadow-md">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Have a Custom Design Idea?
            </h3>
            <p className="text-primary-foreground/90 font-sans text-lg mb-8 max-w-2xl mx-auto">
              Share your vision with us and we'll turn it into a unique art piece that matches your taste
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-sm font-sans font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
