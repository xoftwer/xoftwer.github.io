import { motion } from "framer-motion";
import { Code, Database, Globe, Zap } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";
import { personalInfo, skills, experiences } from "@/data";
import type { SectionProps } from "@/types";

const skillCategories = {
  Frontend: { icon: Globe, color: "var(--color-primary)" },
  Backend: { icon: Database, color: "var(--color-secondary)" },
  Languages: { icon: Code, color: "var(--color-primary-light)" },
  Tools: { icon: Zap, color: "var(--color-accent)" },
  DevOps: { icon: Database, color: "var(--color-primary)" },
  Database: { icon: Database, color: "var(--color-secondary)" },
};

export const About: React.FC<SectionProps> = ({ className = "" }) => {
  return (
    <section id="about" className={`py-20 bg-slate-800 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
              }}
            >
              About Me
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
              }}
            />
          </motion.div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div className="order-2 lg:order-1" variants={scaleIn}>
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-2xl rotate-6 scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
                  }}
                ></div>
                <OptimizedImage
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              className="order-1 lg:order-2 space-y-6"
              variants={fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Hi! I'm {personalInfo.name.split(" ")[0]}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-primary-light)" }}
                  >
                    Location:
                  </span>
                  <p className="text-slate-300 z-10 relative">
                    {personalInfo.location}
                  </p>
                </div>
                <div>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-primary-light)" }}
                  >
                    Email:
                  </span>
                  <p className="text-slate-300 z-10 relative">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div className="mb-20 z-10 relative" variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(skillCategories).map(
                ([category, { icon: Icon, color }]) => {
                  const categorySkills = skills.filter(
                    (skill) => skill.category === category
                  );
                  if (categorySkills.length === 0) return null;

                  return (
                    <motion.div
                      key={category}
                      className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 p-4 rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-300"
                      style={{}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--color-primary)";
                        e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--color-secondary)30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgb(71 85 105)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon
                        className="w-8 h-8 mb-2 mx-auto"
                        style={{ color }}
                      />
                      <h4 className="text-white font-semibold text-center text-sm mb-2">
                        {category}
                      </h4>
                      <div className="space-y-1">
                        {categorySkills.slice(0, 10).map((skill) => (
                          <div
                            key={skill.id}
                            className="text-xs text-slate-300 text-center"
                          >
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="z-10 relative">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Experience
            </h3>
            <div className="max-w-4xl mx-auto">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative pl-8 pb-12 last:pb-0"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline line */}
                  <div
                    className="absolute left-0 top-0 w-0.5 h-full last:hidden"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))`,
                    }}
                  />

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-6 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                      experience.current ? "animate-pulse shadow-lg" : ""
                    }`}
                    style={{
                      backgroundImage: experience.current
                        ? `linear-gradient(135deg, var(--color-secondary), var(--color-accent))`
                        : `linear-gradient(135deg, var(--color-primary), var(--color-primary-light))`,
                      boxShadow: experience.current
                        ? `0 4px 20px var(--color-secondary)30`
                        : "",
                    }}
                  />

                  {/* Content */}
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 p-6 rounded-lg ml-4 hover:from-slate-600 hover:to-slate-700 hover:border-teal-500/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {experience.position}
                        </h4>
                        <p
                          className="font-semibold"
                          style={{ color: "var(--color-primary-light)" }}
                        >
                          {experience.company}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full border ${
                          experience.current
                            ? ""
                            : "bg-slate-600/50 text-slate-300 border-slate-500/30"
                        }`}
                        style={
                          experience.current
                            ? {
                                backgroundColor: "#22c55e20",
                                color: "var(--color-secondary)",
                                borderColor: "#22c55e30",
                              }
                            : {}
                        }
                      >
                        {experience.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-slate-300 text-sm flex items-start"
                        >
                          <span
                            className="mr-2"
                            style={{ color: "var(--color-secondary)" }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-600 text-slate-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
