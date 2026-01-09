import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Dr. Zoe?",
    answer:
      "Dr. Zoe is an AI-powered healthcare assistant that provides comprehensive health diagnostics, automated vital sign measurements, and tele-medical support. It combines advanced artificial intelligence with integrated health sensors to deliver accurate preliminary health assessments.",
  },
  {
    question: "How does AI diagnosis work?",
    answer:
      "Our AI diagnosis system analyzes data collected from integrated sensors (blood pressure, heart rate, SpO2, temperature) along with your symptoms and medical history. The AI uses advanced machine learning algorithms trained on millions of medical cases to provide preliminary health assessments, always verified by medical professionals.",
  },
  {
    question: "Is this technology safe?",
    answer:
      "Absolutely. Dr. Zoe adheres to strict medical safety standards and is HIPAA compliant, FDA approved, and ISO certified. All data is encrypted and stored securely. The AI provides preliminary assessments only, and all diagnoses are verified by licensed healthcare professionals.",
  },
  {
    question: "Can I share my health reports?",
    answer:
      "Yes, all health reports can be easily shared. You can download PDF versions, email them directly to your doctor, or share them with family members through our secure sharing feature. Reports are stored in your personal health dashboard for future reference.",
  },
  {
    question: "Where can I access the Dr. Zoe app?",
    answer:
      "Dr. Zoe is available through dedicated kiosks in clinics, pharmacies, and healthcare facilities. We also offer a mobile app for iOS and Android for home health monitoring. For full diagnostic capabilities, visit one of our kiosk locations.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about Dr. Zoe.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-3 text-sm">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
