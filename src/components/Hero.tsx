import { motion } from "framer-motion";
import { Play, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-Powered Healthcare
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Your AI Doctor for{" "}
              <span className="text-primary">Health</span> &{" "}
              <span className="text-secondary">Diagnostics</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Fast, Automated Health Checkups & Tele-Medical Support. Experience
              the future of healthcare with AI-powered diagnostics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-10 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "50K+", label: "Patients" },
                { value: "99%", label: "Accuracy" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">hero-dr-zoe.png</p>
                  <p className="text-sm text-muted-foreground">800 × 500</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-card shadow-lg rounded-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">❤️</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Heart Rate</p>
                  <p className="text-lg font-semibold text-foreground">72 BPM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary text-lg">🫁</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">SpO2 Level</p>
                  <p className="text-lg font-semibold text-foreground">98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
