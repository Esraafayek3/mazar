import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "فازات سيراميك أنيقة", category: "فازات" },
  { src: gallery2, alt: "فازات بإطار ذهبي", category: "فازات" },
  { src: gallery3, alt: "فازات فنية مميزة", category: "فازات" },
  { src: gallery4, alt: "فازات هندسية ذهبية", category: "فازات" },
  { src: gallery5, alt: "فازات لولبية أنيقة", category: "فازات" },
  { src: gallery6, alt: "فازات مودرن فريدة", category: "ديكور" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            معرضنا
          </span>
          <h2 className="section-title gold-underline pb-4">تشكيلتنا المميزة</h2>
          <p className="section-subtitle mt-6">
            اكتشف مجموعة من أجمل وأرقى قطع الأنتيكات والديكور
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary-foreground font-sans text-xs tracking-wider uppercase">
                  {image.category}
                </span>
                <h4 className="text-primary-foreground font-serif text-lg">
                  {image.alt}
                </h4>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <span className="text-primary-foreground text-xl">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline-gold">
            اطلب تشكيلتك الآن
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
