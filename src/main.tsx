import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './../styles/globals.css'; 

import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/projects/ProjectsPage';
import CVPage from '@/pages/cv/CVPage';
import ProjectDetail from '@/pages/projects/ProjectDetail';

const NotFound = () => <div className="p-8 text-center text-xl">404 - Page Not Found</div>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing */}
    <BrowserRouter>
      {/* Routes wraps all Route definitions */}
      <Routes>
        {/*
          The main Layout wraps all application pages.
          The 'element' prop renders the component.
        */}
        <Route path="/" element={<Layout />}>
          
          {/* Index Route: Renders the home page when the path is exactly "/" */}
          <Route index element={<HomePage />} />
          
          {/* Projects Route: Renders the projects page at /projects */}
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          
          {/* CV Route: Renders the CV page at /cv */}
          <Route path="cv" element={<CVPage />} />

          {/* Fallback Route: Matches any path not defined above */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);