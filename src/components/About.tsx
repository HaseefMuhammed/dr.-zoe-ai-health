import { motion } from "framer-motion";
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

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Brain className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">about-dr-zoe.png</p>
                  <p className="text-sm text-muted-foreground">600 × 400</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About <span className="text-primary">Dr. Zoe</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dr. Zoe is a revolutionary AI-powered healthcare assistant designed
              to make health diagnostics accessible, fast, and accurate. Our
              platform combines cutting-edge artificial intelligence with
              professional medical expertise.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
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
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["HIPAA Compliant", "FDA Approved", "ISO Certified"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {badge}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
