import { motion } from "framer-motion";
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

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % galleryImages.length
        : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore screenshots and visuals of Dr. Zoe in action. See how our
            AI-powered healthcare solution transforms the patient experience.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2 text-muted-foreground opacity-50" />
                  <p className="text-sm font-medium text-foreground">
                    {image.src}
                  </p>
                  <p className="text-xs text-muted-foreground">400 × 300</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background font-medium">{image.alt}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-background" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-background hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                {selectedImage !== null && (
                  <div className="text-center text-background">
                    <ZoomIn className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-medium">
                      {galleryImages[selectedImage].src}
                    </p>
                    <p className="text-sm opacity-70">
                      {galleryImages[selectedImage].alt}
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-background" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-background" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
