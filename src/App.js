import "./App.css";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { RESUME_URL, SECTION_IDS } from "./constants/siteConfig";
import useScrollTracker from "./hooks/useScrollTracker";

function App() {
  const { scrollProgress, activeSection } = useScrollTracker(SECTION_IDS);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="App">
      <div className="app-shell">
        <aside className="top-bar">
          <TopNav
            sectionIds={SECTION_IDS}
            activeSection={activeSection}
            onNavigate={handleNavigation}
            scrollProgress={scrollProgress}
          />
        </aside>

        <main className="app-main">
          <HeroSection resumeUrl={RESUME_URL} />
          <IntroductionSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}

export default App;
