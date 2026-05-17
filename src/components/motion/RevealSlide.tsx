import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeCinematic } from '@lib/motion';

type Direction = 'left' | 'right';

interface Props {
  readonly children: ReactNode;
  readonly direction: Direction;
  readonly className?: string;
  readonly distance?: number;
  readonly duration?: number;
  readonly delay?: number;
}

export default function RevealSlide({
  children,
  direction,
  className,
  distance = 80,
  duration = 1.1,
  delay = 0,
}: Props): JSX.Element {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const offsetX = direction === 'left' ? -distance : distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offsetX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      transition={{
        opacity: { duration: 0.95, ease: easeCinematic, delay },
        x: { duration, ease: easeCinematic, delay },
      }}
    >
      {children}
    </motion.div>
  );
}
