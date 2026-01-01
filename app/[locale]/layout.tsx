import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const metadata: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Hubsy - Automate your B2B prospecting',
      description:
        'Hubsy finds your prospects, verifies their emails and sends them to your CRM. Automatically. 24/7.',
    },
    fr: {
      title: 'Hubsy - Automatisez votre prospection B2B',
      description:
        'Hubsy trouve vos prospects, vérifie leurs emails et les envoie dans votre CRM. Automatiquement. 24h/24.',
    },
    es: {
      title: 'Hubsy - Automatiza tu prospección B2B',
      description:
        'Hubsy encuentra tus prospectos, verifica sus emails y los envía a tu CRM. Automáticamente. 24/7.',
    },
  };

  const { title, description } = metadata[locale] || metadata.en;

  return {
    title,
    description,
    keywords: [
      'prospecting',
      'B2B',
      'sales automation',
      'CRM',
      'email enrichment',
      'leads',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      languages: {
        en: '/en',
        fr: '/fr',
        es: '/es',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
