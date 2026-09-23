import { BRAND, waLink } from '../data/content.js';
import { useLang } from '../context/LanguageContext.jsx';

export default function FloatingWhatsApp() {
  const { t } = useLang();
  return (
    <a
      href={waLink(t.float.waDefault)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label={t.float.whatsappAria}
      title="WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  );
}
