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
  Shield,
  Clock,
  Users,
  Zap,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Subtle Background Grid */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />

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

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#features" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Fonctionnalites</a>
            <a href="#comparison" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Comparaison</a>
            <a href="#pricing" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none', transition: 'color 0.2s' }}>Tarifs</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#" style={{ fontSize: '0.875rem', color: '#a8a29e', textDecoration: 'none' }}>Connexion</a>
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
                Prospection B2B automatisee
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: '#fafaf9',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Generez des leads qualifies<br />
              <span className="text-accent">pendant que vous vendez.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: '1.25rem',
              color: '#a8a29e',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              Hubsy trouve vos prospects ideaux, enrichit leurs emails et les envoie dans votre CRM.
              Automatiquement. Vous n&apos;avez plus qu&apos;a closer.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
              <button className="btn-primary">
                Commencer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <button className="btn-secondary">
                Voir la demo
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid #262626'
            }}>
              {[
                { value: '10x', label: 'Plus rapide' },
                { value: '95%', label: 'Emails valides' },
                { value: '0EUR', label: 'Pour commencer' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number">{stat.value}</div>
                  <div style={{ fontSize: '0.875rem', color: '#78716c', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid #262626', borderBottom: '1px solid #262626' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ textAlign: 'center', color: '#78716c', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Utilise par les equipes commerciales de startups en croissance
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', opacity: 0.5 }}>
            {['SaaS Co.', 'Growth Agency', 'Tech Startup', 'Sales Team'].map((company, i) => (
              <span key={i} style={{ fontSize: '1.25rem', color: '#78716c', fontWeight: 600 }}>
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              Arretez de perdre du temps<br />
              <span className="text-accent">sur la prospection manuelle.</span>
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Vous passez des heures a copier-coller des profils ? A chercher des emails ?
              A remplir des fichiers Excel ? C&apos;est fini.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Before */}
            <motion.div
              className="card"
              style={{ borderColor: 'rgba(220, 38, 38, 0.3)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ color: '#dc2626', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <X style={{ width: '20px', height: '20px' }} />
                Avant Hubsy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  '3-4 heures/jour de prospection manuelle',
                  'Copier-coller depuis les reseaux pro',
                  'Chercher les emails un par un',
                  'Import manuel dans le CRM',
                  '30% d\'emails invalides (bounces)',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#a8a29e' }}>
                    <X style={{ width: '16px', height: '16px', color: '#dc2626', flexShrink: 0, marginTop: '4px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              className="card card-featured"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check style={{ width: '20px', height: '20px' }} />
                Avec Hubsy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Prospection 100% automatisee',
                  'Extraction en 1 clic de vos cibles',
                  'Emails enrichis et verifies automatiquement',
                  'Sync directe avec HubSpot',
                  '95% d\'emails valides garantis',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#d6d3d1' }}>
                    <Check style={{ width: '16px', height: '16px', color: '#22c55e', flexShrink: 0, marginTop: '4px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ position: 'relative', padding: '6rem 0', background: '#171717' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Fonctionnalites</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              Tout ce qu&apos;il faut pour<br />
              <span className="text-accent">remplir votre pipeline.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: Target,
                title: 'Ciblage ultra-precis',
                description: 'Secteur, taille d\'entreprise, poste, localisation... Definissez votre ICP et trouvez exactement les bons prospects.',
                featured: true,
              },
              {
                icon: Mail,
                title: 'Emails enrichis et verifies',
                description: 'Chaque email passe par notre systeme de verification. Fini les bounces qui ruinent votre reputation.',
                featured: false,
              },
              {
                icon: RefreshCw,
                title: 'Sync HubSpot automatique',
                description: 'Vos leads arrivent directement dans votre CRM, avec toutes leurs infos. Zero saisie manuelle.',
                featured: false,
              },
              {
                icon: Shield,
                title: 'Conforme RGPD',
                description: 'Enrichissement via Dropcontact = 100% conforme RGPD. Prospectez l\'esprit tranquille en Europe.',
                featured: false,
              },
              {
                icon: Clock,
                title: 'Campagnes programmees',
                description: 'Lancez vos campagnes de prospection en quelques clics. Hubsy travaille pendant que vous dormez.',
                featured: false,
              },
              {
                icon: Zap,
                title: 'Resultats en temps reel',
                description: 'Suivez l\'avancement de vos campagnes. Nouveaux leads, emails trouves, synchro CRM... tout est visible.',
                featured: false,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`card ${feature.featured ? 'card-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  background: feature.featured ? '#f59e0b' : '#262626'
                }}>
                  <feature.icon style={{ width: '20px', height: '20px', color: feature.featured ? '#0a0a0a' : '#fafaf9' }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.5rem' }}>
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
      <section style={{ position: 'relative', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Comment ca marche</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9' }}>
              3 etapes. 5 minutes. C&apos;est tout.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              {
                step: '01',
                title: 'Definissez votre cible',
                description: 'Decrivez votre client ideal : secteur d\'activite, taille d\'entreprise, fonction, zone geographique. Soyez aussi precis que vous voulez.',
              },
              {
                step: '02',
                title: 'Lancez la campagne',
                description: 'Un clic suffit. Hubsy part a la recherche de vos prospects, trouve leurs coordonnees et verifie chaque email en temps reel.',
              },
              {
                step: '03',
                title: 'Recevez vos leads',
                description: 'Les prospects qualifies arrivent directement dans HubSpot. Avec leurs infos enrichies. Prets a etre contactes. A vous de jouer.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="font-serif text-accent" style={{ fontSize: '4rem', fontWeight: 400, opacity: 0.4, marginBottom: '1rem' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a8a29e', lineHeight: 1.6 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" style={{ position: 'relative', padding: '6rem 0', background: '#171717' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Comparatif</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              Hubsy vs. la concurrence
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1.125rem' }}>
              Comparaison honnete avec les outils du marche.
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
                    <th>Fonctionnalite</th>
                    <th className="col-hubsy" style={{ textAlign: 'center' }}>Hubsy</th>
                    <th style={{ textAlign: 'center' }}>Evaboot</th>
                    <th style={{ textAlign: 'center' }}>Kaspr</th>
                    <th style={{ textAlign: 'center' }}>Apollo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Prospection automatisee', hubsy: true, evaboot: true, kaspr: true, apollo: true },
                    { feature: 'Enrichissement email', hubsy: true, evaboot: true, kaspr: true, apollo: true },
                    { feature: 'Emails verifies (95%+)', hubsy: true, evaboot: false, kaspr: false, apollo: false },
                    { feature: 'Integration HubSpot native', hubsy: true, evaboot: false, kaspr: true, apollo: true },
                    { feature: 'Plan gratuit genereux', hubsy: true, evaboot: false, kaspr: true, apollo: true },
                    { feature: 'Conforme RGPD (Dropcontact)', hubsy: true, evaboot: true, kaspr: true, apollo: false },
                    { feature: 'Support en francais', hubsy: true, evaboot: true, kaspr: true, apollo: false },
                    { feature: 'Tarif competitif', hubsy: true, evaboot: false, kaspr: true, apollo: true },
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

          <p style={{ fontSize: '0.875rem', color: '#78716c', marginTop: '1.5rem', textAlign: 'center' }}>
            Prix moyens du marche : Evaboot 29-139EUR/mois - Kaspr 0-102EUR/mois - Apollo 0-149EUR/mois
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            className="card card-featured"
            style={{ textAlign: 'center', padding: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
            <p className="font-serif" style={{ fontSize: '1.5rem', color: '#fafaf9', lineHeight: 1.6, marginBottom: '2rem', fontStyle: 'italic' }}>
              &ldquo;On passait 15h/semaine a prospecter manuellement. Avec Hubsy, on genere 3x plus de leads en 2h. Nos commerciaux peuvent enfin se concentrer sur la vente.&rdquo;
            </p>
            <div>
              <p style={{ color: '#fafaf9', fontWeight: 600 }}>Thomas D.</p>
              <p style={{ color: '#a8a29e', fontSize: '0.875rem' }}>Head of Sales, SaaS B2B</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ position: 'relative', padding: '6rem 0', background: '#171717' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Tarifs</span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1rem' }}>
              Des prix simples et transparents.
            </h2>
            <p style={{ color: '#a8a29e', fontSize: '1.125rem' }}>
              Commencez gratuitement. Evoluez quand vous etes pret.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'Starter',
                price: '0EUR',
                period: '/mois',
                description: 'Pour decouvrir Hubsy',
                features: [
                  '50 prospects/mois',
                  '1 campagne active',
                  'Enrichissement email',
                  'Export CSV',
                  'Support communaute',
                ],
                cta: 'Commencer gratuitement',
                featured: false,
              },
              {
                name: 'Pro',
                price: '49EUR',
                period: '/mois',
                description: 'Pour les commerciaux',
                features: [
                  '500 prospects/mois',
                  'Campagnes illimitees',
                  'Integration HubSpot',
                  'Emails verifies 95%+',
                  'Support prioritaire',
                ],
                cta: 'Essai gratuit 14 jours',
                featured: true,
              },
              {
                name: 'Team',
                price: '99EUR',
                period: '/utilisateur/mois',
                description: 'Pour les equipes',
                features: [
                  '2 000 prospects/mois',
                  'Utilisateurs multiples',
                  'Analytics avances',
                  'Acces API',
                  'Support dedie',
                ],
                cta: 'Contacter',
                featured: false,
              },
              {
                name: 'Agency',
                price: '299EUR',
                period: '/mois',
                description: '5 comptes clients inclus',
                features: [
                  'Prospects illimites',
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fafaf9', marginBottom: '0.25rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#78716c' }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fafaf9' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.875rem', color: '#78716c' }}>{plan.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem', flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      <Check style={{ width: '16px', height: '16px', color: plan.featured ? '#f59e0b' : '#22c55e', flexShrink: 0, marginTop: '2px' }} />
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

          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#78716c', marginTop: '2rem' }}>
            Tous les prix sont HT. -20% sur la facturation annuelle.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9' }}>
              Questions frequentes
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Est-ce que Hubsy est conforme au RGPD ?',
                a: 'Oui, 100%. On utilise Dropcontact pour l\'enrichissement, qui ne stocke aucune donnee personnelle. Vos campagnes de prospection B2B sont conformes a la reglementation europeenne.',
              },
              {
                q: 'Combien de temps faut-il pour demarrer ?',
                a: 'Moins de 5 minutes. Creez votre compte, definissez votre cible, lancez votre premiere campagne. C\'est aussi simple que ca.',
              },
              {
                q: 'Quelles integrations CRM sont disponibles ?',
                a: 'HubSpot est integre nativement. Salesforce et Pipedrive arrivent bientot. En attendant, vous pouvez toujours exporter vos leads en CSV.',
              },
              {
                q: 'Pourquoi 95% d\'emails valides et pas 100% ?',
                a: 'Parce qu\'on est honnetes. Le marche change constamment. On verifie chaque email en temps reel, mais un taux de 95%+ est deja exceptionnel compare a la moyenne du marche (75-80%).',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 style={{ color: '#fafaf9', fontWeight: 600, marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#a8a29e', lineHeight: 1.6 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ position: 'relative', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            className="card card-featured"
            style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fafaf9', marginBottom: '1.5rem' }}>
              Pret a remplir votre pipeline ?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#a8a29e', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Rejoignez les equipes commerciales qui generent des leads qualifies en automatique.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">
                Demarrer gratuitement
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              <span style={{ color: '#78716c', fontSize: '0.875rem' }}>Sans carte bancaire - 50 prospects offerts</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', padding: '3rem 0', borderTop: '1px solid #262626' }}>
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
              <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fafaf9' }}>Hubsy</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="#" style={{ fontSize: '0.875rem', color: '#78716c', textDecoration: 'none' }}>Confidentialite</a>
              <a href="#" style={{ fontSize: '0.875rem', color: '#78716c', textDecoration: 'none' }}>CGU</a>
              <a href="#" style={{ fontSize: '0.875rem', color: '#78716c', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #262626', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#78716c' }}>
              {new Date().getFullYear()} Hubsy. Tous droits reserves.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#78716c' }}>
              Enrichissement RGPD par Dropcontact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
