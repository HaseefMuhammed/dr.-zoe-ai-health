import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Healthcare Hub, Medical District, NY 10001",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@drzoe.ai",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="contact" className="section-padding bg-muted/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions about Dr. Zoe? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-md transition-all cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <info.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative Design Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 p-8 border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              <div className="relative text-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Mail className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">We're always here to help you with any questions</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.form
              id="submit-form"
              className="bg-card border border-border rounded-xl p-6"
              whileHover={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
            >
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="Name"
                      placeholder="John Doe"
                      className="bg-background"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="Email"
                      placeholder="john@example.com"
                      className="bg-background"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="Subject"
                    placeholder="How can we help?"
                    className="bg-background"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <Textarea
                    name="Message"
                    placeholder="Tell us more..."
                    className="bg-background min-h-[120px]"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 h-11"
                    disabled={isSubmitted}
                  >
                    <motion.span
                      className="flex items-center justify-center"
                      animate={isSubmitted ? { scale: [1, 1.1, 1] } : {}}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 w-4 h-4" />
                          Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}