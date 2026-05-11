/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export interface ParticlesBackgroundProps {
  particles?: number;
  speed?: number;
  connections?: number;
  color?: string;
  backgroundColor?: string;
  sticky?: boolean;
  mouseReactive?: boolean;
  mouseRepel?: boolean;
  particleSize?: number;
  lineWidth?: number;
  glow?: number;
  distribution?: Array<'top' | 'bottom' | 'left' | 'right' | 'center'> | 'full';
  style?: CSSProperties | undefined;
}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particles = 80,
  speed = 0.4,
  connections = 120,
  color = '#00ffff',
  backgroundColor = '#000000',
  sticky = true,
  mouseReactive = true,
  mouseRepel = true,
  particleSize = 2.5,
  lineWidth = 1.5,
  glow = 10,
  distribution = 'full',
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  const getPageSize = () => ({
    width: Math.max(
      document.documentElement.scrollWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth,
      document.body.scrollWidth,
      document.body.offsetWidth,
      document.body.clientWidth,
    ),
    height: Math.max(
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight,
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.body.clientHeight,
    ),
  });

  const [size, setSize] = useState(getPageSize());

  const updateSize = () => setSize(getPageSize());

  useEffect(() => {
    const handleResize = () => {
      updateSize();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Executa após todos os elementos carregados
    setTimeout(() => {
      updateSize();
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size.width;
    canvas.height = size.height;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const distArray =
      distribution === 'full' ? ['full'] : (distribution as string[]);

    const randomPosition = () => {
      const centerX = size.width / 2;
      const centerY = size.height / 2;
      const pick = distArray[Math.floor(Math.random() * distArray.length)];

      switch (pick) {
        case 'top':
          return {
            x: Math.random() * size.width,
            y: Math.random() * (size.height * 0.3),
          };
        case 'bottom':
          return {
            x: Math.random() * size.width,
            y: size.height * 0.7 + Math.random() * (size.height * 0.3),
          };
        case 'left':
          return {
            x: Math.random() * (size.width * 0.3),
            y: Math.random() * size.height,
          };
        case 'right':
          return {
            x: size.width * 0.7 + Math.random() * (size.width * 0.3),
            y: Math.random() * size.height,
          };
        case 'center':
          return {
            x: centerX + (Math.random() - 0.5) * (size.width * 0.5),
            y: centerY + (Math.random() - 0.5) * (size.height * 0.5),
          };
        default:
          return {
            x: Math.random() * size.width,
            y: Math.random() * size.height,
          };
      }
    };

    const dots = Array.from({ length: particles }, () => {
      const { x, y } = randomPosition();
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      };
    });

    const maxForceDistance = 150;
    const repelStrength = 0.04;

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      ctx.clearRect(0, 0, size.width, size.height);

      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        const dx = mouse.current.x - dot.x;
        const dy = mouse.current.y - dot.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (mouseReactive && dist < maxForceDistance) {
          const force = (maxForceDistance - dist) / maxForceDistance;
          const norm = dist !== 0 ? 1 / dist : 0;
          const direction = mouseRepel ? -1 : 1;
          const fx = direction * dx * norm * force * repelStrength;
          const fy = direction * dy * norm * force * repelStrength;

          dot.vx += fx;
          dot.vy += fy;
        }

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > size.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > size.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        const dotA = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const dotB = dots[j];

          const dx = dotA.x - dotB.x;
          const dy = dotA.y - dotB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connections * connections) {
            const dist = Math.sqrt(distSq);
            ctx.globalAlpha = 1 - dist / connections;
            ctx.beginPath();
            ctx.moveTo(dotA.x, dotA.y);
            ctx.lineTo(dotB.x, dotB.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      ctx.globalCompositeOperation = 'source-over';
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [
    size,
    particles,
    speed,
    connections,
    color,
    backgroundColor,
    distribution,
    mouseReactive,
    mouseRepel,
    particleSize,
    lineWidth,
    glow,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: sticky ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: `${size.width}px`,
        height: `${size.height}px`,
        backgroundColor,
        pointerEvents: 'none',
        ...(style || {}),
      }}
    />
  );
};
