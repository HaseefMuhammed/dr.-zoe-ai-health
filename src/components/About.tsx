import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Video, Accessibility, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Health Diagnostics",
    description: "Advanced machine learning algorithms for accurate health assessments",
  },
  {
    icon: Cpu,
    title: "Automated Sensors & Measurements",
    description: "Real-time data collection from integrated health monitoring devices",
  },
  {
    icon: Video,
    title: "Teleconsultation Support",
    description: "Connect with healthcare professionals through secure video calls",
  },
  {
    icon: Accessibility,
    title: "Accessibility Modes",
    description: "Inclusive design supporting multiple languages and accessibility needs",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 p-8 aspect-[3/2]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Brain className="w-12 h-12 text-secondary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">about-dr-zoe.png</p>
                  <p className="text-sm text-muted-foreground">600 × 400</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl bg-primary/10" />
            <div className="absolute -z-20 -bottom-12 -left-12 w-full h-full rounded-3xl bg-secondary/10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Dr. Zoe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dr. Zoe is a revolutionary AI-powered healthcare assistant designed
              to make health diagnostics accessible, fast, and accurate. Our
              platform combines cutting-edge artificial intelligence with
              professional medical expertise to provide comprehensive health
              assessments from the comfort of your home.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
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
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {["HIPAA Compliant", "FDA Approved", "ISO Certified"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4" />
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
