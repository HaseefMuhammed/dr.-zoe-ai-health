import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const features = [
  {
    icon: Brain,
    title: "AI Health Consultation",
    description:
      "Advanced AI algorithms analyze your symptoms and health data to provide accurate preliminary diagnoses.",
    image: "feature-ai-consult.png",
  },
  {
    icon: Activity,
    title: "Automated Measurements",
    description:
      "Integrated sensors automatically measure vital signs including blood pressure, heart rate, and more.",
    image: "feature-auto-measure.png",
  },
  {
    icon: Video,
    title: "Tele-Doctor Video Call",
    description:
      "Connect instantly with certified healthcare professionals through secure video consultations.",
    image: "feature-video-call.png",
  },
  {
    icon: MessageSquare,
    title: "Health Chatbot",
    description:
      "24/7 AI-powered chatbot ready to answer your health questions and assist with appointments.",
    image: "feature-chatbot.png",
  },
  {
    icon: Ear,
    title: "Hearing Test",
    description:
      "Comprehensive audiometry tests to assess your hearing health with professional-grade accuracy.",
    image: "feature-hearing.png",
  },
  {
    icon: Eye,
    title: "Eye Test",
    description:
      "Complete vision screening including visual acuity and color blindness assessments.",
    image: "feature-eye-test.png",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground">
            Discover the comprehensive suite of AI-powered healthcare tools
            designed to revolutionize your health management.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300">
                {/* Feature Image Placeholder */}
                <div className="relative h-40 bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <feature.icon className="w-10 h-10 mx-auto mb-2 text-muted-foreground/50" />
                    <p className="text-xs text-muted-foreground">
                      {feature.image}
                    </p>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
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
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
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
