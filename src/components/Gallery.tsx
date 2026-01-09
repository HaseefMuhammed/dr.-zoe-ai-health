import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  { id: 1, src: "gallery-1.png", alt: "Dr. Zoe Kiosk Interface" },
  { id: 2, src: "gallery-2.png", alt: "Health Monitoring Dashboard" },
  { id: 3, src: "gallery-3.png", alt: "Tele-Doctor Consultation" },
  { id: 4, src: "gallery-4.png", alt: "AI Diagnosis Results" },
  { id: 5, src: "gallery-5.png", alt: "Mobile App Interface" },
  { id: 6, src: "gallery-6.png", alt: "Health Report Preview" },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

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

        {/* Gallery Grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-border bg-muted"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ZoomIn className="w-8 h-8 mx-auto mb-2 text-muted-foreground/30" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {image.src}
                  </p>
                </motion.div>
              </div>

              {/* Hover Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-foreground/60 flex items-center justify-center transition-opacity duration-300"
              >
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-10 h-10 mx-auto rounded-full bg-background/20 flex items-center justify-center mb-2"
                  >
                    <ZoomIn className="w-5 h-5 text-background" />
                  </motion.div>
                  <p className="text-background text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
                  <div className="text-center">
                    <ZoomIn className="w-12 h-12 mx-auto mb-4 text-muted-foreground/30" />
                    <p className="text-lg font-medium text-foreground">
                      {galleryImages[selectedImage].src}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {galleryImages[selectedImage].alt}
                    </p>
                  </div>
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
