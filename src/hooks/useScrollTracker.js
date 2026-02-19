import { useEffect, useState } from "react";

function getProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) {
    return 0;
  }
  return (window.scrollY / maxScroll) * 100;
}

function getActiveSection(sectionIds) {
  const thresholdPosition = window.scrollY + 120;

  for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
    const section = document.getElementById(sectionIds[i]);
    if (section && section.offsetTop <= thresholdPosition) {
      return sectionIds[i];
    }
  }

  return sectionIds[0];
}

export default function useScrollTracker(sectionIds) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    let isTicking = false;

    const updateState = () => {
      setScrollProgress(getProgress());
      setActiveSection(getActiveSection(sectionIds));
      isTicking = false;
    };

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateState);
        isTicking = true;
      }
    };

    updateState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return { scrollProgress, activeSection };
}
