import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mazar Antiques"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0">
          Mazar Antiques
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-100">
          Elegance in
          <br />
          <span className="text-primary">Every Detail</span>
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed animate-fade-up opacity-0 delay-200">
          Discover the finest antiques and unique designs that add a touch of luxury to your home. 
          We deliver anywhere and craft custom pieces just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-300">
          <a href="#gallery" className="btn-gold">
            Explore Collection
          </a>
          <a href="#contact" className="btn-outline-gold !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
