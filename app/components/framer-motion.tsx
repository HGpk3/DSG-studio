"use client";

import type { PropsWithChildren } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const viewport = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" };
const baseTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

type RevealProps = PropsWithChildren<{
  className?: string;
  staggerChildren?: boolean;
}>;

export function Reveal({ children, className, staggerChildren }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`will-change-transform ${className ?? ""}`}
        variants={staggerChildren ? stagger : undefined}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={viewport}
        transition={reduceMotion ? { duration: 0 } : baseTransition}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

type RevealItemProps = PropsWithChildren<{
  className?: string;
}>;

export function RevealItem({ children, className }: RevealItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={`will-change-transform ${className ?? ""}`}
      variants={fadeUp}
      transition={reduceMotion ? { duration: 0 } : baseTransition}
    >
      {children}
    </m.div>
  );
}
