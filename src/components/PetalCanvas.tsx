import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export const PetalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm blush, gold flake, and jasmine cream petal colors
    const colors = [
      'rgba(232, 188, 185, 0.45)', // Rose blush
      'rgba(243, 229, 227, 0.55)', // Pale petal
      'rgba(230, 202, 133, 0.35)', // Antique gold shimmer
      'rgba(255, 250, 240, 0.5)',  // Jasmine white
    ];

    const petalCount = window.innerWidth < 768 ? 10 : 16;
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 5 + Math.random() * 8,
      speedX: (Math.random() - 0.4) * 0.4,
      speedY: 0.3 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.8,
      opacity: 0.2 + Math.random() * 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      // Curved organic petal shape
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.5, -p.size / 2, 0, p.size * 1.5);
      ctx.bezierCurveTo(-p.size * 1.5, -p.size / 2, -p.size / 2, -p.size, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y * 0.005) * 0.2;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + 20) {
          petal.x = -20;
        } else if (petal.x < -20) {
          petal.x = width + 20;
        }

        drawPetal(petal);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 select-none"
      aria-hidden="true"
    />
  );
};
