import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { fadeUpItem, staggerContainer, useReveal } from './Navbar.jsx';

export default function Services() {
  const { t } = useLang();
  const reveal = useReveal();

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <motion.header
          {...reveal}
          variants={staggerContainer}
          className="text-center mb-5"
        >
          <motion.span variants={fadeUpItem} className="overline">
            {t.services.overline}
          </motion.span>
          <motion.h2 variants={fadeUpItem} className="section-title mt-2 mb-0">
            {t.services.title}
          </motion.h2>
        </motion.header>

        <motion.div
          {...reveal}
          variants={staggerContainer}
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        >
          {t.services.items.map((s) => (
            <motion.div key={s.title} variants={fadeUpItem} className="col d-flex">
              <div className="exa-card w-100">
                <div className="icon-tile">
                  <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
