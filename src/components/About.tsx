import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Video, Accessibility, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Health Diagnostics",
    description: "Advanced machine learning for accurate health assessments",
  },
  {
    icon: Cpu,
    title: "Automated Measurements",
    description: "Real-time data from integrated health monitoring devices",
  },
  {
    icon: Video,
    title: "Teleconsultation Support",
    description: "Connect with healthcare professionals via secure video",
  },
  {
    icon: Accessibility,
    title: "Accessibility Modes",
    description: "Inclusive design with multi-language support",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="about" className="section-padding overflow-hidden" ref={containerRef}>
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] border border-border"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center"
                  >
                    <Brain className="w-10 h-10 text-secondary" />
                  </motion.div>
                  <p className="text-lg font-medium text-foreground">about-dr-zoe.png</p>
                  <p className="text-sm text-muted-foreground">600 × 400</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative floating element */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"
            />
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              About <span className="text-primary">Dr. Zoe</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Dr. Zoe is a revolutionary AI-powered healthcare assistant designed
              to make health diagnostics accessible, fast, and accurate. Our
              platform combines cutting-edge artificial intelligence with
              professional medical expertise.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["HIPAA Compliant", "FDA Approved", "ISO Certified"].map(
                (badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {badge}
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
