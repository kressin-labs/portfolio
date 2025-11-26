import Container from "@/components/Container";
import projects from "@/lib/projects.tsx";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
