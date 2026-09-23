import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { WA_ORDER_TEXT, waLink } from '../data/content.js';
import { fadeUpItem, staggerContainer, useReveal } from './Navbar.jsx';

export default function Packages() {
  const { t, lang } = useLang();
  const reveal = useReveal();

  return (
    <section id="packages" className="section section-white">
      <div className="container">
        <motion.header {...reveal} variants={staggerContainer} className="text-center mb-5">
          <motion.h2 variants={fadeUpItem} className="section-title mb-2">
            {t.packages.title}
          </motion.h2>
          <motion.p variants={fadeUpItem} className="section-sub mb-0">
            {t.packages.sub}
          </motion.p>
        </motion.header>

        <motion.div
          {...reveal}
          variants={staggerContainer}
          className="row row-cols-1 row-cols-lg-3 g-4 align-items-stretch justify-content-center"
          style={{ maxWidth: 980, margin: '0 auto' }}
        >
          {t.packages.items.map((p) => {
            const card = (
              <div className="pkg-card">
                <div className="pkg-name">{p.name}</div>
                <div className="pkg-speed mt-2">
                  {p.speed}
                  <span className="unit"> {t.packages.speedUnit}</span>
                </div>
                <div className="pkg-price">
                  {p.price} {t.packages.currency} <small>· {t.packages.perMonth}</small>
                </div>
                <ul className="pkg-features">
                  {t.packages.features.map((f) => (
                    <li key={f}>
                      <i className="bi bi-check2-circle" aria-hidden="true"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(WA_ORDER_TEXT[lang](p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-portal"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  <span>{t.packages.orderNow}</span>
                </a>
              </div>
            );

            return (
              <motion.div key={p.name} variants={fadeUpItem} className="col pkg-wrap">
                {p.featured ? (
                  <div className="pkg-featured-outer">
                    <span className="pkg-ribbon">
                      <i className="bi bi-star-fill me-1" aria-hidden="true"></i>
                      {t.packages.popular}
                    </span>
                    {card}
                  </div>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
