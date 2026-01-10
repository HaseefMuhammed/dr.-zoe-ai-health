import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Activity,
  Video,
  MessageSquare,
  Ear,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  {
    icon: Brain,
    title: "AI Health Consultation",
    description:
      "Advanced AI algorithms analyze your symptoms and health data to provide accurate preliminary diagnoses.",
    image: "feature-ai-consult.png",
    // Recommended size: 400×250
  },
  {
    icon: Activity,
    title: "Automated Measurements",
    description:
      "Integrated sensors automatically measure vital signs including blood pressure, heart rate, and more.",
    image: "feature-auto-measure.png",
    // Recommended size: 400×250
  },
  {
    icon: Video,
    title: "Tele-Doctor Video Call",
    description:
      "Connect instantly with certified healthcare professionals through secure video consultations.",
    image: "feature-video-call.png",
    // Recommended size: 400×250
  },
  {
    icon: MessageSquare,
    title: "Health Chatbot",
    description:
      "24/7 AI-powered chatbot ready to answer your health questions and assist with appointments.",
    image: "feature-chatbot.png",
    // Recommended size: 400×250
  },
  {
    icon: Ear,
    title: "Hearing Test",
    description:
      "Comprehensive audiometry tests to assess your hearing health with professional-grade accuracy.",
    image: "feature-hearing.png",
    // Recommended size: 400×250
  },
  {
    icon: Eye,
    title: "Eye Test",
    description:
      "Complete vision screening including visual acuity and color blindness assessments.",
    image: "feature-eye-test.png",
    // Recommended size: 400×250
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 80 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-40 bg-muted flex items-center justify-center overflow-hidden">
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
      {/* Recommended size: 400×250 */}
      <img 
        src={`/images/${src}`}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Hover gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="features" className="section-padding bg-muted/30 overflow-hidden relative" ref={containerRef}>
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Powerful <span className="text-primary">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Discover the comprehensive suite of AI-powered healthcare tools
            designed to revolutionize your health management.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                {/* Feature Image */}
                <FeatureImage src={feature.image} alt={feature.title} />

                {/* Feature Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <feature.icon className="w-4 h-4 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    Learn More
                    <motion.span
                      className="inline-block ml-1"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}