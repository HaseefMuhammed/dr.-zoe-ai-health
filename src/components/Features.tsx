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
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "AI Health Consultation",
    description:
      "Advanced AI algorithms analyze your symptoms and health data to provide accurate preliminary diagnoses and health recommendations.",
    image: "feature-ai-consult.png",
  },
  {
    icon: Activity,
    title: "Automated Measurements",
    description:
      "Integrated sensors automatically measure vital signs including height, weight, blood pressure, and more without manual input.",
    image: "feature-auto-measure.png",
  },
  {
    icon: Video,
    title: "Tele-Doctor Video Call",
    description:
      "Connect instantly with certified healthcare professionals through secure, high-quality video consultations.",
    image: "feature-video-call.png",
  },
  {
    icon: MessageSquare,
    title: "Health Chatbot",
    description:
      "24/7 AI-powered chatbot ready to answer your health questions, provide guidance, and assist with appointments.",
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
      "Complete vision screening including visual acuity, color blindness, and other essential eye health assessments.",
    image: "feature-eye-test.png",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the comprehensive suite of AI-powered healthcare tools
            designed to revolutionize your health management experience.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Feature Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-2 text-primary opacity-50" />
                    <p className="text-sm text-muted-foreground">
                      {feature.image}
                    </p>
                    <p className="text-xs text-muted-foreground">400 × 250</p>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Feature Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* First Aid Library CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border">
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg text-foreground">
                First Aid Library
              </h3>
              <p className="text-sm text-muted-foreground">
                Access comprehensive first aid guides and emergency protocols
              </p>
            </div>
            <Button className="ml-4 gradient-bg border-0">
              Explore Library
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
