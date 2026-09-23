import { useState } from 'react';
import { BRAND } from '../data/content.js';

// Resolved at build time by Vite; if the asset is ever missing the
// <img> onError flips to the text fallback below.
const logoUrl = new URL('../assets/logo.png', import.meta.url).href;

/**
 * Brand logo.
 * `onDark` — renders inside a white rounded pill (for dark sections).
 * Falls back to a gradient text mark if logo.png fails to load.
 */
export default function Logo({ onDark = false, size = 40 }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="logo-fallback"
        style={{ fontSize: size, color: onDark ? 'var(--exa-navy)' : '#fff' }}
      >
        <span className="lf-row">
          <span className="lf-infinity" aria-hidden="true">∞</span>
          <span className="lf-name">EXA</span>
        </span>
        <span className="lf-sub">{BRAND.fallbackSub}</span>
      </span>
    );
  }

  const img = (
    <img
      src={logoUrl}
      alt={`${BRAND.name} — ${BRAND.fallbackSub}`}
      style={{ height: size, width: 'auto' }}
      onError={() => setFailed(true)}
    />
  );

  if (onDark) {
    return <span className="logo-pill">{img}</span>;
  }
  return img;
}
