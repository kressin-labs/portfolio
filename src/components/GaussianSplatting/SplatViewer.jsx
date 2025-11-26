"use client";
import React, { useEffect, useRef } from 'react';


const SplatViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, butterfly;
    let frameId;

    if (typeof window.THREE === 'undefined' || typeof window.SplatMesh === 'undefined') {
        console.warn("THREE.js or SplatMesh not yet available from importmap.");
        return;
    }
    
    // --- SparkJS/Three.js Setup Logic ---
    const THREE = window.THREE;
    const { SplatMesh } = window['@sparkjsdev/spark'];

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0; 

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
    }


    const splatURL = "https://sparkjs.dev/assets/splats/butterfly.spz";
    new SplatMesh({ url: splatURL }).then(mesh => {
        butterfly = mesh;
        
        butterfly.quaternion.set(1, 0, 0, 0);
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
  }, []); 

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SplatViewer;