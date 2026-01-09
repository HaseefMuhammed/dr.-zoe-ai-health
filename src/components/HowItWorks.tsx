import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  PlayCircle,
  User,
  Ruler,
  HeartPulse,
  MessageCircle,
  Brain,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    title: "Start Health Check",
    description: "Begin your comprehensive health assessment with a simple tap",
  },
  {
    icon: User,
    title: "Basic Details",
    description: "Enter your name, age, and contact information",
  },
  {
    icon: Ruler,
    title: "Automatic Measurements",
    description: "Height and weight are measured automatically by sensors",
  },
  {
    icon: HeartPulse,
    title: "Sensor Data Collection",
    description: "BPM, SpO2, temperature, and blood pressure readings",
  },
  {
    icon: MessageCircle,
    title: "Symptom Input",
    description: "Describe your symptoms or concerns to the AI assistant",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced AI processes all data for comprehensive analysis",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description: "Receive detailed health report via email instantly",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="section-padding bg-foreground text-background"
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg opacity-70">
            Experience a seamless health checkup process in just 7 simple steps.
            From start to finish, Dr. Zoe guides you through every step.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <div
                    className={`bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-colors ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    } max-w-md`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="opacity-70 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-bg items-center justify-center text-primary-foreground font-bold text-lg z-10 border-4 border-foreground">
                  {index + 1}
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden absolute -left-2 top-6 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>

                {/* Empty Space for Layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
