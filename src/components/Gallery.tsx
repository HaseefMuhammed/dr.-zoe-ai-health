import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

const galleryImages = [
  // Recommended size: 400×300
  { id: 1, src: "gallery-1.png", alt: "Dr. Zoe Kiosk Interface" },
  { id: 2, src: "gallery-2.png", alt: "Health Monitoring Dashboard" },
  { id: 3, src: "gallery-3.png", alt: "Tele-Doctor Consultation" },
  { id: 4, src: "gallery-4.png", alt: "AI Diagnosis Results" },
  { id: 5, src: "gallery-5.png", alt: "Mobile App Interface" },
  { id: 6, src: "gallery-6.png", alt: "Health Report Preview" },
];

function GalleryImage({ src, alt, aspectClass, onClick }: { src: string; alt: string; aspectClass: string; onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-xl overflow-hidden cursor-pointer border border-border bg-muted ${aspectClass}`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="w-full h-full absolute inset-0" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      )}
      {/* Recommended size: 400×300 */}
      <img 
        src={`/images/${src}`}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-foreground/60 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-10 h-10 mx-auto rounded-full bg-background/20 flex items-center justify-center mb-2">
            <ZoomIn className="w-5 h-5 text-background" />
          </div>
          <p className="text-background text-sm font-medium">{alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % galleryImages.length
        : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="section-padding overflow-hidden" ref={containerRef}>
      <div className="container mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground">
            Explore screenshots and visuals of Dr. Zoe in action.
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-4 md:space-y-6">
            {[galleryImages[0], galleryImages[3]].map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GalleryImage 
                  src={image.src} 
                  alt={image.alt} 
                  aspectClass={index === 0 ? "aspect-[4/5]" : "aspect-square"}
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-4 md:space-y-6 pt-8 md:pt-12">
            {[galleryImages[1], galleryImages[4]].map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GalleryImage 
                  src={image.src} 
                  alt={image.alt} 
                  aspectClass={index === 0 ? "aspect-square" : "aspect-[4/5]"}
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y1 }} className="space-y-4 md:space-y-6 hidden md:block">
            {[galleryImages[2], galleryImages[5]].map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <GalleryImage 
                  src={image.src} 
                  alt={image.alt} 
                  aspectClass={index === 0 ? "aspect-[4/5]" : "aspect-square"}
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-background hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border">
                {selectedImage !== null && (
                  <img 
                    src={`/images/${galleryImages[selectedImage].src}`}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </motion.button>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}