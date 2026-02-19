import Card from "../Card";
import projects from "../data/projects";

function ProjectsSection() {
  return (
    <section className="sections1" id="Projects">
      <h1 className="Header">Projects</h1>
      <div className="cards-matrix">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={
              project.image ? `${process.env.PUBLIC_URL}${project.image}` : null
            }
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
