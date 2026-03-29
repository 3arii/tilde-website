"use client";

import { useEffect, useRef, useCallback } from "react";

const DOT_SPACING = 28;
const DOT_BASE_RADIUS = 0.8;
const DOT_MAX_RADIUS = 2.5;
const CURSOR_RADIUS = 150;
const DOT_BASE_COLOR = [229, 231, 235] as const; // #E5E7EB
const DOT_ACTIVE_COLOR = [156, 163, 175] as const; // #9CA3AF
const LERP_SPEED = 0.08;

interface Dot {
  x: number;
  y: number;
  currentRadius: number;
  targetRadius: number;
  currentAlpha: number;
  targetAlpha: number;
}

export function InteractiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);
  const isMobileRef = useRef(false);
  const driftOffsetRef = useRef(0);
  const fadeinRef = useRef(0);

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const cols = Math.ceil(width / DOT_SPACING) + 1;
    const rows = Math.ceil(height / DOT_SPACING) + 1;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: col * DOT_SPACING,
          y: row * DOT_SPACING,
          currentRadius: DOT_BASE_RADIUS,
          targetRadius: DOT_BASE_RADIUS,
          currentAlpha: 1,
          targetAlpha: 1,
        });
      }
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    isMobileRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (!isMobileRef.current) {
      window.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Fade in the background over first ~1s
      if (fadeinRef.current < 1) {
        fadeinRef.current = Math.min(1, fadeinRef.current + 0.016);
      }

      const dots = dotsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMobile = isMobileRef.current;

      if (isMobile) {
        driftOffsetRef.current += 0.003;
      }
      const drift = driftOffsetRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (isMobile) {
          // Ambient drift: gentle sine-based movement
          const driftX =
            Math.sin(dot.x * 0.01 + drift) * 0.3 +
            Math.sin(dot.y * 0.008 + drift * 0.7) * 0.2;
          dot.targetRadius = DOT_BASE_RADIUS + driftX * 0.5;
          dot.targetAlpha = 0.7 + driftX * 0.3;
        } else {
          const dx = dot.x - mx;
          const dy = dot.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CURSOR_RADIUS) {
            const t = 1 - dist / CURSOR_RADIUS;
            const eased = t * t; // quadratic falloff
            dot.targetRadius =
              DOT_BASE_RADIUS + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * eased;
            dot.targetAlpha = 1;
          } else {
            dot.targetRadius = DOT_BASE_RADIUS;
            dot.targetAlpha = 1;
          }
        }

        // Lerp toward target
        dot.currentRadius +=
          (dot.targetRadius - dot.currentRadius) * LERP_SPEED;
        dot.currentAlpha +=
          (dot.targetAlpha - dot.currentAlpha) * LERP_SPEED;

        // Interpolate color based on size
        const sizeT =
          (dot.currentRadius - DOT_BASE_RADIUS) /
          (DOT_MAX_RADIUS - DOT_BASE_RADIUS);
        const r = Math.round(
          DOT_BASE_COLOR[0] +
            (DOT_ACTIVE_COLOR[0] - DOT_BASE_COLOR[0]) * sizeT
        );
        const g = Math.round(
          DOT_BASE_COLOR[1] +
            (DOT_ACTIVE_COLOR[1] - DOT_BASE_COLOR[1]) * sizeT
        );
        const b = Math.round(
          DOT_BASE_COLOR[2] +
            (DOT_ACTIVE_COLOR[2] - DOT_BASE_COLOR[2]) * sizeT
        );

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.1, dot.currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${dot.currentAlpha * fadeinRef.current})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Just draw static dots once
      const dots = dotsRef.current;
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_BASE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT_BASE_COLOR[0]},${DOT_BASE_COLOR[1]},${DOT_BASE_COLOR[2]},1)`;
        ctx.fill();
      }
    } else {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
