import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ltrCss from 'bootstrap/dist/css/bootstrap.min.css?url';
import rtlCss from 'bootstrap/dist/css/bootstrap.rtl.min.css?url';
import { CONTENT } from '../data/content.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'exa-lang';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  // Two <link> elements injected once; the active stylesheet's `disabled`
  // flag flips with the language (Bootstrap runtime RTL swap).
  const ltrRef = useRef(null);
  const rtlRef = useRef(null);

  useEffect(() => {
    const ltr = document.createElement('link');
    ltr.rel = 'stylesheet';
    ltr.href = ltrCss;
    ltr.dataset.bootstrapDir = 'ltr';
    const rtl = document.createElement('link');
    rtl.rel = 'stylesheet';
    rtl.href = rtlCss;
    rtl.dataset.bootstrapDir = 'rtl';
    document.head.prepend(rtl);
    document.head.prepend(ltr);
    ltrRef.current = ltr;
    rtlRef.current = rtl;
    return () => {
      ltr.remove();
      rtl.remove();
    };
  }, []);

  const isRTL = lang === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = isRTL ? 'rtl' : 'ltr';
    document.title = CONTENT[lang].meta.title;
    if (ltrRef.current) ltrRef.current.disabled = isRTL;
    if (rtlRef.current) rtlRef.current.disabled = !isRTL;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode — persistence is best-effort */
    }
  }, [lang, isRTL]);

  const value = useMemo(
    () => ({
      lang,
      isRTL,
      dir: isRTL ? 'rtl' : 'ltr',
      t: CONTENT[lang],
      toggle: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
    }),
    [lang, isRTL]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>');
  return ctx;
}
