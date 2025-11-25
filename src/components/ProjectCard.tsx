import Link from "next/link";

export default function ProjectCard({ project }: any) {
  const hasDetailPage = Boolean(project.content);

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      {/* Title row */}
      {hasDetailPage ? (
        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-xl font-bold hover:underline">{project.title}</h2>
        </Link>
      ) : (
        <h2 className="text-xl font-bold">{project.title}</h2>
      )}

      {/* Description */}
      <p className="text-gray-600 mt-2">{project.description}</p>

      {/* Optional external link */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          className="text-blue-600 underline mt-3 block"
          rel="noopener noreferrer"
        >
          Live Demo ↗
        </a>
      )}
    </div>
  );
}
