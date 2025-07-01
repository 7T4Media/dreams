import React from 'react';

export const FloatingElements: React.FC = () => {
  const elements = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {elements.map((i) => {
        // Generate random properties for each element
        const size = Math.floor(Math.random() * 200) + 50; // 50-250px
        const posX = Math.floor(Math.random() * 100); // 0-100%
        const posY = Math.floor(Math.random() * 100); // 0-100%
        const animDuration = Math.floor(Math.random() * 60) + 30; // 30-90s
        const delay = Math.floor(Math.random() * 10); // 0-10s
        const opacity = (Math.floor(Math.random() * 3) + 1) / 10; // 0.1-0.3

        return (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-teal-500/10 blur-3xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              opacity: opacity,
              animation: `float ${animDuration}s ease-in-out ${delay}s infinite alternate, rotate ${animDuration * 2}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};