interface FloatingParticlesProps {
  className?: string;
}

const particles = Array.from({ length: 10 }, (_, i) => ({
  key: i,
  left: `${(i * 25 + 7) % 100}%`,
  top: `${(i * 31 + 11) % 100}%`,
  size: 1.5 + ((i * 2) % 3),
  duration: 8 + ((i * 2) % 4),
  delay: (i * 0.5) % 4,
}));

export default function FloatingParticles({ className = "" }: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.key}
          className="absolute rounded-full"
          style={{
            left: p.left, top: p.top, width: p.size, height: p.size,
            background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
            boxShadow: "0 0 4px rgba(212,175,55,0.15)",
            animation: `float-up ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
