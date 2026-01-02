'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatedBackground />

      {/* Header */}
      <header style={{ padding: '1.5rem 0', borderBottom: '1px solid #292524' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span className="font-serif" style={{ color: '#0a0a0a', fontSize: '1.25rem', fontWeight: 400 }}>H</span>
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9' }}>Hubsy</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#fafaf9', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#78716c', marginBottom: '3rem' }}>Last updated: January 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#d6d3d1', lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>1. Information We Collect</h2>
            <p>We collect information you provide directly, including your name, email address, and company information when you create an account or contact us. We also collect usage data to improve our services.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our services, communicate with you about your account, send product updates, and ensure the security of our platform.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>3. Data Storage and Security</h2>
            <p>Your data is stored securely on servers located in the European Union. We implement industry-standard security measures including encryption, access controls, and regular security audits.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with service providers who assist in operating our platform, subject to strict confidentiality agreements.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>5. Your Rights</h2>
            <p>Under GDPR, you have the right to access, correct, delete, or export your personal data. You can also object to processing or request restriction of processing. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>6. Cookies</h2>
            <p>We use essential cookies to operate our service and analytics cookies to understand usage patterns. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>7. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@hubsy.io" style={{ color: '#f59e0b' }}>privacy@hubsy.io</a></p>
          </section>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #292524' }}>
          <Link href="/" style={{ color: '#a8a29e', fontSize: '0.875rem' }}>&larr; Back to home</Link>
        </div>
      </main>
    </div>
  );
}
