import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github, User } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Project Lead",
    image: "team-lead.png",
    bio: "Healthcare innovation expert with 15+ years in medical technology",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Alex Rodriguez",
    role: "Lead Developer",
    image: "team-developer.png",
    bio: "Full-stack engineer specializing in AI/ML healthcare applications",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emily Watson",
    role: "UI/UX Designer",
    image: "team-designer.png",
    bio: "Award-winning designer focused on accessible healthcare interfaces",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Michael Park",
    role: "Research Consultant",
    image: "team-research.png",
    bio: "Medical research specialist ensuring clinical accuracy and compliance",
    social: { linkedin: "#", twitter: "#" },
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The brilliant minds behind Dr. Zoe, combining medical expertise with
            cutting-edge technology to revolutionize healthcare.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.image}
                    </p>
                    <p className="text-xs text-muted-foreground">250 × 250</p>
                  </div>

                  {/* Hover Overlay with Social Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-background" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-background" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Github className="w-5 h-5 text-background" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
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
