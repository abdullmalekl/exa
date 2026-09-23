import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import Logo from './Logo.jsx';
import CaptivePortalButton from './CaptivePortalButton.jsx';

export function useReveal() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.18 },
  };
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy — highlight the section crossing the middle of the viewport
  useEffect(() => {
    const ids = t.nav.links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t]);

  const solid = scrolled || open;

  return (
    <header className={`exa-navbar fixed-top ${solid ? 'is-solid' : ''}`}>
      <div className="container exa-nav-inner">
        <a href="#home" className="exa-brand" aria-label="EXA — Home">
          <Logo onDark={!solid} size={38} />
        </a>

        <nav className="exa-links" aria-label="Main navigation">
          {t.nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`exa-link ${active === l.id ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="exa-actions">
          <button
            type="button"
            className="btn-lang"
            onClick={toggle}
            aria-label={t.nav.toggleAria}
          >
            <i className="bi bi-translate" aria-hidden="true"></i>
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>
          <CaptivePortalButton small />
        </div>

        <button
          type="button"
          className="exa-burger"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeAria : t.nav.menuAria}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true"></i>
        </button>
      </div>

      <div className={`exa-mobile ${open ? 'open' : ''}`}>
        <div className="container">
          <div className="exa-mobile-card">
            {t.nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`exa-link ${active === l.id ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="exa-mobile-foot">
              <button
                type="button"
                className="btn-lang"
                onClick={toggle}
                aria-label={t.nav.toggleAria}
              >
                <i className="bi bi-translate" aria-hidden="true"></i>
                <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
              <CaptivePortalButton small className="flex-fill" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
