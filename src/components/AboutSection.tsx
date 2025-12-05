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
                  <span className="text-muted-foreground font-sans text-sm">عميل سعيد</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-right">
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              من نحن
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              قصتنا مع
              <span className="text-primary"> الفن والأناقة</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                مزار للأنتيكات هو وجهتك الأولى للحصول على أرقى قطع الديكور والأنتيكات التي تضفي لمسة فريدة من الأناقة والفخامة على منزلك.
              </p>
              <p>
                نحن نؤمن بأن كل قطعة تحكي قصة، ولذلك نحرص على اختيار أجود المواد وأدق التفاصيل لنقدم لك منتجات استثنائية تدوم لسنوات طويلة.
              </p>
              <p>
                سواء كنت تبحث عن قطعة جاهزة أو ترغب في تصميم خاص يعكس ذوقك الشخصي، فريقنا مستعد دائماً لتحقيق رؤيتك وتحويلها إلى واقع.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+1000</span>
                <span className="text-muted-foreground font-sans text-sm">قطعة مباعة</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+50</span>
                <span className="text-muted-foreground font-sans text-sm">تصميم مخصص</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary">+20</span>
                <span className="text-muted-foreground font-sans text-sm">محافظة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
