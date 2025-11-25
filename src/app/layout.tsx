import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fabian Kreßin – Portfolio",
  description: "Portfolio and project showcase by Fabian Kreßin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          STEP 1: Insert the Import Map into the <head> element.
          This must load before your SplatViewer component executes its JavaScript
          to ensure the 'three' and '@sparkjsdev/spark' imports are globally defined.
        */}
        <script
          type="importmap"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "imports": {
                  "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.178.0/three.module.js",
                  "@sparkjsdev/spark": "https://sparkjs.dev/releases/spark/0.1.10/spark.module.js"
                }
              }
            `,
          }}
        />
      </head>
      
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}