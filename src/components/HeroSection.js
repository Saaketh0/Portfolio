function HeroSection({ resumeUrl }) {
  return (
    <header className="App-header">
      <div className="hero-iframe-shell">
        <iframe
          src={`${process.env.PUBLIC_URL}/3d-text.html`}
          title="3D text animation"
          className="hero-iframe"
        />
      </div>

      <a
        className="primary-resume-button"
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Here is my resume!
      </a>
    </header>
  );
}

export default HeroSection;
