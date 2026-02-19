function TopNav({ sectionIds, activeSection, onNavigate, scrollProgress }) {
  return (
    <>
      <div className="scroll-progress-container" aria-hidden="true">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav aria-label="Section navigation">
        <ul className="nav_place">
          {sectionIds.map((sectionId) => (
            <li key={sectionId}>
              <a
                className={`nav_buttons ${
                  activeSection === sectionId ? "nav_active" : ""
                }`}
                href={`#${sectionId}`}
                onClick={(event) => onNavigate(event, sectionId)}
              >
                {sectionId}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default TopNav;
