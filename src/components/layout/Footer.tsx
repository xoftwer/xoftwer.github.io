import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t py-8"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-surface)",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          © {new Date().getFullYear()} Rayan Reynaldo. Built with React,
          TypeScript, and Tailwind CSS.
        </p>
        <p
          className="text-xs mt-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Designed with passion and precision for an exceptional user
          experience.
        </p>
      </div>
    </footer>
  );
};
