import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { BRAND } from '../data/content.js';
import { fadeUpItem, staggerContainer, useReveal } from './Navbar.jsx';

export default function Coverage() {
  const { t } = useLang();
  const reveal = useReveal();

  const cards = [
    {
      key: 'main',
      icon: 'bi-shop',
      pill: t.coverage.active,
      pillClass: 'pill-active',
      dot: true,
      name: t.coverage.main.name,
      address: t.coverage.main.address,
      cta: t.coverage.main.cta,
      href: BRAND.maps.main,
    },
    {
      key: 'soon',
      icon: 'bi-signpost-split-fill',
      pill: t.coverage.comingSoon,
      pillClass: 'pill-soon',
      dot: false,
      name: t.coverage.soon.name,
      address: t.coverage.soon.address,
      cta: t.coverage.soon.cta,
      href: BRAND.maps.soon,
    },
  ];

  return (
    <section id="coverage" className="section section-light">
      <div className="container">
        <motion.header {...reveal} variants={staggerContainer} className="text-center mb-5">
          <motion.h2 variants={fadeUpItem} className="section-title mb-0">
            {t.coverage.title}
          </motion.h2>
        </motion.header>

        <motion.div
          {...reveal}
          variants={staggerContainer}
          className="row row-cols-1 row-cols-md-2 g-4 justify-content-center"
          style={{ maxWidth: 900, margin: '0 auto' }}
        >
          {cards.map((c) => (
            <motion.div key={c.key} variants={fadeUpItem} className="col d-flex">
              <div className="exa-card w-100 coverage-card">
                <div className="icon-tile">
                  <i className={`bi ${c.icon}`} aria-hidden="true"></i>
                </div>
                <span className={`pill ${c.pillClass}`}>
                  {c.dot && <span className="status-dot" aria-hidden="true"></span>}
                  {c.pill}
                </span>
                <h3 className="coverage-name">{c.name}</h3>
                <p className="coverage-address">{c.address}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-map"
                >
                  <i className="bi bi-map" aria-hidden="true"></i>
                  <span>{c.cta}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p {...reveal} variants={fadeUpItem} className="text-center section-sub mt-4 mb-0">
          {t.coverage.note}
        </motion.p>
      </div>
    </section>
  );
}
