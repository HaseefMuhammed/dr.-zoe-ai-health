import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" 
      />

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Healthcare
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
            >
              Your AI Doctor for{" "}
              <span className="text-primary">Health</span> &{" "}
              <span className="text-secondary">Diagnostics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Fast, Automated Health Checkups & Tele-Medical Support. Experience
              the future of healthcare with AI-powered diagnostics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Dr. Zoe Demo</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Demo video placeholder</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex gap-10 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "50K+", label: "Patients" },
                { value: "99%", label: "Accuracy" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
              className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] border border-border"
            >
              {/* Image placeholder - just add your image to public/images/ */}
              <img 
                src="/images/hero-dr-zoe.png" 
                alt="Dr. Zoe AI Doctor"
                className="w-full h-full object-cover"
              />
              {/* REMOVE THIS: Preferred size 800×500 */}
              <p className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                800 × 500
              </p>
            </motion.div>

            {/* Floating Cards with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -left-4 bg-card shadow-lg rounded-xl p-4 border border-border"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">❤️</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Heart Rate</p>
                  <p className="text-lg font-semibold text-foreground">72 BPM</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-xl p-4 border border-border"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary text-lg">🫁</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">SpO2 Level</p>
                  <p className="text-lg font-semibold text-foreground">98%</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
