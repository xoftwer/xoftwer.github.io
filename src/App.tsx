import { Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AppProvider } from "@/contexts";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Navigation, Footer, Background } from "@/components/layout";
import { Hero, About, Projects, Contact } from "@/components/sections";
import { useActiveSection } from "@/hooks";

function App() {
  const sectionIds = ["hero", "about", "projects", "contact"];
  const { activeSection, scrollToSection } = useActiveSection(sectionIds);

  return (
    <ErrorBoundary>
      <AppProvider>
        <div
          className="min-h-screen text-white overflow-x-hidden"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          {/* Navigation */}
          <Navigation
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />

          <Suspense
            fallback={
              <div
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundColor: "var(--color-background)" }}
              >
                <LoadingSpinner size="lg" />
              </div>
            }
          >
            <Background />

            <main>
              {/* Hero Section */}
              <Hero
                onScrollToProjects={() => scrollToSection("projects")}
                onScrollToContact={() => scrollToSection("contact")}
              />

              {/* About Section */}
              <About />

              {/* Projects Section */}
              <Projects />

              {/* Contact Section */}
              <Contact />

              {/* Footer */}
              <Footer />
            </main>
          </Suspense>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
