import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeCinematic } from '@lib/motion';

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly duration?: number;
  readonly fromScale?: number;
}

export default function RevealScale({
  children,
  className,
  delay = 0,
  duration = 1.4,
  fromScale = 1.04,
}: Props): JSX.Element {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: fromScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        opacity: { duration: 0.95, ease: easeCinematic, delay },
        scale: { duration, ease: easeCinematic, delay },
      }}
    >
      {children}
    </motion.div>
  );
}
