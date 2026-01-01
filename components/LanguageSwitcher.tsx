'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'es', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Replace the current locale in the path with the new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div style={{ display: 'flex', gap: '0.25rem' }}>
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          style={{
            opacity: locale === l.code ? 1 : 0.5,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '1rem',
            padding: '0.25rem',
            transition: 'opacity 0.2s',
          }}
          aria-label={`Switch to ${l.code}`}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );
}
