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
    description: "Begin your comprehensive health assessment",
  },
  {
    icon: User,
    title: "Basic Details",
    description: "Enter your name, age, and contact info",
  },
  {
    icon: Ruler,
    title: "Auto Measurements",
    description: "Height and weight measured automatically",
  },
  {
    icon: HeartPulse,
    title: "Sensor Data",
    description: "BPM, SpO2, temperature readings",
  },
  {
    icon: MessageCircle,
    title: "Symptom Input",
    description: "Describe your symptoms to the AI",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced AI processes all data",
  },
  {
    icon: FileText,
    title: "Get Report",
    description: "Receive detailed health report via email",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding bg-foreground" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-background/60">
            Experience a seamless health checkup process in just 7 simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-background/10" />
              )}
              
              <div className="relative z-10 bg-background/5 rounded-xl p-4 border border-background/10 hover:bg-background/10 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary flex items-center justify-center mb-3">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-medium text-background/40 mb-1">
                  Step {index + 1}
                </div>
                <h3 className="font-semibold text-sm text-background mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-background/50 hidden md:block">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
