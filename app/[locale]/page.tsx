'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  X,
  Target,
  Mail,
  RefreshCw,
  Shield,
  Clock,
  Zap,
  Menu,
  Calendar,
} from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import AnimatedBackground from '@/components/AnimatedBackground';

const featureIcons = [Target, Mail, RefreshCw, Shield, Clock, Zap];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const statsItems = t.raw('stats.items') as Array<{ value: string; label: string }>;
  const beforeItems = t.raw('problem.beforeItems') as string[];
  const afterItems = t.raw('problem.afterItems') as string[];
  const featuresItems = t.raw('features.items') as Array<{ title: string; description: string }>;
  const howItWorksSteps = t.raw('howItWorks.steps') as Array<{ step: string; title: string; description: string }>;
  const comparisonFeatures = t.raw('comparison.features') as Array<{ name: string; hubsy: boolean; evaboot: boolean; kaspr: boolean; apollo: boolean }>;
  const pricingPlans = t.raw('pricing.plans') as Array<{ name: string; price: string; period: string; description: string; features: string[]; cta: string; featured: boolean }>;
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>;

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatedBackground />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X style={{ width: '24px', height: '24px', color: '#fafaf9' }} />
            </button>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>{t('nav.features')}</a>
            <a href="#comparison" onClick={() => setMobileMenuOpen(false)}>{t('nav.comparison')}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</a>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t('nav.cta')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="nav-blur" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
          </div>

          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#features" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.features')}</a>
            <a href="#comparison" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.comparison')}</a>
            <a href="#pricing" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.pricing')}</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#" className="nav-links" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none' }}>{t('nav.login')}</a>
            <button className="btn-primary nav-links" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
              {t('nav.cta')}
            </button>
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <motion.div
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="tag">
                {t('hero.tag')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                fontWeight: 400,
                color: '#fafaf9',
                marginBottom: '1.5rem',
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('hero.headline')}<br />
              <span className="text-accent">{t('hero.headlineAccent')}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              style={{
                fontSize: '1.125rem',
                color: '#a8a29e',
                maxWidth: '560px',
                margin: '0 auto 2rem',
                lineHeight: 1.7
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="btn-primary">
                {t('hero.ctaPrimary')}
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <button className="btn-secondary">
                <Calendar style={{ width: '16px', height: '16px' }} />
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(2rem, 5vw, 4rem)',
                paddingTop: '2rem',
                borderTop: '1px solid #292524'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {statsItems.map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number">{stat.value}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#78716c', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '2.5rem 0', borderTop: '1px solid #292524', borderBottom: '1px solid #292524' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p style={{ color: '#a8a29e', fontSize: '0.9375rem' }}>
            {t.rich('socialProof', {
              count: 127,
              strong: (chunks) => <strong style={{ color: '#fafaf9' }}>{chunks}</strong>
            })}
          </p>
        </div>
      </section>

      {/* Problem/Solution */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              {t('problem.title')}<br />
              <span className="text-accent">{t('problem.titleAccent')}</span>
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1.0625rem', maxWidth: '550px', margin: '0 auto' }}>
              {t('problem.subtitle')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Before */}
            <motion.div
              className="card"
              style={{ borderColor: 'rgba(220, 38, 38, 0.4)' }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ color: '#dc2626', fontWeight: 600, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <X style={{ width: '20px', height: '20px' }} />
                {t('problem.before')}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {beforeItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem', color: '#a8a29e', fontSize: '0.9375rem' }}>
                    <X style={{ width: '16px', height: '16px', color: '#dc2626', flexShrink: 0, marginTop: '3px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              className="card card-featured"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check style={{ width: '20px', height: '20px' }} />
                {t('problem.after')}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {afterItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem', color: '#d6d3d1', fontSize: '0.9375rem' }}>
                    <Check style={{ width: '16px', height: '16px', color: '#22c55e', flexShrink: 0, marginTop: '3px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ position: 'relative', padding: '5rem 0', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>{t('features.tag')}</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              {t('features.title')}<br />
              <span className="text-accent">{t('features.titleAccent')}</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {featuresItems.map((feature, index) => {
              const Icon = featureIcons[index];
              const isFeatured = index === 0;
              return (
                <motion.div
                  key={index}
                  className={`card ${isFeatured ? 'card-featured' : ''}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    background: isFeatured ? '#f59e0b' : '#262626'
                  }}>
                    <Icon style={{ width: '20px', height: '20px', color: isFeatured ? '#0a0a0a' : '#fafaf9' }} />
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.5rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ position: 'relative', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>{t('howItWorks.tag')}</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9' }}>
              {t('howItWorks.title')}
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="font-serif" style={{ fontSize: '3.5rem', fontWeight: 400, color: '#f59e0b', opacity: 0.3, marginBottom: '0.75rem' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a8a29e', lineHeight: 1.6, fontSize: '0.9375rem' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" style={{ position: 'relative', padding: '5rem 0', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>{t('comparison.tag')}</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '0.75rem' }}>
              {t('comparison.title')}
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1rem' }}>
              {t('comparison.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="card"
            style={{ padding: 0, overflow: 'hidden' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table" style={{ minWidth: '700px' }}>
                <thead>
                  <tr>
                    <th>{t('comparison.feature')}</th>
                    <th className="col-hubsy" style={{ textAlign: 'center' }}>Hubsy</th>
                    <th style={{ textAlign: 'center' }}>Evaboot</th>
                    <th style={{ textAlign: 'center' }}>Kaspr</th>
                    <th style={{ textAlign: 'center' }}>Apollo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index}>
                      <td style={{ color: '#fafaf9', fontWeight: 500 }}>{row.name}</td>
                      <td className="col-hubsy" style={{ textAlign: 'center' }}>
                        {row.hubsy ? (
                          <Check style={{ width: '20px', height: '20px', color: '#22c55e', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#57534e', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.evaboot ? (
                          <Check style={{ width: '20px', height: '20px', color: '#22c55e', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#57534e', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.kaspr ? (
                          <Check style={{ width: '20px', height: '20px', color: '#22c55e', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#57534e', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.apollo ? (
                          <Check style={{ width: '20px', height: '20px', color: '#22c55e', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#57534e', margin: '0 auto' }} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <p style={{ fontSize: '0.8125rem', color: '#78716c', marginTop: '1.25rem', textAlign: 'center' }}>
            {t('comparison.priceNote')}
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            className="card card-featured"
            style={{ textAlign: 'center', padding: '2.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <p className="font-serif" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fafaf9', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
              &ldquo;{t('testimonial.quote')} <strong style={{ color: '#f59e0b' }}>{t('testimonial.highlight')}</strong>.&rdquo;
            </p>
            <div>
              <p style={{ color: '#fafaf9', fontWeight: 600 }}>{t('testimonial.author')}</p>
              <p style={{ color: '#a8a29e', fontSize: '0.875rem' }}>{t('testimonial.role')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ position: 'relative', padding: '5rem 0', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>{t('pricing.tag')}</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '0.75rem' }}>
              {t('pricing.title')}
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1rem' }}>
              {t('pricing.subtitle')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.25rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#78716c' }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="font-serif" style={{ fontSize: '2.25rem', fontWeight: 400, color: '#fafaf9' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8125rem', color: '#78716c' }}>{plan.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem', flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.8125rem', marginBottom: '0.625rem' }}>
                      <Check style={{ width: '14px', height: '14px', color: plan.featured ? '#f59e0b' : '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#d6d3d1' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={plan.featured ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: '#78716c', marginTop: '1.5rem' }}>
            {t('pricing.note')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9' }}>
              {t('faq.title')}
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <h3 style={{ color: '#fafaf9', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9375rem' }}>{faq.q}</h3>
                <p style={{ color: '#a8a29e', lineHeight: 1.6, fontSize: '0.875rem' }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ position: 'relative', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            className="card card-featured"
            style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              {t('cta.title')}
            </h2>
            <p style={{ fontSize: '1rem', color: '#a8a29e', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              {t('cta.subtitle')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">
                {t('cta.button')}
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <span style={{ color: '#78716c', fontSize: '0.8125rem' }}>{t('cta.note')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', padding: '2.5rem 0', borderTop: '1px solid #292524' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="font-serif" style={{ color: '#0a0a0a', fontSize: '1rem', fontWeight: 400 }}>H</span>
              </div>
              <span style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fafaf9' }}>Hubsy</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href={`/${locale}/privacy`} style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>{t('footer.privacy')}</Link>
              <Link href={`/${locale}/terms`} style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>{t('footer.terms')}</Link>
              <a href="mailto:contact@hubsy.io" style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>{t('footer.contact')}</a>
              <LanguageSwitcher />
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #292524' }}>
            <p style={{ fontSize: '0.8125rem', color: '#78716c', textAlign: 'center' }}>
              © {new Date().getFullYear()} Hubsy. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
