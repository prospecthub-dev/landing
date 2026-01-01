'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  X,
  Target,
  Mail,
  RefreshCw,
  BarChart3,
  Sparkles,
  Shield,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Effects */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />
      <div className="glow-orb-cyan" style={{ top: '-200px', right: '-100px' }} />
      <div className="glow-orb-violet" style={{ bottom: '20%', left: '-150px' }} />
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="nav-blur" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span className="font-display" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700 }}>H</span>
            </div>
            <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>Hubsy</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#features" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>Fonctionnalités</a>
            <a href="#comparison" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>Comparaison</a>
            <a href="#pricing" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>Tarifs</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#" style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>Connexion</a>
            <button className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
              Essai gratuit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <div style={{ marginBottom: '2rem' }}>
              <span className="tag">
                <Sparkles style={{ width: '14px', height: '14px' }} />
                Prospection B2B automatisée
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              Trouvez vos prochains clients<br />
              <span className="text-gradient">pendant que vous dormez.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              Hubsy trouve, enrichit et synchronise vos prospects B2B automatiquement.
              Plus de copier-coller. Plus de fichiers Excel. Juste des leads qualifiés dans votre CRM.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
              <button className="btn-primary">
                Commencer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <button className="btn-secondary">
                Voir la démo
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid #1e293b'
            }}>
              {[
                { value: '10x', label: 'Plus rapide' },
                { value: '95%', label: 'Emails vérifiés' },
                { value: '0€', label: 'Pour démarrer' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number">{stat.value}</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ position: 'relative', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Ce qui change tout</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              Concentrez-vous sur la vente,<br />
              <span className="text-gradient">pas sur la recherche.</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Hubsy automatise les tâches répétitives pour que vous puissiez vous concentrer sur ce qui compte : closer.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: Target,
                title: 'Ciblage précis',
                description: 'Définissez vos critères et Hubsy trouve les prospects qui correspondent. Secteur, taille, fonction... tout est filtrable.',
                featured: true,
              },
              {
                icon: Mail,
                title: 'Emails vérifiés',
                description: 'Chaque email est vérifié en temps réel. Fini les bounces qui ruinent votre réputation d\'expéditeur.',
                featured: false,
              },
              {
                icon: RefreshCw,
                title: 'Sync CRM automatique',
                description: 'Vos prospects arrivent directement dans HubSpot. Zéro import, zéro doublon, zéro prise de tête.',
                featured: false,
              },
              {
                icon: Shield,
                title: '100% conforme RGPD',
                description: 'Enrichissement via Dropcontact = conformité RGPD garantie. Prospectez l\'esprit tranquille.',
                featured: false,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`glass-card ${feature.featured ? 'glass-card-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  background: feature.featured
                    ? 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)'
                    : '#1e293b'
                }}>
                  <feature.icon style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ position: 'relative', padding: '6rem 0', background: 'rgba(15, 23, 42, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Comment ça marche</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white' }}>
              3 étapes. C&apos;est tout.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              {
                step: '01',
                title: 'Définissez votre cible',
                description: 'Sélectionnez vos critères : secteur, taille d\'entreprise, poste, localisation. Hubsy s\'occupe du reste.',
              },
              {
                step: '02',
                title: 'Lancez la prospection',
                description: 'Hubsy trouve automatiquement les prospects correspondants et enrichit leurs données (email, entreprise...).',
              },
              {
                step: '03',
                title: 'Recevez dans votre CRM',
                description: 'Les leads arrivent directement dans HubSpot, prêts à être contactés. Vous n\'avez plus qu\'à vendre.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="font-display text-gradient" style={{ fontSize: '4rem', fontWeight: 700, opacity: 0.3, marginBottom: '1rem' }}>
                  {item.step}
                </div>
                <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" style={{ position: 'relative', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Comparaison</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              Pourquoi Hubsy ?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
              Comparatif objectif face aux outils du marché.
            </p>
          </motion.div>

          <motion.div
            className="glass-card"
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
                    <th style={{ textAlign: 'center' }}>Phantombuster</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Extraction automatique', hubsy: true, evaboot: true, kaspr: true, phantom: true },
                    { feature: 'Enrichissement email', hubsy: true, evaboot: true, kaspr: true, phantom: true },
                    { feature: 'Conforme RGPD', hubsy: true, evaboot: true, kaspr: true, phantom: false },
                    { feature: 'Intégration CRM native', hubsy: true, evaboot: false, kaspr: true, phantom: true },
                    { feature: 'Plan gratuit', hubsy: true, evaboot: false, kaspr: true, phantom: false },
                    { feature: 'Auto-adaptation', hubsy: true, evaboot: false, kaspr: false, phantom: false },
                    { feature: 'Support français', hubsy: true, evaboot: true, kaspr: true, phantom: false },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td style={{ color: 'white', fontWeight: 500 }}>{row.feature}</td>
                      <td className="col-hubsy" style={{ textAlign: 'center' }}>
                        {row.hubsy ? (
                          <Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#475569', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.evaboot ? (
                          <Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#475569', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.kaspr ? (
                          <Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#475569', margin: '0 auto' }} />
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {row.phantom ? (
                          <Check style={{ width: '20px', height: '20px', color: '#10b981', margin: '0 auto' }} />
                        ) : (
                          <X style={{ width: '20px', height: '20px', color: '#475569', margin: '0 auto' }} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '1.5rem', textAlign: 'center' }}>
            * Prix concurrents : Evaboot 29-139€/mois, Kaspr 0-102€/mois, Phantombuster 69-439€/mois
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ position: 'relative', padding: '6rem 0', background: 'rgba(15, 23, 42, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Tarifs</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              Des prix clairs, sans surprise.
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
              Commencez gratuitement. Passez à la vitesse supérieure quand vous êtes prêt.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'Gratuit',
                price: '0€',
                period: '/mois',
                description: 'Pour tester Hubsy',
                features: ['50 prospects/mois', '1 campagne active', 'Enrichissement email', 'Support communauté'],
                cta: 'Commencer',
                featured: false,
              },
              {
                name: 'Pro',
                price: '49€',
                period: '/mois',
                description: 'Pour les commerciaux',
                features: ['500 prospects/mois', 'Campagnes illimitées', 'Intégration HubSpot', 'Support prioritaire', 'Export CSV'],
                cta: 'Essai 14 jours',
                featured: true,
              },
              {
                name: 'Équipe',
                price: '99€',
                period: '/siège/mois',
                description: 'Pour les équipes sales',
                features: ['2 000 prospects/mois', 'Utilisateurs multiples', 'Analytics avancés', 'Support dédié', 'Accès API'],
                cta: 'Contacter',
                featured: false,
              },
              {
                name: 'Agence',
                price: '299€',
                period: '/mois',
                description: '5 clients inclus',
                features: ['Prospects illimités', 'Gestion multi-comptes', 'White-label disponible', 'Account manager', 'SLA garanti'],
                cta: 'Contacter',
                featured: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 className="font-display" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '0.25rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="font-display" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{plan.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem', flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      <Check style={{ width: '16px', height: '16px', color: plan.featured ? '#22d3ee' : '#10b981', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#cbd5e1' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={plan.featured ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#64748b', marginTop: '2rem' }}>
            Tous les prix sont HT. Facturation annuelle -20%.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ position: 'relative', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            className="glass-card glass-card-featured"
            style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BarChart3 style={{ width: '48px', height: '48px', color: '#22d3ee', margin: '0 auto 1.5rem' }} />
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>
              Prêt à remplir votre pipeline ?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Rejoignez les équipes commerciales qui génèrent des leads qualifiés en automatique.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">
                Démarrer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Sans carte bancaire</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', padding: '3rem 0', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="font-display" style={{ color: 'white', fontSize: '0.875rem', fontWeight: 700 }}>H</span>
              </div>
              <span className="font-display" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>Hubsy</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="#" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none' }}>Confidentialité</a>
              <a href="#" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none' }}>CGU</a>
              <a href="#" style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              © {new Date().getFullYear()} Hubsy. Tous droits réservés.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Enrichissement conforme RGPD par Dropcontact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
