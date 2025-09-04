import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";
import { personalInfo } from "@/data";
import type { SectionProps, ContactForm } from "@/types";
import emailjs from "@emailjs/browser";

const initialFormState: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "sending" | "success" | "error";

export const Contact: React.FC<SectionProps> = ({ className = "" }) => {
  const [form, setForm] = useState<ContactForm>(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send message to yourself
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TO_ME_TEMPLATE_ID,
        {
          email: form.email,
          name: form.name,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Optional: Send auto-reply to sender
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TO_SENDER_TEMPLATE_ID,
        {
          email: form.email,
          name: form.name,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Contact form submitted:", form);

      setForm(initialFormState);
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
    {
      icon: Phone,
      label: "Available",
      value: "Mon - Fri, 9AM - 5PM",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: personalInfo.social.github,
      color: "var(--color-primary)",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: personalInfo.social.facebook,
      color: "var(--color-secondary)",
    },
  ];

  return (
    <section id="contact" className={`py-20 bg-slate-800 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
              }}
            >
              Get In Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
              }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              {/* Contact Information */}
              <div className="space-y-6 z-10 relative">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4"
                    variants={scaleIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-secondary) 100%)`,
                        boxShadow: `0 10px 25px -5px var(--color-secondary)30`,
                      }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white transition-colors font-medium"
                          onMouseEnter={(e) =>
                            ((e.target as HTMLAnchorElement).style.color =
                              "var(--color-primary-light)")
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLAnchorElement).style.color =
                              "white")
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-700 z-10 relative">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover:scale-110 hover:bg-slate-600"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          social.color;
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgb(161 161 170)";
                        (e.currentTarget as HTMLAnchorElement).style.transform =
                          "scale(1)";
                      }}
                      variants={scaleIn}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.name ? "border-red-500" : "border-slate-600"
                      }`}
                      style={{}}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-primary)";
                        e.target.style.boxShadow = `0 0 0 2px var(--color-primary)40`;
                      }}
                      onBlur={(e) => {
                        if (!errors.name) {
                          e.target.style.borderColor = "rgb(71 85 105)";
                          e.target.style.boxShadow = "";
                        }
                      }}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? "border-red-500" : "border-slate-600"
                      }`}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-primary)";
                        e.target.style.boxShadow = `0 0 0 2px var(--color-primary)40`;
                      }}
                      onBlur={(e) => {
                        if (!errors.email) {
                          e.target.style.borderColor = "rgb(71 85 105)";
                          e.target.style.boxShadow = "";
                        }
                      }}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      errors.subject ? "border-red-500" : "border-slate-600"
                    }`}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = `0 0 0 2px var(--color-primary)40`;
                    }}
                    onBlur={(e) => {
                      if (!errors.subject) {
                        e.target.style.borderColor = "rgb(71 85 105)";
                        e.target.style.boxShadow = "";
                      }
                    }}
                    placeholder="Project discussion, collaboration, etc."
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-slate-600"
                    }`}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow = `0 0 0 2px var(--color-primary)40`;
                    }}
                    onBlur={(e) => {
                      if (!errors.message) {
                        e.target.style.borderColor = "rgb(71 85 105)";
                        e.target.style.boxShadow = "";
                      }
                    }}
                    placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 z-10" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Something went wrong. Please try again or contact me
                    directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
