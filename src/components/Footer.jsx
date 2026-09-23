import { useLang } from '../context/LanguageContext.jsx';
import { BRAND } from '../data/content.js';
import Logo from './Logo.jsx';
import CaptivePortalButton from './CaptivePortalButton.jsx';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="exa-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Logo onDark size={46} />
            <p className="footer-brand-line mt-3 mb-1">{t.footer.tagline}</p>
            <p className="footer-brand-line mb-0">{t.footer.parent}</p>
          </div>

          <div className="col-6 col-lg-2">
            <h6>{t.footer.quickLinks}</h6>
            {t.nav.links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="footer-link d-block">
                {l.label}
              </a>
            ))}
          </div>

          <div className="col-6 col-lg-3">
            <h6>{t.footer.servicesTitle}</h6>
            {t.services.items.map((s) => (
              <a key={s.title} href="#services" className="footer-link d-block">
                {s.title}
              </a>
            ))}
          </div>

          <div className="col-lg-3">
            <h6>{t.footer.contactTitle}</h6>
            <a href={`mailto:${BRAND.emails.info}`} className="footer-link d-block">
              {BRAND.emails.info}
            </a>
            <a href={`tel:+${BRAND.whatsapp.number}`} className="footer-link d-block">
              {BRAND.whatsapp.display}
            </a>
            <span className="footer-link d-block">{t.contact.info.addressValue}</span>
            <div className="mt-3">
              <CaptivePortalButton small />
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>
            © {year} EXA — Alwadi Communications. {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
