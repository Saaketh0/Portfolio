function HelloSection({ resumeUrl }) {
  return (
    <header className="App-header">
      <div className="hello-iframe-shell">
        <iframe
          src={`${process.env.PUBLIC_URL}/3d-text.html`}
          title="3D text animation"
          className="hello-iframe"
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
      <div className="hello-note-box">My Name Is Interactable With Too!</div>
    </header>
  );
}

export default HelloSection;
