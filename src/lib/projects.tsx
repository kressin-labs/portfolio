import SplatViewer from "@/components/GaussianSplatting/SplatViewer.jsx";
const projects = [
  {
    slug: "cp-scheduling-solver",
    title: "CP-SAT Scheduling Solver (Upcoming)",
    description: "Advanced multi-objective scheduling engine built with OR-Tools.",
    content: (
      <div>
        <p>
          Upcoming.
        </p>
      </div>
    ),
  },
  {
    slug: "gaussian-splatting-viewer",
    title: "Gaussian Splatting 3D Viewer (Upcoming)",
    description: "Real-time 3D splat viewer with Three.js / SparkJS.",
    content: (
      <div><p>Upcoming.</p>
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <SplatViewer />
        </div>
      </div>

    ),
  },
  {
    slug: "inventory-app",
    title: "Inventory Management App (In development)",
    description: "Full-stack inventory management system with authentication, admin tools, and a secure backend.",
    url: "https://inventory.fabiankressin.com",
    content: (
      <div className="space-y-4">
        <p>
          A full-stack application built with React, Next.js, and Spring Boot, featuring user authentication,
          admin tools, product management.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Role-based access: admin panel + user shopping interface</li>
          <li>Product management (create, delete, edit inventory levels)</li>
          <li>Shopping cart with quantity controls (1–5 per product)</li>
          <li>Batch purchasing of all items in the cart</li>
          <li>Backend implemented using Spring Boot + JWT authentication</li>
          <li>Frontend state management via React context providers</li>
        </ul>

        <a
          href="https://inventory.fabiankressin.com"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          👉 Visit the live app
        </a>
      </div>
    ),
  },

];

export default projects;
