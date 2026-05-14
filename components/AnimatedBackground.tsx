export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#1c0b33]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,18,76,0.6)_0%,rgba(28,11,51,1)_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(82,43,91,0.1)_0%,transparent_60%)] blur-[30px]" />
    </div>
  );
}