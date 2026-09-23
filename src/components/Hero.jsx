import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import Counter from './Counter.jsx';
import CaptivePortalButton from './CaptivePortalButton.jsx';
import { fadeUpItem, staggerContainer } from './Navbar.jsx';

/** Animated particle network mesh on <canvas> (purple/cyan on navy). */
function ParticleMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    const COLORS = ['91, 81, 216', '43, 166, 232'];
    const LINK_DIST = 150;
    let raf;
    let nodes = [];
    let w = 0;
    let h = 0;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(80, Math.round((w * h) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        c: COLORS[Math.random() < 0.5 ? 0 : 1],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const a = (1 - Math.sqrt(d2) / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(${n.c}, ${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = `rgba(${n.c}, 0.75)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener('resize', setup);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const entrance = reduce
    ? {}
    : {
        initial: 'hidden',
        animate: 'show',
        variants: staggerContainer,
      };

  const step = reduce ? {} : { variants: fadeUpItem };

  return (
    <section id="home" className="hero">
      <ParticleMesh />
      <div className="hero-watermark" aria-hidden="true">∞</div>

      <div className="container position-relative">
        <motion.div {...entrance} className="d-flex flex-column align-items-start">
          <motion.span {...step} className="hero-badge">
            <span className="dot" aria-hidden="true"></span>
            {t.hero.badge}
          </motion.span>

          <motion.h1 {...step} className="hero-title mt-4 mb-3">
            {t.hero.titleA}{' '}
            <span className="text-gradient">{t.hero.titleGradient}</span>
            {t.hero.titleC}
          </motion.h1>

          <motion.p {...step} className="hero-sub mb-4">
            {t.hero.sub}
          </motion.p>

          <motion.div {...step} className="d-flex flex-wrap gap-3 mb-5">
            <a href="#packages" className="btn-portal">
              <span>{t.hero.ctas.primary}</span>
              <i className="bi bi-arrow-down-short" aria-hidden="true"></i>
            </a>
            <CaptivePortalButton />
          </motion.div>

          <motion.div {...step} className="hero-stats w-100">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="stat-chip">
                <div className="stat-value">
                  {s.glyph ? (
                    <span>{s.glyph}</span>
                  ) : (
                    <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                  )}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a href="#services" className="scroll-down" aria-label={t.hero.scrollAria}>
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  );
}
