"use client";

import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
};

const offsets: Record<Direction, string> = {
  up: "translateY(32px)",
  down: "translateY(-32px)",
  left: "translateX(-32px)",
  right: "translateX(32px)",
  none: "none",
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 900,
  direction = "up",
  className = "",
}: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : offsets[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
