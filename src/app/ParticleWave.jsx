"use client";

import React, { useEffect } from "react";

const ParticleWave = () => {
  useEffect(() => {
    // Dynamically load the particles.js script
    const loadParticles = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#1e90ff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#1e90ff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",  // Mouse interaction: repulse on hover
                },
                onclick: {
                  enable: true,
                  mode: "push",  // Add particles on click
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,  // Distance to repulse particles
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,  // Number of particles added on click
                },
              },
            },
            retina_detect: true,
          });
        }
      };
      document.body.appendChild(script); // Append the script to the body
    };

    loadParticles(); // Initialize particles
  }, []);

  return <div id="particles-js" className="particle-hero-section"></div>;
};

export default ParticleWave;
