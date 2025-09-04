import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, hoverScale } from "@/utils/animations";
import { projects } from "@/data";
import type { SectionProps, Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group border border-slate-700 z-10 relative"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-primary)";
        e.currentTarget.style.boxShadow = `0 25px 50px -12px var(--color-secondary)20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgb(71 85 105)";
        e.currentTarget.style.boxShadow = "";
      }}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      {...hoverScale}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-64">
        <OptimizedImage
          src={project.imageUrl || "/assets/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 text-slate-900 px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--color-secondary), var(--color-accent))`,
              boxShadow: `0 10px 25px -5px var(--color-secondary)40`,
            }}
          >
            <Star className="w-4 h-4 mr-1" />
            Featured
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-xl font-bold text-white transition-colors"
            onMouseEnter={(e) =>
              ((e.target as HTMLHeadingElement).style.color =
                "var(--color-primary-light)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLHeadingElement).style.color = "white")
            }
          >
            {project.title}
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            {project.createdAt.getFullYear()}
          </span>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium hover:bg-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              className="px-3 py-1 text-white rounded-full text-xs font-medium"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
              }}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.demoUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.demoUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const Projects: React.FC<SectionProps> = ({ className = "" }) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className={`py-20 bg-slate-900 ${className}`}>
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
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Discover some of my favorite projects that showcase my skills and
              passion for development.
            </p>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
              }}
            />
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <>
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Other Projects
                </h3>
                <div className="w-16 h-0.5 bg-slate-600 mx-auto rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={featuredProjects.length + index}
                  />
                ))}
              </div>
            </>
          )}

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 z-10 relative"
            variants={fadeInUp}
          >
            <p className="text-slate-300 mb-6">Want to see more of my work?</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://github.com/xoftwer", "_blank")
              }
            >
              <FaGithub className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
