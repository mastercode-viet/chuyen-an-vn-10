// Shared, restrained motion presets so entrance/hover/tap animations stay
// consistent across every chapter instead of each component inventing its own.
import type { Transition, Variants } from 'motion/react';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;

export const easeOut: Transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

export const easeOutFast: Transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

// Micro-interactions for anything clickable: a light lift on hover, a light
// press on tap. Kept subtle to match the dossier's restrained, sharp-edged tone.
export const hoverLift = { scale: 1.015, y: -2 };
export const tapPress = { scale: 0.97, y: 0 };

export const hoverScaleSm = { scale: 1.03 };
export const tapScaleSm = { scale: 0.96 };
