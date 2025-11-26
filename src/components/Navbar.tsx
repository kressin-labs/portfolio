import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-semibold text-lg">Fabian Kreßin</Link>

        <div className="flex gap-6">
          <Link to="/cv">CV</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
