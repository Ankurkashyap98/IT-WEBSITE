import { motion, useReducedMotion } from "framer-motion";

export default function HeroGlow({ className = "" }) {
  const reduce = useReducedMotion();

  const float = reduce
    ? {}
    : {
        y: [0, -18, 0],
        scale: [1, 1.05, 1],
      };

  const slow = reduce
    ? {}
    : {
        x: [0, 22, 0],
        y: [0, 12, 0],
      };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-teal-400/25 blur-3xl"
        animate={float}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-16 h-[22rem] w-[22rem] rounded-full bg-cyan-400/20 blur-3xl"
        animate={slow}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/15 blur-3xl"
        animate={reduce ? {} : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.18),transparent)]" />
    </div>
  );
}
