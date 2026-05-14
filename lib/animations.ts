import type { Variants, Transition } from "framer-motion";

export const easeOutExpo = [0.19, 1, 0.22, 1] as const;
export const easeOutCubic = [0.33, 1, 0.68, 1] as const;
export const easeInOutCubic = [0.65, 0, 0.35, 1] as const;
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

export const transition = {
  slow: { duration: 1.6, ease: easeOutExpo } satisfies Transition,
  medium: { duration: 1.1, ease: easeOutExpo } satisfies Transition,
  fast: { duration: 0.7, ease: easeOutCubic } satisfies Transition,
  reveal: { duration: 1.4, ease: easeOutExpo } satisfies Transition,
  spring: { type: "spring", stiffness: 100, damping: 20 } as const,
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: easeOutExpo },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: easeOutExpo },
  }),
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: easeOutCubic },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutCubic },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: 0.12, ease: easeOutExpo },
  },
};

export const dividerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: easeOutExpo },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: i * 0.18, ease: easeOutExpo },
  }),
};

export const countUnitVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.25 + i * 0.12, ease: easeOutBack },
  }),
};

export const floatSlow = (i = 0) => ({
  y: [-10, 10, -10],
  transition: {
    duration: 5 + i * 0.8,
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.4,
  },
});

export const glowPulse = {
  opacity: [0.25, 0.55, 0.25],
  scale: [1, 1.05, 1],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};
