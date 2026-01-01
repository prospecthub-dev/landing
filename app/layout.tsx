import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hubsy - Automatisez votre prospection B2B",
  description: "Hubsy extrait, enrichit et synchronise vos prospects B2B automatiquement. L'IA qui s'adapte quand les plateformes changent. Conforme RGPD.",
  keywords: ["prospection", "B2B", "automatisation", "IA", "HubSpot", "RGPD", "leads"],
  openGraph: {
    title: "Hubsy - Automatisez votre prospection B2B",
    description: "Extrayez des prospects vérifiés automatiquement. Enrichissement email intégré. Synchronisation CRM en temps réel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
