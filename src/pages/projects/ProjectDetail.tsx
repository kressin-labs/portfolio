
import { useParams } from 'react-router-dom';
import Container from "@/components/Container";
import projects from "@/lib/projects.tsx";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.url && (
        <a 
          href={project.url} 
          // target="_blank" 
          // rel="noopener noreferrer" 
          className="text-blue-600 underline mb-2 block"
        >
          View Live Project
        </a>
      )}
      <p className="text-gray-700 mb-6">{project.description}</p>
      
      <div className="prose max-w-none"> 
        {project.content}
      </div>
    </Container>
  );
}