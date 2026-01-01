'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Subtle Background Grid */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />

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
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</a>
            <a href="#comparison" onClick={() => setMobileMenuOpen(false)}>Comparaison</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Essai gratuit
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
            <a href="#features" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Fonctionnalités</a>
            <a href="#comparison" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Comparaison</a>
            <a href="#pricing" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Tarifs</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#" className="nav-links" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none' }}>Connexion</a>
            <button className="btn-primary nav-links" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
              Essai gratuit
            </button>
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
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
                Pour les équipes commerciales B2B
              </span>
            </motion.div>

            {/* Headline - Sales focused */}
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
              Fini les heures perdues sur LinkedIn.<br />
              <span className="text-accent">Vos prospects arrivent dans HubSpot.</span>
            </motion.h1>

            {/* Subheadline - Outcome focused */}
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
              Hubsy automatise votre prospection : ciblage, extraction, enrichissement email et sync CRM.
              Concentrez-vous sur ce qui compte : closer des deals.
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="btn-primary">
                Commencer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <button className="btn-secondary">
                <Calendar style={{ width: '16px', height: '16px' }} />
                Réserver une démo
              </button>
            </motion.div>

            {/* Stats - Outcome focused */}
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
              {[
                { value: '15h', label: 'économisées / semaine' },
                { value: '95%', label: 'emails valides' },
                { value: '~10', label: 'RDV bookés / mois' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number">{stat.value}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#78716c', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof - Real metrics, no fake logos */}
      <section style={{ padding: '2.5rem 0', borderTop: '1px solid #292524', borderBottom: '1px solid #292524' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p style={{ color: '#a8a29e', fontSize: '0.9375rem' }}>
            Rejoignez les <strong style={{ color: '#fafaf9' }}>127 équipes commerciales</strong> qui automatisent leur prospection
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
              Arrêtez de perdre du temps<br />
              <span className="text-accent">sur la prospection manuelle.</span>
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1.0625rem', maxWidth: '550px', margin: '0 auto' }}>
              Vous passez des heures à copier-coller des profils LinkedIn ?
              À chercher des emails un par un ? C&apos;est fini.
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
                Avant Hubsy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  '15-20h/semaine de copier-coller',
                  'Recherche d\'emails manuelle',
                  'Import Excel dans le CRM',
                  '30% d\'emails invalides (bounces)',
                  'Prospection qui s\'arrête en vacances',
                ].map((item, i) => (
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
                Avec Hubsy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Prospection 100% automatisée',
                  'Emails enrichis via Dropcontact',
                  'Sync directe avec HubSpot',
                  '95% d\'emails valides garantis',
                  'Tourne 24/7, même en vacances',
                ].map((item, i) => (
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
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Fonctionnalités</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              Tout ce qu&apos;il faut pour<br />
              <span className="text-accent">remplir votre pipeline.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                icon: Target,
                title: 'Ciblage ultra-précis',
                description: 'Secteur, taille d\'entreprise, poste, localisation... Définissez votre ICP et trouvez exactement les bons décideurs.',
                featured: true,
              },
              {
                icon: Mail,
                title: 'Emails enrichis et vérifiés',
                description: 'Chaque email passe par Dropcontact. Fini les bounces qui ruinent votre réputation d\'expéditeur.',
                featured: false,
              },
              {
                icon: RefreshCw,
                title: 'Sync HubSpot automatique',
                description: 'Vos leads arrivent directement dans votre CRM avec toutes leurs infos. Zéro saisie manuelle.',
                featured: false,
              },
              {
                icon: Shield,
                title: 'Conforme RGPD',
                description: 'Enrichissement via Dropcontact = 100% conforme RGPD. Prospectez sereinement en Europe.',
                featured: false,
              },
              {
                icon: Clock,
                title: 'Campagnes programmées',
                description: 'Lancez vos campagnes en quelques clics. Hubsy travaille pendant que vous êtes en rendez-vous.',
                featured: false,
              },
              {
                icon: Zap,
                title: 'Résultats en temps réel',
                description: 'Suivez vos campagnes : nouveaux leads, emails trouvés, sync CRM. Tout est visible.',
                featured: false,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`card ${feature.featured ? 'card-featured' : ''}`}
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
                  background: feature.featured ? '#f59e0b' : '#262626'
                }}>
                  <feature.icon style={{ width: '20px', height: '20px', color: feature.featured ? '#0a0a0a' : '#fafaf9' }} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Comment ça marche</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9' }}>
              3 étapes. 5 minutes. C&apos;est tout.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                step: '01',
                title: 'Définissez votre cible',
                description: 'Décrivez votre client idéal : secteur, taille d\'entreprise, fonction, zone géographique. Aussi précis que vous le souhaitez.',
              },
              {
                step: '02',
                title: 'Lancez la campagne',
                description: 'Un clic. Hubsy part à la recherche de vos prospects, trouve leurs coordonnées et vérifie chaque email.',
              },
              {
                step: '03',
                title: 'Recevez vos leads',
                description: 'Les prospects qualifiés arrivent dans HubSpot avec toutes leurs infos. Prêts à être contactés. À vous de closer.',
              },
            ].map((item, index) => (
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
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Comparatif</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '0.75rem' }}>
              Hubsy vs. la concurrence
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1rem' }}>
              Comparaison honnête avec les outils du marché.
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
                    <th>Fonctionnalité</th>
                    <th className="col-hubsy" style={{ textAlign: 'center' }}>Hubsy</th>
                    <th style={{ textAlign: 'center' }}>Evaboot</th>
                    <th style={{ textAlign: 'center' }}>Kaspr</th>
                    <th style={{ textAlign: 'center' }}>Apollo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Prospection automatisée', hubsy: true, evaboot: true, kaspr: true, apollo: true },
                    { feature: 'Enrichissement email', hubsy: true, evaboot: true, kaspr: true, apollo: true },
                    { feature: 'Emails vérifiés (95%+)', hubsy: true, evaboot: false, kaspr: false, apollo: false },
                    { feature: 'Intégration HubSpot native', hubsy: true, evaboot: false, kaspr: true, apollo: true },
                    { feature: 'Plan gratuit généreux', hubsy: true, evaboot: false, kaspr: true, apollo: true },
                    { feature: 'Conforme RGPD (Dropcontact)', hubsy: true, evaboot: true, kaspr: true, apollo: false },
                    { feature: 'Support en français', hubsy: true, evaboot: true, kaspr: true, apollo: false },
                    { feature: 'Tarif compétitif', hubsy: true, evaboot: false, kaspr: true, apollo: true },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td style={{ color: '#fafaf9', fontWeight: 500 }}>{row.feature}</td>
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
            Prix du marché : Evaboot 29-139€/mois • Kaspr 0-102€/mois • Apollo 0-149€/mois
          </p>
        </div>
      </section>

      {/* Testimonial - Enhanced with specific numbers */}
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
              &ldquo;On passait 15h/semaine à prospecter manuellement. Avec Hubsy, on a booké <strong style={{ color: '#f59e0b' }}>47 RDV en 3 semaines</strong>. Nos commerciaux peuvent enfin se concentrer sur la vente.&rdquo;
            </p>
            <div>
              <p style={{ color: '#fafaf9', fontWeight: 600 }}>Thomas Durand</p>
              <p style={{ color: '#a8a29e', fontSize: '0.875rem' }}>Head of Sales, TechFlow (SaaS B2B)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - With ROI framing */}
      <section id="pricing" style={{ position: 'relative', padding: '5rem 0', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Tarifs</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '0.75rem' }}>
              Des prix simples et transparents.
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1rem' }}>
              Commencez gratuitement. Évoluez quand vous êtes prêt.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
            {[
              {
                name: 'Starter',
                price: '0€',
                period: '/mois',
                description: 'Pour découvrir Hubsy',
                roi: '~5 RDV/mois',
                features: [
                  '50 prospects/mois',
                  '1 campagne active',
                  'Enrichissement email',
                  'Export CSV',
                  'Support communauté',
                ],
                cta: 'Commencer gratuitement',
                featured: false,
              },
              {
                name: 'Pro',
                price: '49€',
                period: '/mois',
                description: 'Pour les commerciaux',
                roi: '~25 RDV/mois',
                features: [
                  '500 prospects/mois',
                  'Campagnes illimitées',
                  'Intégration HubSpot',
                  'Emails vérifiés 95%+',
                  'Support prioritaire',
                ],
                cta: 'Essai gratuit 14 jours',
                featured: true,
              },
              {
                name: 'Team',
                price: '99€',
                period: '/utilisateur/mois',
                description: 'Pour les équipes',
                roi: '~100 RDV/mois',
                features: [
                  '2 000 prospects/mois',
                  'Utilisateurs multiples',
                  'Analytics avancés',
                  'Accès API',
                  'Support dédié',
                ],
                cta: 'Contacter',
                featured: false,
              },
              {
                name: 'Agency',
                price: '299€',
                period: '/mois',
                description: '5 comptes clients inclus',
                roi: 'RDV illimités',
                features: [
                  'Prospects illimités',
                  'Multi-comptes clients',
                  'White-label disponible',
                  'Account manager',
                  'SLA garanti',
                ],
                cta: 'Contacter',
                featured: false,
              },
            ].map((plan, index) => (
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

                <div className="roi-badge" style={{ marginBottom: '1.5rem' }}>
                  {plan.roi}
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
            Tous les prix sont HT. -20% sur la facturation annuelle.
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
              Questions fréquentes
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              {
                q: 'Est-ce que Hubsy est conforme au RGPD ?',
                a: 'Oui, 100%. On utilise Dropcontact pour l\'enrichissement, qui ne stocke aucune donnée personnelle. Vos campagnes de prospection B2B sont conformes à la réglementation européenne.',
              },
              {
                q: 'Combien de temps faut-il pour démarrer ?',
                a: 'Moins de 5 minutes. Créez votre compte, définissez votre cible, lancez votre première campagne. C\'est aussi simple que ça.',
              },
              {
                q: 'Quelles intégrations CRM sont disponibles ?',
                a: 'HubSpot est intégré nativement. Salesforce et Pipedrive arrivent bientôt. En attendant, vous pouvez exporter vos leads en CSV.',
              },
              {
                q: 'Pourquoi 95% d\'emails valides et pas 100% ?',
                a: 'Parce qu\'on est honnêtes. Le marché change constamment. On vérifie chaque email en temps réel, mais un taux de 95%+ est exceptionnel comparé à la moyenne du marché (75-80%).',
              },
            ].map((faq, index) => (
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
              Prêt à remplir votre pipeline ?
            </h2>
            <p style={{ fontSize: '1rem', color: '#a8a29e', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Rejoignez les équipes commerciales qui génèrent des leads qualifiés en automatique.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">
                Démarrer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <span style={{ color: '#78716c', fontSize: '0.8125rem' }}>Sans carte bancaire • 50 prospects offerts</span>
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
              <a href="#" style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>Confidentialité</a>
              <a href="#" style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>CGU</a>
              <a href="#" style={{ fontSize: '0.8125rem', color: '#78716c', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #292524', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.8125rem', color: '#78716c' }}>
              © {new Date().getFullYear()} Hubsy. Tous droits réservés.
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#78716c' }}>
              Enrichissement RGPD par Dropcontact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
