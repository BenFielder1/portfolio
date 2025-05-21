"use client"

// pages/planets.tsx
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

// Define types
interface SphereDetails {
    sphere: THREE.Mesh;
    orbitSpeed: number;
    orbitDegree: number;
    orbitRadius: number;
}

const Planets: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // This code only runs on the client
        if (!mountRef.current) return;

        // Get the actual dimensions from the container
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);

        mountRef.current.appendChild(renderer.domElement);

        // Cleanup function to handle component unmounting
        const cleanup = () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };

        // Camera and lights setup
        camera.position.set(0, 0, 10);
        camera.lookAt(0, 0, 0);

        const light = new THREE.PointLight(0xffffff, 1, 0);
        light.position.set(0, 0, 100);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        // Create orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Create celestial bodies
        const star = createSphere("yellow");
        const planet1 = createSphere("green");
        const planet2 = createSphere("purple");
        const planet3 = createSphere("blue");
        const planet4 = createSphere("red");
        const planet5 = createSphere("orange");

        // Configure celestial bodies
        star.position.set(0, 0, 0);

        planet1.scale.set(0.1, 0.1, 0.1);
        planet2.scale.set(0.18, 0.18, 0.18);
        planet3.scale.set(0.2, 0.2, 0.2);
        planet4.scale.set(0.11, 0.11, 0.11);
        planet5.scale.set(0.4, 0.4, 0.4);

        scene.add(star);
        scene.add(planet1);
        scene.add(planet2);
        scene.add(planet3);
        scene.add(planet4);
        scene.add(planet5);

        // Setup planets with their orbital properties
        const planetDetails: SphereDetails[] = [
            { sphere: planet1, orbitSpeed: 1, orbitDegree: 0, orbitRadius: 2 },
            { sphere: planet2, orbitSpeed: 0.9, orbitDegree: 0, orbitRadius: 3 },
            { sphere: planet3, orbitSpeed: 0.75, orbitDegree: 0, orbitRadius: 4 },
            { sphere: planet4, orbitSpeed: 0.55, orbitDegree: 0, orbitRadius: 5 },
            { sphere: planet5, orbitSpeed: 0.15, orbitDegree: 0, orbitRadius: 8 },
        ];

        const handleResize = (): void => {
            if (!mountRef.current) return;

            // Still use the container's dimensions, not window dimensions
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = function (): void {
            requestAnimationFrame(animate);

            // Update planet positions based on their orbits
            for (const planet of planetDetails) {
                planet.sphere.position.set(
                    planet.orbitRadius * Math.sin(planet.orbitDegree),
                    0,
                    planet.orbitRadius * Math.cos(planet.orbitDegree)
                );
                planet.orbitDegree += planet.orbitSpeed * Math.PI / 180;
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            cleanup();
        };
    }, []);

    return (
        <div>
            <div
                ref={mountRef}
                style={{
                    width: '95vw',     // Set your desired width
                    height: '90vh',    // Set your desired height 
                    margin: '0 auto'    // Center the canvas
                }}
            />
        </div>
    );
};

// Helper function to create a sphere
function createSphere(color: string): THREE.Mesh {
    const sphereMaterial = new THREE.MeshBasicMaterial({ color });
    const sphereGeometry = new THREE.SphereGeometry();
    return new THREE.Mesh(sphereGeometry, sphereMaterial);
}

// Use dynamic import to prevent SSR issues with Three.js
export default dynamic(() => Promise.resolve(Planets), {
    ssr: false
});