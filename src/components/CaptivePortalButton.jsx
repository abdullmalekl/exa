import { BRAND } from '../data/content.js';

/**
 * Signature gradient pill → https://my.exa.ly (new tab).
 * Label is literally "Captive Portal" in both languages.
 */
export default function CaptivePortalButton({ small = false, className = '' }) {
  return (
    <a
      href={BRAND.portalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-portal ${small ? 'btn-sm-portal' : ''} ${className}`}
    >
      <i className="bi bi-router-fill" aria-hidden="true"></i>
      <span>{BRAND.portalLabel}</span>
    </a>
  );
}
