import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { fadeUpItem, staggerContainer, useReveal } from './Navbar.jsx';

export default function WhyExa() {
  const { t } = useLang();
  const reveal = useReveal();

  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <motion.header {...reveal} variants={staggerContainer} className="text-center mb-5">
          <motion.h2 variants={fadeUpItem} className="section-title mb-0">
            {t.why.title}
          </motion.h2>
        </motion.header>

        <motion.div
          {...reveal}
          variants={staggerContainer}
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4"
        >
          {t.why.items.map((w) => (
            <motion.div key={w.title} variants={fadeUpItem} className="col d-flex">
              <div className="why-tile w-100">
                <div className="icon-tile">
                  <i className={`bi ${w.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-text">{w.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
