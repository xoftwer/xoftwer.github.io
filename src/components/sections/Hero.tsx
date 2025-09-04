import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, pixelFloat } from "@/utils/animations";
import { personalInfo } from "@/data";

interface HeroProps {
  onScrollToProjects?: () => void;
  onScrollToContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToProjects,
  onScrollToContact,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-background)]/80 to-[var(--color-secondary)]/30" />

      {/* Floating pixel elements inspired by logo */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          variants={pixelFloat}
          animate="animate"
          className="absolute top-20 left-20 w-4 h-4 opacity-70 rounded-sm shadow-lg"
          style={{
            animationDelay: "0s",
            backgroundColor: "var(--color-secondary)",
            boxShadow: `0 10px 25px -5px ${`var(--color-secondary)`}40`,
          }}
        />
        <motion.div
          variants={pixelFloat}
          animate="animate"
          className="absolute top-40 right-32 w-3 h-3 opacity-60 rounded-sm shadow-md"
          style={{
            animationDelay: "1s",
            backgroundColor: "var(--color-accent)",
            boxShadow: `0 4px 15px -3px ${`var(--color-accent)`}30`,
          }}
        />
        <motion.div
          variants={pixelFloat}
          animate="animate"
          className="absolute bottom-32 left-1/4 w-2 h-2 opacity-50 rounded-sm shadow-sm"
          style={{
            animationDelay: "2s",
            backgroundColor: "var(--color-primary)",
            boxShadow: `0 2px 10px -2px ${`var(--color-primary)`}30`,
          }}
        />
        <motion.div
          variants={pixelFloat}
          animate="animate"
          className="absolute top-1/3 right-1/4 w-3 h-3 opacity-40 rounded-sm shadow-md"
          style={{
            animationDelay: "0.5s",
            backgroundColor: "var(--color-secondary)",
            boxShadow: `0 4px 15px -3px ${`var(--color-secondary)`}20`,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo-inspired code bracket decoration */}
        <motion.div
          className="text-4xl mb-4 opacity-70 font-mono"
          style={{ color: "var(--color-primary)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {"</>"}
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
          }}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-4"
          style={{ color: "var(--color-primary-light)" }}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="default"
            size="lg"
            onClick={onScrollToProjects}
            className="group"
          >
            <span className="relative z-10">View My Work</span>
          </Button>
          <Button
            variant="accent"
            size="lg"
            onClick={onScrollToContact}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={fadeInLeft}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.social.email}
            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="animate-bounce"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </motion.div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
};
