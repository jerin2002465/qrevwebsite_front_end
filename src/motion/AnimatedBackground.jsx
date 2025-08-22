import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // vx: Math.random() * 0.5 - 0.25,
          // vy: Math.random() * 0.5 - 0.25,
          vx: Math.random() * 1 - 0.5, // was 0.5, now 1
          vy: Math.random() * 1 - 0.5,

          radius: 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#2A998D";

        ctx.fill();

        // Draw lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(42, 153, 141, 0.2)";

            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    createParticles();
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[500px] z-[-1]"
    />
  );
};

export default AnimatedBackground;
