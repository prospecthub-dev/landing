'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const currentLocale = locales.find((l) => l.code === locale);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        style={{
          appearance: 'none',
          background: 'transparent',
          border: '1px solid #292524',
          borderRadius: '6px',
          padding: '0.5rem 2rem 0.5rem 0.75rem',
          fontSize: '0.875rem',
          color: '#a8a29e',
          cursor: 'pointer',
          outline: 'none',
        }}
        aria-label="Select language"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code} style={{ background: '#0a0a0a' }}>
            {l.flag} {l.label}
          </option>
        ))}
      </select>
      <div
        style={{
          position: 'absolute',
          right: '0.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: '#78716c',
          fontSize: '0.75rem',
        }}
      >
        ▼
      </div>
    </div>
  );
}
