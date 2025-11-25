// components/SplatViewer.jsx
"use client";
import React, { useEffect, useRef } from 'react';

// NOTE: You must use dynamic imports here because the actual three.js and @sparkjsdev/spark
// dependencies are loaded via the <script type="importmap"> tag in the head.
// These imports rely on the 'three' and '@sparkjsdev/spark' keys being defined globally.
// This example assumes these imports will work after the head script loads.

const SplatViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, butterfly;
    let frameId;

    // Check if THREE and SplatMesh are available from the importmap scripts
    if (typeof window.THREE === 'undefined' || typeof window.SplatMesh === 'undefined') {
        console.warn("THREE.js or SplatMesh not yet available from importmap.");
        // Often, the module environment is delayed. You might need to reload or defer.
        // For this example, we assume they eventually load or are ready upon component mounting.
        return;
    }
    
    // --- SparkJS/Three.js Setup Logic ---
    const THREE = window.THREE;
    const { SplatMesh } = window['@sparkjsdev/spark']; // Assuming Spark exports SplatMesh globally after load

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0; // Camera position is set by the butterfly's position later

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Append the renderer canvas to the ref'd DOM element
    if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
    }


    const splatURL = "https://sparkjs.dev/assets/splats/butterfly.spz";
    // NOTE: This .then() approach is common for loading SplatMesh since it's asynchronous
    new SplatMesh({ url: splatURL }).then(mesh => {
        butterfly = mesh;
        
        // Adjusting positions based on your original script
        butterfly.quaternion.set(1, 0, 0, 0); // This looks like it might invert the rotation
        butterfly.position.set(0, 0, -3);
        scene.add(butterfly);

        // Animation Loop
        const animate = (time) => {
            renderer.render(scene, camera);
            if (butterfly) {
                butterfly.rotation.y += 0.01;
            }
            frameId = requestAnimationFrame(animate);
        };
        animate();
    }).catch(error => {
        console.error("Failed to load SplatMesh:", error);
    });

    // --- Cleanup Function ---
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (renderer) {
        renderer.dispose();
        // Remove canvas from DOM
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Return a div where the canvas will be mounted
  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SplatViewer;