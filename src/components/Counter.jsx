import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Animated 0 → `to` counter, triggered once on visibility.
 * Honors prefers-reduced-motion (jumps straight to the final value).
 */
export default function Counter({ to, decimals = 0, prefix = '', suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      setVal(to);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  const text = decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
