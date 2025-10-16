"use client";

import { useEffect, useRef, useState } from "react";

interface Dot {
  x: number;
  y: number;
  brightness: number;
  baseSize: number;
  alpha: number;
  randomSeed: number;
}

interface DotMatrixAvatarProps {
  src: string;
  size?: number;
  dotSize?: number;
  dotSpacing?: number;
  className?: string;
}

export default function DotMatrixAvatar({
  src,
  size = 200,
  dotSize = 3,
  dotSpacing = 6,
  className = "",
}: DotMatrixAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;
    image.onload = () => {
      imageRef.current = image;
      setImageLoaded(true);
    };

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [src]);

  useEffect(() => {
    if (!imageLoaded || !canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // Create dots from image
    const createDots = () => {
      if (!imageRef.current) return;

      // Create temporary canvas to get image data
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d", { willReadFrequently: true });
      if (!tempCtx) return;

      tempCanvas.width = size;
      tempCanvas.height = size;

      // Draw circular clipped image
      tempCtx.save();
      tempCtx.beginPath();
      tempCtx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      tempCtx.closePath();
      tempCtx.clip();
      tempCtx.drawImage(imageRef.current, 0, 0, size, size);
      tempCtx.restore();

      let imageData: ImageData;
      try {
        imageData = tempCtx.getImageData(0, 0, size, size);
      } catch (e) {
        console.error("Failed to get image data:", e);
        return;
      }

      const dots: Dot[] = [];

      // Sample image at regular intervals to create dot matrix
      for (let y = dotSpacing / 2; y < size; y += dotSpacing) {
        for (let x = dotSpacing / 2; x < size; x += dotSpacing) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const index = (py * size + px) * 4;

          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const alpha = imageData.data[index + 3];

          // Calculate brightness (grayscale)
          const brightness = (r + g + b) / 3 / 255;

          // Only create dot if pixel is visible
          if (alpha > 50) {
            const dx = x - size / 2;
            const dy = y - size / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only dots within circle
            if (distance < size / 2 - dotSpacing) {
              dots.push({
                x,
                y,
                brightness: brightness, // Bright areas (face) = larger dots
                baseSize: dotSize,
                alpha: 1,
                randomSeed: Math.random(),
              });
            }
          }
        }
      }

      dotsRef.current = dots;
    };

    createDots();

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, size, size);

      const mouse = mouseRef.current;

      // Draw dots
      dotsRef.current.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 60;

        // Calculate dot size based on brightness (darker = larger)
        const brightnessSize = dot.baseSize * (0.2 + dot.brightness * 0.8);
        
        // Mouse interaction: fade out and slight displacement
        let alpha = 0.85;
        let offsetX = 0;
        let offsetY = 0;
        
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          
          // Random dots fade out near mouse
          if (dot.randomSeed < 0.6) {
            alpha = 0.85 * (1 - influence * 0.8);
          }
          
          // Slight displacement away from mouse
          const angle = Math.atan2(dy, dx);
          const displacement = influence * 3;
          offsetX = -Math.cos(angle) * displacement;
          offsetY = -Math.sin(angle) * displacement;
        }

        // Draw dot
        if (alpha > 0.1 && brightnessSize > 0.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(dot.x + offsetX, dot.y + offsetY, brightnessSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [imageLoaded, size, dotSize, dotSpacing]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div className={`inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
        style={{
          width: size,
          height: size,
          imageRendering: "auto",
        }}
      />
    </div>
  );
}
