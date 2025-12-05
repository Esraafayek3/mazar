import gallery1 from "@/assets/gallery-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <span className="inline-block text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0">
              مزار للأنتيكات
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-100">
              فن الأناقة
              <br />
              <span className="text-primary">في كل تفصيلة</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mr-0 mb-8 font-sans leading-relaxed animate-fade-up opacity-0 delay-200">
              نقدم لك أرقى التحف والأنتيكات بتصاميم فريدة تضفي لمسة من الفخامة على منزلك. 
              نوصل لأي مكان ونصنع القطعة التي تحلم بها.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-up opacity-0 delay-300">
              <a href="#gallery" className="btn-gold">
                اكتشف منتجاتنا
              </a>
              <a href="#contact" className="btn-outline-gold">
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up opacity-0 delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={gallery1}
                  alt="Mazar Antiques Collection"
                  className="w-full max-w-lg object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/50 rounded-full" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
