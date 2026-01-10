import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Project Lead",
    image: "team-lead.png",
    // Recommended size: 250×250
    bio: "Healthcare innovation expert with 15+ years experience",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Alex Rodriguez",
    role: "Lead Developer",
    image: "team-developer.png",
    // Recommended size: 250×250
    bio: "Full-stack engineer specializing in AI/ML healthcare apps",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emily Watson",
    role: "UI/UX Designer",
    image: "team-designer.png",
    // Recommended size: 250×250
    bio: "Award-winning designer focused on healthcare interfaces",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Michael Park",
    role: "Research Consultant",
    image: "team-research.png",
    // Recommended size: 250×250
    bio: "Medical research specialist ensuring clinical accuracy",
    social: { linkedin: "#", twitter: "#" },
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 60, rotateX: -15 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

function TeamImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="w-full h-full absolute inset-0" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      )}
      {/* Recommended size: 250×250 */}
      <img 
        src={`/images/${src}`}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground">
            The brilliant minds behind Dr. Zoe, combining medical expertise with
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Team Image */}
                <div className="relative overflow-hidden">
                  <TeamImage src={member.image} alt={member.name} />

                  {/* Social Links Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-foreground/70 flex items-center justify-center"
                  >
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-background" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-background" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Github className="w-4 h-4 text-background" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="p-4 text-center">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="font-semibold text-foreground mb-0.5"
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}