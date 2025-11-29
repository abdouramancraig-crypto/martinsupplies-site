'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function Logo({ variant = 'dark', size = 'md', animated = true }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const textColor = variant === 'dark' ? 'text-[var(--black)]' : 'text-white';
  
  // Pop animation for the yellow dot
  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 15,
        delay: 0.3,
      }
    },
    hover: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <Link href="/" className="inline-block group">
      <motion.div 
        className={`${sizeClasses[size]} font-semibold tracking-tight flex items-baseline`}
        style={{ fontFamily: 'var(--font-display)' }}
        whileHover="hover"
        initial={animated ? "initial" : "animate"}
        animate="animate"
      >
        <span className={textColor}>MartinSupplies</span>
        <motion.span
          className="text-[var(--yellow)] mx-0"
          variants={dotVariants}
          style={{ 
            display: 'inline-block',
            textShadow: variant === 'light' ? '0 0 10px rgba(254, 255, 2, 0.5)' : 'none'
          }}
        >
          .
        </motion.span>
        <span className={`${textColor} font-light ml-1`}>&amp; CO</span>
      </motion.div>
    </Link>
  );
}

