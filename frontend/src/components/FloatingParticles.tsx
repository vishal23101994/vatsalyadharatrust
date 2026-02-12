"use client";

import { useEffect, useState } from "react";

export default function FloatingParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: count }, (_, i) => i));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 10}s`,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
