import React, { useEffect, useState, useRef } from 'react';

const SpotlightEffect = ({ enabled = true, intensity = 0.6 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smooth performance
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="spotlight-effect fixed inset-0 pointer-events-none z-50 transition-opacity duration-500"
      style={{
        background: `radial-gradient(
          circle 400px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(168, 218, 220, 0.03),
          rgba(10, 14, 26, ${intensity}) 50%
        )`,
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  );
};

export default SpotlightEffect;
