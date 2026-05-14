export default function GrainTexture({ className = "" }: { className?: string }) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[1] opacity-[0.02] ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(212,175,55,0.3) 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
      aria-hidden="true"
    />
  );
}