import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { BRAND, WA_CONTACT_TEXT, waLink } from '../data/content.js';
import { fadeUpItem, staggerContainer, useReveal } from './Navbar.jsx';

export default function Contact() {
  const { t, lang } = useLang();
  const reveal = useReveal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const text = WA_CONTACT_TEXT[lang]({ name, phone, message });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  const infoItems = [
    {
      key: 'email',
      icon: 'bi-envelope',
      label: t.contact.info.email,
      value: BRAND.emails.info,
      href: `mailto:${BRAND.emails.info}`,
    },
    {
      key: 'sales',
      icon: 'bi-envelope-paper',
      label: t.contact.info.sales,
      value: BRAND.emails.sales,
      href: `mailto:${BRAND.emails.sales}`,
    },
    {
      key: 'phone',
      icon: 'bi-telephone',
      label: t.contact.info.phone,
      value: BRAND.whatsapp.display,
      href: `tel:+${BRAND.whatsapp.number}`,
    },
    {
      key: 'whatsapp',
      icon: 'bi-whatsapp',
      label: t.contact.info.whatsapp,
      value: BRAND.whatsapp.display,
      href: waLink(t.float.waDefault),
    },
    {
      key: 'address',
      icon: 'bi-geo-alt',
      label: t.contact.info.address,
      value: t.contact.info.addressValue,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <motion.header {...reveal} variants={staggerContainer} className="text-center mb-5">
          <motion.h2 variants={fadeUpItem} className="section-title mb-2">
            {t.contact.title}
          </motion.h2>
          <motion.p variants={fadeUpItem} className="section-sub mb-0">
            {t.contact.sub}
          </motion.p>
        </motion.header>

        <motion.div {...reveal} variants={staggerContainer} className="row g-4">
          <motion.div variants={fadeUpItem} className="col-lg-6">
            <div>
              {infoItems.map((it) => {
                const body = (
                  <>
                    <span className="icon-tile">
                      <i className={`bi ${it.icon}`} aria-hidden="true"></i>
                    </span>
                    <span>
                      <span className="ci-label d-block">{it.label}</span>
                      <span className="ci-value">{it.value}</span>
                    </span>
                  </>
                );
                return it.href ? (
                  <a key={it.key} href={it.href} className="contact-item" target={it.icon === 'bi-whatsapp' ? '_blank' : undefined} rel={it.icon === 'bi-whatsapp' ? 'noopener noreferrer' : undefined}>
                    {body}
                  </a>
                ) : (
                  <div key={it.key} className="contact-item">
                    {body}
                  </div>
                );
              })}

              <div className="mt-4">
                <span className="ci-label fw-bold">{t.contact.info.followUs}</span>
                <div className="social-row">
                  {/* TODO: replace with official links */}
                  {BRAND.socials.map((s) => (
                    <a
                      key={s.key}
                      href={s.href}
                      className="social-btn"
                      aria-label={s.key}
                      onClick={(e) => s.href === '#' && e.preventDefault()}
                    >
                      <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpItem} className="col-lg-6">
            <form className="contact-form-card h-100" onSubmit={onSubmit}>
              <h3 className="h5 fw-bold mb-4">{t.contact.form.title}</h3>
              <div className="mb-3">
                <label htmlFor="cf-name" className="form-label small fw-semibold">
                  {t.contact.form.name}
                </label>
                <input
                  id="cf-name"
                  type="text"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.form.namePh}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cf-phone" className="form-label small fw-semibold">
                  {t.contact.form.phone}
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  className="form-control"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.contact.form.phonePh}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cf-message" className="form-label small fw-semibold">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="cf-message"
                  rows="4"
                  className="form-control"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.form.messagePh}
                ></textarea>
              </div>
              <button type="submit" className="btn-portal w-100">
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span>{t.contact.form.submit}</span>
              </button>
              <p className="form-note">{t.contact.form.note}</p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
