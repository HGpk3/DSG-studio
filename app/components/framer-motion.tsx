"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import React from "react";

export type Variants = Record<string, Record<string, unknown>>;

type MotionProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  variants?: Variants;
  initial?: string | object;
  animate?: string | object;
  whileInView?: string | object;
  viewport?: Record<string, unknown>;
  transition?: Record<string, unknown>;
};

const createMotionComponent = <T extends ElementType>(Tag: T) =>
  React.forwardRef<HTMLElement, MotionProps<T>>(
    (
      {
        children,
        variants,
        initial,
        animate,
        whileInView,
        viewport,
        transition,
        ...rest
      },
      ref
    ) => {
      void variants;
      void initial;
      void animate;
      void whileInView;
      void viewport;
      void transition;
      return React.createElement(Tag, { ...rest, ref }, children);
    }
  );

export const motion = new Proxy(
  {},
  {
    get: (_target, tag: string) => createMotionComponent(tag as ElementType),
  }
) as Record<string, React.ComponentType<MotionProps<ElementType>>>;

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
