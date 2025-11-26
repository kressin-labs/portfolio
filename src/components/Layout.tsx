import { Outlet } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* The <Outlet /> renders the specific page content (Home, CV, Projects) */}
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
}