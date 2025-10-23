// FILE: src/components/FadeInSection.tsx

'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type FadeInSectionProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  once?: boolean;
} & Record<string, unknown>;

const FadeInSection = ({
  as: Component = 'div',
  className = '',
  children,
  once = true,
  ...rest
}: FadeInSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            node.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const composedClassName = ['animate-fade-in-up', className].filter(Boolean).join(' ');

  const Tag = Component as any;

  return (
    <Tag ref={ref as any} className={composedClassName} {...(rest as Record<string, unknown>)}>
      {children}
    </Tag>
  );
};

export default FadeInSection;
