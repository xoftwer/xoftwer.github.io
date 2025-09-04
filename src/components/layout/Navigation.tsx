import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useResponsive } from "@/hooks";
import type { NavigationProps, NavItem } from "@/types";
import dayjs from "dayjs";
import logoImage from "@/assets/logo.png";

const defaultNavItems: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero", icon: Home },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "projects", label: "Projects", href: "#projects", icon: Briefcase },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export const Navigation: React.FC<NavigationProps> = ({
  items = defaultNavItems,
  activeSection = "hero",
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          backgroundColor: isScrolled
            ? "var(--color-background)95"
            : "transparent",
          borderColor: isScrolled ? "var(--color-surface)" : "transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() =>
              handleNavClick({ id: "hero", label: "Home", href: "#hero" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`${
                activeSection === "hero" ? "w-12 h-12" : "w-10 h-10"
              } rounded-lg overflow-hidden transition-all duration-300`}
              style={{ borderColor: "var(--color-primary)" }}
            >
              <OptimizedImage
                src={logoImage}
                alt="Xoftwer Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`}
                    style={{
                      color: isActive
                        ? "var(--color-text-primary)"
                        : "var(--color-text-secondary)",
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--color-primary-light)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--color-text-secondary)";
                      }
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{
                backgroundColor: isMenuOpen
                  ? "var(--color-primary)20"
                  : "transparent",
                color: "var(--color-text-primary)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-full border-l"
              style={{
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-surface)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Mobile Menu Header */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: "var(--color-surface)" }}
              >
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() =>
                    handleNavClick({ id: "hero", label: "Home", href: "#hero" })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`${
                      activeSection === "hero" ? "w-12 h-12" : "w-10 h-10"
                    } rounded-lg overflow-hidden transition-all duration-300`}
                    style={{ borderColor: "var(--color-primary)" }}
                  >
                    <OptimizedImage
                      src={logoImage}
                      alt="Xoftwer Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-6">
                {items.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`flex items-center space-x-4 w-full px-6 py-4 text-left transition-colors duration-200 ${
                        isActive ? "bg-opacity-10" : ""
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? "var(--color-primary)20"
                          : "transparent",
                        color: isActive
                          ? "var(--color-primary-light)"
                          : "var(--color-text-secondary)",
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.color =
                            "var(--color-primary-light)";
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.backgroundColor = "var(--color-primary)10";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.color =
                            "var(--color-text-secondary)";
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      {Icon && (
                        <div
                          className="w-5 h-5"
                          style={{
                            color: isActive
                              ? "var(--color-secondary)"
                              : "currentColor",
                          }}
                        >
                          <Icon className="w-full h-full" />
                        </div>
                      )}
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-1 h-6 rounded-full"
                          style={{ backgroundColor: "var(--color-secondary)" }}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 border-t"
                style={{ borderColor: "var(--color-surface)" }}
              >
                <p
                  className="text-xs text-center"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Built by Rayan Reynaldo
                </p>
                <p
                  className="text-xs text-center mt-1"
                  style={{ color: "var(--color-primary-light)" }}
                >
                  © {dayjs().year()} Xoftwer
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
