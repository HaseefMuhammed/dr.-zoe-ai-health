import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github, User } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Project Lead",
    image: "team-lead.png",
    bio: "Healthcare innovation expert with 15+ years experience",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Alex Rodriguez",
    role: "Lead Developer",
    image: "team-developer.png",
    bio: "Full-stack engineer specializing in AI/ML healthcare apps",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emily Watson",
    role: "UI/UX Designer",
    image: "team-designer.png",
    bio: "Award-winning designer focused on healthcare interfaces",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Michael Park",
    role: "Research Consultant",
    image: "team-research.png",
    bio: "Medical research specialist ensuring clinical accuracy",
    social: { linkedin: "#", twitter: "#" },
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-background flex items-center justify-center">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">{member.image}</p>
                  </div>

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-background" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-background" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-9 h-9 rounded-full bg-background/20 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Github className="w-4 h-4 text-background" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-foreground mb-0.5">
                    {member.name}
                  </h3>
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
