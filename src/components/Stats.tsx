import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Stethoscope, Target, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Patients Served",
  },
  {
    icon: Stethoscope,
    value: 120000,
    suffix: "+",
    label: "Health Consultations",
  },
  {
    icon: Target,
    value: 99.2,
    suffix: "%",
    label: "Accuracy Rate",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Support Hours",
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <span>
      {value % 1 !== 0 ? count.toFixed(1) : formatNumber(count)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.section 
      style={{ opacity }}
      className="py-20 border-y border-border relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary"
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted mb-4"
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-1"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
