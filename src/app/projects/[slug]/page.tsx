import Container from "@/components/Container";
import projects from "@/lib/projects";

export default async function ProjectDetail(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>
      {project.content}
    </Container>
  );
}
