import { ParticlesBackground } from './components/ParticlesBackground';
import { useTranslation } from './i18n';
import { useState } from 'react';

function App() {
  const { t, language, setLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'pt' | 'en');
  };

  const FEATURES = [
    { key: 'f1', icon: '📦' },
    { key: 'f2', icon: '💰' },
    { key: 'f3', icon: '🛒' },
    { key: 'f4', icon: '🔁' },
    { key: 'f5', icon: '👥' },
    { key: 'f6', icon: '💳' },
    { key: 'f7', icon: '📋' },
    { key: 'f8', icon: '🔄' },
    { key: 'f9', icon: '🏭' },
    { key: 'f10', icon: '📅' },
    { key: 'f11', icon: '🤝' },
    { key: 'f12', icon: '⏰' },
  ];

  return (
    <>
      <ParticlesBackground
        particles={200}
        speed={0.5}
        connections={150}
        sticky={true}
        color="#00ffff"
        backgroundColor="#0a0f18"
        mouseReactive={true}
        distribution="full"
      />

      {/* Navbar */}
      <nav className="navbar glass">
        <div className="nav-content">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo(0,0)}>
            <img src="./images/logo.png" alt="D" style={{ height: '32px' }} />
            <span>DefolTech</span>
          </div>
          <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#funcionalidades" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</a></li>
            <li><a href="#brdd" onClick={() => setIsMenuOpen(false)}>BRDD</a></li>
            <li><a href="#incubadora" onClick={() => setIsMenuOpen(false)}>{t('nav.incubator')}</a></li>
            <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
            <li>
              <select 
                value={language} 
                onChange={handleLanguageChange}
                style={{
                  background: 'var(--glass-bg)',
                  color: 'var(--text-main)',
                  border: '1px solid var(--glass-border)',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="pt" style={{ background: 'var(--bg-dark)' }}>PT-BR</option>
                <option value="en" style={{ background: 'var(--bg-dark)' }}>EN</option>
              </select>
            </li>
            <li><a href="https://github.com/defol-tech" target="_blank" rel="noreferrer" className="btn-primary">GitHub</a></li>
          </ul>
        </div>
      </nav>
          {/* Hero Section */}
          <header className="hero">
            <div className="hero-bg"></div>
            <div className="container">
              <div className="hero-content-wrapper">
                <div className="hero-text">
                  <h1 className="hero-title">
                    {t('hero.title.pre')} <span className="gradient-text">{t('hero.title.highlight')}</span>
                  </h1>
                  <p className="hero-subtitle">
                    {t('hero.subtitle')}
                  </p>
                  <div className="hero-actions">
                    <a href="#servicos" className="btn-primary large">{t('hero.btn.services')}</a>
                    <a href="#contato" className="btn-secondary large">{t('hero.btn.contact')}</a>
                  </div>
                </div>
                <div className="hero-graphic">
                  <img 
                    src="./images/logo.png" 
                    alt="DefolTech Logo" 
                    style={{ 
                      maxWidth: '80%', 
                      maxHeight: '300px', 
                      animation: 'float 6s ease-in-out infinite' 
                    }} 
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Missão, Visão e Valores */}
          <section id="sobre" className="section bg-alt">
            <div className="container">
              <div className="glass" style={{ padding: '60px', borderRadius: '24px' }}>
                <h2 className="text-center mb-4">{t('about.title')}</h2>
                <p className="text-center mb-5" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                  {t('about.subtitle')}
                </p>
                
                <div className="cards-grid" style={{ marginTop: 0 }}>
                  <div className="card glass interactive">
                    <div className="icon">🎯</div>
                    <h3>{t('about.mission.title')}</h3>
                    <p>{t('about.mission.desc')}</p>
                  </div>
                  <div className="card glass interactive">
                    <div className="icon">👁️</div>
                    <h3>{t('about.vision.title')}</h3>
                    <p>{t('about.vision.desc')}</p>
                  </div>
                  <div className="card glass interactive">
                    <div className="icon">💎</div>
                    <h3>{t('about.values.title')}</h3>
                    <p>{t('about.values.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BRDD Section */}
          <section id="brdd" className="section">
            <div className="container">
              <div className="section-header text-center">
                <h2 className="gradient-text">BRDD Ecosystem</h2>
                <p>Nossa metodologia proprietária para engenharia de software de alta precisão.</p>
              </div>

              <div className="cards-grid">
                <div className="card glass interactive" style={{ border: '1px solid var(--defol-blue-light)' }}>
                  <div className="status-badge" style={{ 
                    position: 'absolute', top: '10px', right: '10px', 
                    background: 'rgba(0, 255, 0, 0.2)', color: '#00ff00',
                    padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem'
                  }}>
                    {t('brdd.async.status')}
                  </div>
                  <div className="icon">⚡</div>
                  <h3>{t('brdd.async.title')}</h3>
                  <p>{t('brdd.async.desc')}</p>
                  <a href="https://brdd-design.github.io/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ marginTop: '20px', width: '100%', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}>
                    {t('brdd.async.view_more')}
                  </a>
                </div>
                
                <div className="card glass" style={{ opacity: 0.7 }}>
                  <div className="status-badge" style={{ 
                    position: 'absolute', top: '10px', right: '10px', 
                    background: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)',
                    padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem'
                  }}>
                    Beta
                  </div>
                  <div className="icon">⚙️</div>
                  <h3>BRDD Async-BPMN</h3>
                  <p>Orquestração visual baseada em JSON e diagramas de processo.</p>
                </div>

                <div className="card glass" style={{ opacity: 0.7 }}>
                  <div className="status-badge" style={{ 
                    position: 'absolute', top: '10px', right: '10px', 
                    background: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)',
                    padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem'
                  }}>
                    Planning
                  </div>
                  <div className="icon">☁️</div>
                  <h3>BRDD Cloud</h3>
                  <p>Infraestrutura como código orientada a regras de negócio.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Funcionalidades */}
          <section id="funcionalidades" className="section bg-alt">
            <div className="container">
              <div className="section-header text-center">
                <h2>{t('features.title')}</h2>
                <p>{t('features.subtitle')}</p>
              </div>

              <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {FEATURES.map((item) => (
                  <div key={item.key} className="card glass interactive" style={{ padding: '20px' }}>
                    <div className="icon" style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>
                      {t(`features.${item.key}` as any)}
                    </h4>
                    <p style={{ fontSize: '0.85rem' }}>{t(`features.${item.key}.desc` as any)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Incubadora */}
          <section id="incubadora" className="section">
            <div className="container">
              <div className="glass" style={{ padding: '60px', borderRadius: '24px', border: '1px solid var(--defol-blue-light)' }}>
                <div className="section-header text-center">
                  <h2 className="gradient-text">{t('incubator.title')}</h2>
                  <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {t('incubator.subtitle')}
                  </p>
                </div>

                <div className="cards-grid" style={{ marginTop: '40px' }}>
                  <div className="card glass interactive">
                    <div className="icon">📉</div>
                    <h3>{t('incubator.card1.title')}</h3>
                    <p>{t('incubator.card1.desc')}</p>
                  </div>
                  <div className="card glass interactive">
                    <div className="icon">🤝</div>
                    <h3>{t('incubator.card2.title')}</h3>
                    <p>{t('incubator.card2.desc')}</p>
                  </div>
                  <div className="card glass interactive">
                    <div className="icon">🚀</div>
                    <h3>{t('incubator.card3.title')}</h3>
                    <p>{t('incubator.card3.desc')}</p>
                  </div>
                </div>

                <div className="text-center" style={{ marginTop: '50px' }}>
                  <a href="#contato" className="btn-primary large">
                    {t('incubator.cta')}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Serviços */}
          <section id="servicos" className="section bg-alt">
            <div className="container">
              <div className="section-header text-center">
                <h2>{t('services.title')}</h2>
                <p>{t('services.subtitle')}</p>
              </div>

              <div className="cards-grid">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="card glass interactive">
                    <div className="icon">{num === 1 ? '💻' : num === 2 ? '⚙️' : num === 3 ? '🏭' : '🤝'}</div>
                    <h3 style={{ color: 'var(--defol-blue-light)' }}>{t(`services.s${num}.title` as any)}</h3>
                    <p>{t(`services.s${num}.desc` as any)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


      {/* Footer / Contato Integrado */}
      <footer id="contato">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src="./images/logo.png" alt="D" style={{ height: '28px' }} />
                <span>DefolTech</span>
              </div>
              <p>{t('footer.description' as any) || 'Transformando ideias em software. Excelência, inovação e agilidade para o seu negócio.'}</p>
            </div>
            
            <div className="footer-col">
              <h4>{t('footer.nav_title' as any)}</h4>
              <ul>
                <li><a href="#sobre">{t('nav.about')}</a></li>
                <li><a href="#funcionalidades">{t('nav.features')}</a></li>
                <li><a href="#incubadora">{t('nav.incubator')}</a></li>
                <li><a href="#servicos">{t('nav.services')}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>{t('footer.social_title' as any)}</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/defol-tech/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    @defol-tech
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/defol-tech/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    @defol-tech
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/defol-tech" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    @defol-tech
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('footer.contact_title' as any)}</h4>
              <ul>
                <li><a href="mailto:defoltech@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✉️ defoltech@gmail.com</a></li>
                <li><a href="https://wa.me/5541984068509" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📱 +55 41 98406-8509</a></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📍 {t('contact.address' as any)}</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ justifyContent: 'center' }}>
            <p className="copyright">© {new Date().getFullYear()} {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
