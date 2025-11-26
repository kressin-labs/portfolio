
import Container from "@/components/Container";
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center space-y-6 mt-10">
        
        <img
          src="/images/profile.jpg"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
          alt="Profile"
        />
        {/* -------------------------------------- */}

        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Fabian Kreßin
        </h1>
        <p className="text-2xl font-semibold text-indigo-700 mt-1">
          Software Engineer
        </p>
        <div className="text-lg text-gray-600 max-w-3xl pt-2">
          <h3 className="text-xl font-bold mb-1">Focus Areas</h3>
          <p>Algorithm Implementation | Automated Deployment (CI/CD) | Python OR-Tools</p>
        </div>
        <div className="text-lg text-gray-600 max-w-3xl pt-2 border-t border-gray-200 mt-4 pt-4">
          <h3 className="text-xl font-bold mb-1 text-pink-600">Currently Learning</h3>
          <p>Typescript/React Frontend | Java/Spring Backend</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          (M.Sc. Computer Science, TU Berlin)
        </p>

        <div className="flex gap-4 mt-4">
          <Link className="btn" to="/cv">View CV</Link>
          <Link className="btn" to="/projects">Projects</Link>
        </div>
      </div>
    </Container>
  );
}