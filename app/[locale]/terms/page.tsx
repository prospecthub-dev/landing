'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function TermsPage() {
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
        <h1 className="font-serif" style={{ fontSize: '2.5rem', color: '#fafaf9', marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: '#78716c', marginBottom: '3rem' }}>Last updated: January 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#d6d3d1', lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
            <p>By accessing or using Hubsy, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>2. Description of Service</h2>
            <p>Hubsy provides LinkedIn lead generation and email enrichment services. We offer tools to help sales professionals find and connect with potential customers through publicly available professional data.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>3. User Responsibilities</h2>
            <p>You agree to use Hubsy in compliance with all applicable laws, including data protection regulations. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>4. Acceptable Use</h2>
            <p>You may not use Hubsy for spamming, harassment, or any illegal purpose. You must comply with LinkedIn&apos;s terms of service when using data obtained through our platform.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>5. Payment and Billing</h2>
            <p>Paid plans are billed monthly or annually as selected. Refunds are provided within 14 days of initial purchase if you are not satisfied. Credits do not roll over between billing periods unless specified.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>6. Intellectual Property</h2>
            <p>Hubsy and its content are protected by intellectual property laws. You may not copy, modify, or distribute our software or content without permission.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>7. Limitation of Liability</h2>
            <p>Hubsy is provided &quot;as is&quot; without warranties. We are not liable for indirect, incidental, or consequential damages arising from your use of our services.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>8. Termination</h2>
            <p>We may suspend or terminate your access for violation of these terms. You may cancel your account at any time through your account settings.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>9. Changes to Terms</h2>
            <p>We may update these terms periodically. Continued use of Hubsy after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '1rem' }}>10. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:legal@hubsy.io" style={{ color: '#f59e0b' }}>legal@hubsy.io</a></p>
          </section>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #292524' }}>
          <Link href="/" style={{ color: '#a8a29e', fontSize: '0.875rem' }}>&larr; Back to home</Link>
        </div>
      </main>
    </div>
  );
}
