import gallery5 from "@/assets/gallery-5.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
            <div className="relative">
              <img
                src={gallery5}
                alt="About Mazar Antiques"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="text-center">
                  <span className="block font-serif text-4xl font-bold text-primary">+500</span>
                  <span className="text-muted-foreground font-sans text-sm">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story with
              <span className="text-primary"> Art & Elegance</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Mazar Antiques is your premier destination for the finest decor and antique pieces that add a unique touch of elegance and luxury to your home.
              </p>
              <p>
                We believe that every piece tells a story, which is why we carefully select the finest materials and pay attention to the smallest details to offer you exceptional products that last for years.
              </p>
              <p>
                Whether you're looking for a ready-made piece or want a custom design that reflects your personal taste, our team is always ready to bring your vision to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+1000</span>
                <span className="text-muted-foreground font-sans text-sm">Pieces Sold</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+50</span>
                <span className="text-muted-foreground font-sans text-sm">Custom Designs</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+20</span>
                <span className="text-muted-foreground font-sans text-sm">Cities Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
