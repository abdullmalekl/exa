// ─────────────────────────────────────────────────────────────
// EXA — Infinite Connectivity · Single source of truth (AR/EN)
// Components never hardcode strings; everything lives here.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'EXA',
  portalLabel: 'Captive Portal', // literal in both languages (per spec)
  portalUrl: 'https://my.exa.ly',
  whatsapp: { number: '218919897092', display: '+218 91-9897092' },
  emails: { info: 'info@alwadi.ly', sales: 'sales@alwadi.ly' },
  maps: {
    // main = Tripoli Main Branch (Alnoflyeen St) — corrected per owner feedback
    main: 'https://maps.app.goo.gl/tUi9cGbbyN9WZDPs5',
    soon: 'https://maps.app.goo.gl/dD8ArFtjrwawn4FE7',
  },
  // TODO: replace with official links
  socials: [
    { key: 'facebook', icon: 'bi-facebook', href: '#' },
    { key: 'instagram', icon: 'bi-instagram', href: '#' },
    { key: 'linkedin', icon: 'bi-linkedin', href: '#' },
  ],
  fallbackSub: 'INFINITE CONNECTIVITY',
};

/** Build a WhatsApp deep link with a prefilled message. */
export const waLink = (text) =>
  `https://wa.me/${BRAND.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const WA_ORDER_TEXT = {
  ar: (pkg) => `مرحباً، أريد الاشتراك في باقة ${pkg}`,
  en: (pkg) => `Hello, I'd like to subscribe to the ${pkg} package.`,
};

export const WA_CONTACT_TEXT = {
  ar: ({ name, phone, message }) => `مرحباً، أنا ${name}.\nرقم الهاتف: ${phone}\n${message}`,
  en: ({ name, phone, message }) => `Hello, I'm ${name}.\nPhone: ${phone}\n${message}`,
};

export const CONTENT = {
  // ══════════════════════════ ARABIC ══════════════════════════
  ar: {
    meta: {
      title: 'EXA | اتصال لا نهائي — إنترنت عالي السرعة',
    },
    nav: {
      toggleAria: 'التبديل إلى اللغة الإنجليزية',
      menuAria: 'فتح قائمة التنقل',
      closeAria: 'إغلاق قائمة التنقل',
      links: [
        { id: 'home', label: 'الرئيسية' },
        { id: 'services', label: 'خدماتنا' },
        { id: 'packages', label: 'الباقات' },
        { id: 'coverage', label: 'التغطية' },
        { id: 'about', label: 'لماذا EXA؟' },
        { id: 'contact', label: 'تواصل معنا' },
      ],
    },
    hero: {
      badge: 'علامة لشركة الودي للاتصالات',
      titleA: 'سرعة. ثبات.',
      titleGradient: 'اتصال لا نهائي',
      titleC: '.',
      sub: 'إنترنت عالي السرعة وخدمات اتصالات متكاملة للأفراد والشركات — شبكة مستقرة، دعم لا ينام، وتغطية تتوسع باستمرار.',
      ctas: { primary: 'اكتشف الباقات' },
      stats: [
        { value: 99.9, decimals: 1, suffix: '%', label: 'جهوزية الشبكة' },
        { value: 24, decimals: 0, suffix: '/7', label: 'دعم فني' },
        { glyph: '∞', label: 'احتمالات لا نهائية' },
      ],
      scrollAria: 'انتقل إلى قسم الخدمات',
    },
    services: {
      overline: 'ماذا نقدم',
      title: 'خدماتنا',
      items: [
        {
          icon: 'bi-speedometer2',
          title: 'إنترنت منزلي فائق السرعة',
          text: 'سرعات تصل إلى 30 Mbps لبثّ وألعاب وعمل سلس دون انقطاع.',
        },
        {
          icon: 'bi-briefcase',
          title: 'إنترنت للشركات',
          text: 'حلول موثوقة للمكاتب والشركات مع أولوية في الدعم.',
        },
        {
          icon: 'bi-diagram-3',
          title: 'خطوط مخصصة',
          text: 'خط مخصص لك بضمان سرعة واستقرار ثابت.',
        },
        {
          icon: 'bi-building',
          title: 'حلول المؤسسات',
          text: 'بنية تحتية اتصالية للشركات الكبرى.',
        },
        {
          icon: 'bi-arrow-left-right',
          title: 'ربط نقطة بنقطة (P2P)',
          text: 'ربط فائق السرعة بين موقعين بزمن وصول وتذبذب منخفض جداً (Low Ping & Jitter).',
        },
      ],
    },
    packages: {
      title: 'باقات الإنترنت',
      sub: 'أسعار واضحة، بدون رسوم خفية',
      speedUnit: 'Mbps',
      perMonth: '/شهرياً',
      currency: 'LYD',
      orderNow: 'اطلب الباقة',
      popular: 'الأكثر طلباً',
      features: ['اتصال مستقر', 'دعم فني 24/7', 'إعداد وتركيب سهل'],
      items: [
        { name: 'Flex Sheare10', speed: 10, price: 160, featured: false },
        { name: 'Flex Sheare20', speed: 20, price: 295, featured: true },
        { name: 'Flex Sheare30', speed: 30, price: 399, featured: false },
      ],
    },
    coverage: {
      title: 'مناطق التغطية',
      active: 'نشط',
      comingSoon: 'قريباً',
      main: {
        name: 'فرع الفيرست مول',
        address: 'طرابلس – ليبيا',
        cta: 'عرض على الخريطة',
      },
      soon: {
        name: 'فرع النوفليين – قيد التوسع',
        address: 'شارع النوفليين، طرابلس – ليبيا',
        cta: 'تعرّف على الموقع',
      },
      note: 'نوسّع شبكتنا باستمرار — تابعنا لمعرفة متى نصل منطقتك.',
    },
    why: {
      title: 'لماذا EXA؟',
      items: [
        { icon: 'bi-lightning-charge-fill', title: 'السرعة', text: 'سرعات عالية تواكب احتياجك.' },
        { icon: 'bi-shield-check', title: 'الموثوقية', text: 'شبكة مستقرة بجهوزية 99.9%.' },
        { icon: 'bi-headset', title: 'الدعم', text: 'فريق دعم متاح 24/7.' },
        { icon: 'bi-broadcast-pin', title: 'التغطية', text: 'تغطية تتوسع في طرابلس وخارجها.' },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      sub: 'فريقنا جاهز للإجابة على استفساراتك — راسلنا وسنعاود التواصل معك سريعاً.',
      info: {
        email: 'البريد الإلكتروني',
        sales: 'المبيعات',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        address: 'العنوان',
        addressValue: 'الفيرست مول، طرابلس – ليبيا',
        followUs: 'تابعنا',
      },
      form: {
        title: 'أرسل رسالة',
        name: 'الاسم',
        namePh: 'اسمك الكامل',
        phone: 'رقم الهاتف',
        phonePh: '09X XXX XXXX',
        message: 'رسالتك',
        messagePh: 'اكتب استفسارك هنا…',
        submit: 'إرسال عبر واتساب',
        note: 'بالضغط على إرسال سيُفتح واتساب برسالتك جاهزة للإرسال.',
      },
    },
    footer: {
      tagline: 'Infinite Connectivity — اتصال لا نهائي',
      parent: 'EXA — علامة لشركة الودي للاتصالات / EXA — a brand of Alwadi Communications',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      contactTitle: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة',
    },
    float: {
      whatsappAria: 'تواصل معنا عبر واتساب',
      waDefault: 'مرحباً، أريد الاستفسار عن خدماتكم وباقاتكم.',
    },
  },

  // ══════════════════════════ ENGLISH ══════════════════════════
  en: {
    meta: {
      title: 'EXA | Infinite Connectivity — High-Speed Internet',
    },
    nav: {
      toggleAria: 'Switch to Arabic',
      menuAria: 'Open navigation menu',
      closeAria: 'Close navigation menu',
      links: [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'packages', label: 'Packages' },
        { id: 'coverage', label: 'Coverage' },
        { id: 'about', label: 'Why EXA?' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: 'A brand of Alwadi Communications',
      titleA: 'Fast. Reliable.',
      titleGradient: 'Infinite Connectivity',
      titleC: '.',
      sub: 'High-speed internet and integrated connectivity for homes and businesses — a stable network, 24/7 support, and ever-expanding coverage.',
      ctas: { primary: 'View Packages' },
      stats: [
        { value: 99.9, decimals: 1, suffix: '%', label: 'Network Uptime' },
        { value: 24, decimals: 0, suffix: '/7', label: 'Technical Support' },
        { glyph: '∞', label: 'Infinite Possibilities' },
      ],
      scrollAria: 'Scroll to services section',
    },
    services: {
      overline: 'What We Offer',
      title: 'Our Services',
      items: [
        {
          icon: 'bi-speedometer2',
          title: 'High-Speed Home Internet',
          text: 'Speeds up to 30 Mbps for seamless streaming, gaming, and work.',
        },
        {
          icon: 'bi-briefcase',
          title: 'Business Internet',
          text: 'Reliable connectivity for offices with priority support.',
        },
        {
          icon: 'bi-diagram-3',
          title: 'Dedicated Connectivity',
          text: 'A line dedicated to you with guaranteed stable speed.',
        },
        {
          icon: 'bi-building',
          title: 'Enterprise Solutions',
          text: 'Connectivity infrastructure for large organizations.',
        },
        {
          icon: 'bi-arrow-left-right',
          title: 'Point-to-Point (P2P)',
          text: 'Ultra-fast site-to-site links with very low ping & jitter.',
        },
      ],
    },
    packages: {
      title: 'Internet Packages',
      sub: 'Clear prices, no hidden fees',
      speedUnit: 'Mbps',
      perMonth: 'per month',
      currency: 'LYD',
      orderNow: 'Order Now',
      popular: 'Most Popular',
      features: ['Stable connection', '24/7 technical support', 'Easy setup & installation'],
      items: [
        { name: 'Flex Sheare10', speed: 10, price: 160, featured: false },
        { name: 'Flex Sheare20', speed: 20, price: 295, featured: true },
        { name: 'Flex Sheare30', speed: 30, price: 399, featured: false },
      ],
    },
    coverage: {
      title: 'Coverage Areas',
      active: 'Active',
      comingSoon: 'Coming Soon',
      main: {
        name: 'First Mall Branch',
        address: 'Tripoli – Libya',
        cta: 'View on Map',
      },
      soon: {
        name: 'New Branch — Alnoflyeen',
        address: 'Alnoflyeen St, Tripoli – Libya',
        cta: 'Preview Location',
      },
      note: "We're always expanding — follow us to know when we reach your area.",
    },
    why: {
      title: 'Why EXA?',
      items: [
        { icon: 'bi-lightning-charge-fill', title: 'Speed', text: 'High speeds that keep up with your needs.' },
        { icon: 'bi-shield-check', title: 'Reliability', text: 'A stable network with 99.9% uptime.' },
        { icon: 'bi-headset', title: 'Support', text: 'A Libyan support team available 24/7.' },
        { icon: 'bi-broadcast-pin', title: 'Coverage', text: 'Coverage expanding across Tripoli and beyond.' },
      ],
    },
    contact: {
      title: 'Contact Us',
      sub: "Our team is ready to answer your questions — drop us a line and we'll get back to you shortly.",
      info: {
        email: 'Email',
        sales: 'Sales',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        address: 'Address',
        addressValue: 'First Mall, Tripoli – Libya',
        followUs: 'Follow us',
      },
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePh: 'Your full name',
        phone: 'Phone Number',
        phonePh: '09X XXX XXXX',
        message: 'Your Message',
        messagePh: 'Write your inquiry here…',
        submit: 'Send via WhatsApp',
        note: 'Clicking send opens WhatsApp with your message pre-filled.',
      },
    },
    footer: {
      tagline: 'Infinite Connectivity — اتصال لا نهائي',
      parent: 'EXA — علامة لشركة الودي للاتصالات / EXA — a brand of Alwadi Communications',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      contactTitle: 'Contact',
      rights: 'All rights reserved',
    },
    float: {
      whatsappAria: 'Chat with us on WhatsApp',
      waDefault: "Hello, I'd like to inquire about your services and packages.",
    },
  },
};
