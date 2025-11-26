import Container from "@/components/Container";

export default function CVPage() {
  return (
    <Container>
      {/* Header/Contact Information (Add contact links for completeness?) */}
      <header className="mb-10 p-4 border-b-4 border-indigo-700 bg-gray-50 rounded-md">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1">Fabian Kreßin</h1>
        <p className="text-lg text-gray-600 mb-4">Software Engineer focused on Optimization and Algorithm Design</p>


      </header>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Education</h2>

        <div className="mb-6 border-l-4 border-gray-300 pl-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Technische Universität Berlin</h3>
            <span className="text-sm font-medium text-gray-600">Jun 2025</span>
          </div>
          <p className="text-gray-700 mb-1">Master of Science in Computer Science (Grade: 1.2) — Berlin, Germany</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Master’s thesis: <em>Exploring the parameterized complexity of forcing numbers</em></li>
          </ul>
        </div>

        <div className="mb-6 border-l-4 border-gray-300 pl-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Technische Universität Berlin</h3>
            <span className="text-sm font-medium text-gray-600">Jul 2023</span>
          </div>
          <p className="text-gray-700 mb-1">Bachelor of Science in Computer Science (Grade: 1.3) — Berlin, Germany</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Bachelor’s thesis: <em>Development of an efficient algorithm for computing forcing numbers on outerplanar graphs</em></li>
            <li>
              Co-author of peer-reviewed paper in <em>Discrete Applied Mathematics</em> (2025):
              <a className="text-blue-600 hover:underline ml-1" href="https://doi.org/10.1016/j.dam.2025.06.063" target="_blank" rel="noopener noreferrer">
                doi.org/10.1016/j.dam.2025.06.063
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Experience</h2>

        <div className="mb-6 border-l-4 border-gray-300 pl-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Python Developer (Part-time, Hybrid)</h3>
            <span className="text-sm font-medium text-gray-600">Apr 2024 – Present</span>
          </div>
          <p className="text-gray-700 mb-1">Datalyze Solutions GmbH — Berlin, Germany</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
            <li><strong>Optimization:</strong> Designed and implemented algorithms for complex task-scheduling and resource-assignment problems.</li>
            <li><strong>Core Development:</strong> Developed a high-performance CP-SAT solver using <strong>Google OR-Tools</strong>, including multi-goal optimization and preprocessing stages.</li>
            <li><strong>Quality Assurance:</strong> Created comprehensive test suites to verify functionality and evaluate solver performance.</li>
            <li><strong>Tooling:</strong> Set up and configured tools for computing and visualizing 3D models derived from video or picture collections.</li>
          </ul>
        </div>

        <div className="mb-6 border-l-4 border-gray-300 pl-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Teaching Assistant</h3>
            <span className="text-sm font-medium text-gray-600">Nov 2021 – Sep 2024</span>
          </div>
          <p className="text-gray-700 mb-1">Technische Universität Berlin — Berlin, Germany</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
            <li>Assisted in teaching courses on linear algebra, digital circuit optimization, and computational complexity.</li>
            <li>Supervised tutorials, prepared, and graded exercises and exams.</li>
            <li>Supported students in understanding advanced theoretical concepts.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Selected Projects</h2>

        {/* Inventory & Shopping App (In Progress) */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          {/* Note: changed header class for visual distinction */}
          <h3 className="text-xl font-semibold text-indigo-600">In Progress: Full-Stack Inventory & Shopping App</h3>
          <p className="text-sm font-medium text-gray-600 mt-1">
            Technologies: React, Next.js, TypeScript, Spring Boot, Java, JWT Authentication
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
            <li>Building a full-stack inventory management system with user authentication and role-based access.</li>
            <li>Developing a secure backend using <strong>Spring Boot</strong>, <strong>Spring Security</strong>, and JWT-based session handling.</li>
            <li>Designing a modern frontend UI using <strong>React, Next.js</strong>, and global state management via custom providers.</li>
            <li>Implementing administrative and shopping features (product management, inventory adjustments, shopping cart).</li>
          </ul>
        </div>

        {/* SemanticWeb Integration (Completed) */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold">SemanticWeb Integration</h3>
          <p className="text-sm font-medium text-indigo-600 mt-1">
            Technologies: Java, JavaScript, Vue, W3C WoT
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
            <li>Developed a semantic data communication and storage system using <strong>W3C Web of Things (WoT)</strong> protocols.</li>
            <li>Built frontend and backend components enabling machine-readable communication between devices and services.</li>
          </ul>
        </div>


        {/* CI/CD & Deployment Infrastructure (Completed) */}
        <div className="pb-4">
          <h3 className="text-xl font-semibold">CI/CD & Deployment Infrastructure</h3>
          <p className="text-sm font-medium text-indigo-600 mt-1">
            Technologies: Docker, GitHub Actions, Cloudflare, Caddy, VPS
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
            <li>Set up and maintained personal infrastructure with <strong>Cloudflare</strong>, <strong>Caddy</strong>, and <strong>Docker</strong>.</li>
            <li>Implemented a continuous deployment pipeline using <strong>GitHub Actions</strong> to automatically deploy backends on a personal VPS and frontends on Cloudflare Pages.</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills - UPDATED */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Technical Skills</h2>
        <div className="text-gray-800">

          <h3 className="text-xl font-semibold mt-4 mb-2">Core Competencies</h3>
          <p className="mb-2"><strong className="font-semibold text-gray-900 w-32 inline-block">Programming:</strong> Python, Java, Haskell</p>
          <p className="mb-2"><strong className="font-semibold text-gray-900 w-32 inline-block">DevOps & Tools:</strong> Docker, Git, GitHub Actions, CI/CD, Caddy, Cloudflare, Unity</p>
          <p><strong className="font-semibold text-gray-900 w-32 inline-block">Web Basics:</strong> HTML, CSS, HTTP APIs</p>
          <p className="mb-2"><strong className="font-semibold text-gray-900 w-32 inline-block">Optimization:</strong> OR-Tools, Gurobi, Constraint Programming, Scheduling</p>

          {/* VISUAL DIFFERENTIATION APPLIED HERE */}
          <h3 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">Currently Exploring</h3>
          <p className="mb-2 text-sm italic text-gray-600">
            <strong className="font-semibold w-32 inline-block text-gray-700">Focus Areas:</strong> JavaScript/TypeScript, React, Next.js, Spring Boot
          </p>
          <p className="mb-2 text-sm italic text-gray-600">
            <strong className="font-semibold w-32 inline-block text-gray-700">Concepts:</strong> Advanced Frontend State Management, Modern Authentication Flows
          </p>

        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Languages</h2>
        <div className="ml-2 text-gray-800">
          <p>German (Native)</p>
          <p>English (Fluent)</p>
        </div>
      </section>
    </Container>
  );
}