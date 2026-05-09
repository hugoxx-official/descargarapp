import { useEffect, useState } from 'react'
import { APP_CONFIG, FEATURES, SECURITY_INFO, INSTALL_STEPS } from './config/appConfig'
import './index.css'

// Iconos SVG
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4483-.9993-.9994s.4482-.9994.9993-.9994c.5512 0 .9994.4483.9994.9994.0001.5511-.4482.9994-.9994.9994m-11.046 0c-.5512 0-.9994-.4483-.9994-.9994s.4482-.9994.9994-.9994c.5511 0 .9993.4483.9993.9994 0 .5511-.4482.9994-.9993.9994m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0225 3.5027C15.5902 8.149 13.8533 7.649 12 7.649c-1.8532 0-3.5902.5-5.1362 1.3014L4.8413 5.4477a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.7 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.69.82-1.27 2.14-1.11 3.23 1.17.09 2.35-.93 3.1-1.76"/>
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

function App() {
  const [iosStatus] = useState(APP_CONFIG.IOS_STATUS)
  const [scrolled, setScrolled] = useState(false)

  // Efecto scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const elementTop = reveal.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="nav-brand">
            <img src="/logo.svg" alt="AlfaZulu" className="nav-logo" />
            <span className="brand-name">{APP_CONFIG.APP_NAME}</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#security" className="nav-link">Seguridad</a>
            <a href="#download" className="nav-link">Descargar</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <div className="logo-container reveal">
            <img src="/logo.svg" alt="AlfaZulu Logo" className="logo-image" />
          </div>

          <h1 className="reveal reveal-delay-1">
            Descarga <span>{APP_CONFIG.APP_NAME}</span>
          </h1>

          <p className="hero-subtitle reveal reveal-delay-2">
            {APP_CONFIG.APP_TAGLINE}
          </p>

          <div className="download-buttons reveal reveal-delay-3">
            <a
              href={APP_CONFIG.ANDROID_APP_URL}
              className="btn-download primary"
              download
            >
              <AndroidIcon />
              <span>
                <small>Descargar para</small>
                <br />
                <strong>Android</strong>
              </span>
            </a>

            {iosStatus === 'available' ? (
              <a
                href={APP_CONFIG.IOS_APP_URL}
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleIcon />
                <span>
                  <small>Disponible en</small>
                  <br />
                  <strong>App Store</strong>
                </span>
              </a>
            ) : (
              <div className="btn-download disabled">
                <AppleIcon />
                <span>
                  <small>Próximamente en</small>
                  <br />
                  <strong>iOS</strong>
                </span>
              </div>
            )}
          </div>

          <div className="app-info reveal reveal-delay-4">
            <div className="info-card">
              <span className="value">{APP_CONFIG.ANDROID_VERSION}</span>
              <span className="label">Versión</span>
            </div>
            <div className="info-card">
              <span className="value">{APP_CONFIG.ANDROID_SIZE}</span>
              <span className="label">Tamaño</span>
            </div>
            <div className="info-card">
              <span className="value">{new Date(APP_CONFIG.ANDROID_RELEASE_DATE).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span className="label">Actualización</span>
            </div>
          </div>
        </div>
      </header>

      {/* Platform Cards Section */}
      <section className="section" id="download">
        <div className="container">
          <h2 className="section-title reveal">Elige tu plataforma</h2>

          <div className="download-cards">
            {/* Android Card */}
            <div className="platform-card reveal reveal-delay-1">
              <div className="platform-icon">
                <AndroidIcon />
              </div>
              <h3 className="platform-name">Android</h3>
              <span className="platform-status available">Disponible</span>

              <div className="platform-details">
                <div className="platform-detail">
                  <span className="label">Versión</span>
                  <span className="value">{APP_CONFIG.ANDROID_VERSION}</span>
                </div>
                <div className="platform-detail">
                  <span className="label">Tamaño</span>
                  <span className="value">{APP_CONFIG.ANDROID_SIZE}</span>
                </div>
                <div className="platform-detail">
                  <span className="label">Actualización</span>
                  <span className="value">{APP_CONFIG.ANDROID_RELEASE_DATE}</span>
                </div>
              </div>

              <a
                href={APP_CONFIG.ANDROID_APP_URL}
                className="btn-download primary"
                download
              >
                <DownloadIcon />
                Descargar App
              </a>
            </div>

            {/* iOS Card */}
            <div className={`platform-card ${iosStatus === 'coming-soon' ? 'coming-soon' : ''} reveal reveal-delay-2`}>
              <div className="platform-icon">
                <AppleIcon />
              </div>
              <h3 className="platform-name">iPhone / iOS</h3>
              <span className={`platform-status ${iosStatus}`}>
                {iosStatus === 'available' ? 'Disponible' : 'Próximamente'}
              </span>

              <div className="platform-details">
                <div className="platform-detail">
                  <span className="label">Versión</span>
                  <span className="value">{APP_CONFIG.IOS_VERSION}</span>
                </div>
                <div className="platform-detail">
                  <span className="label">Plataforma</span>
                  <span className="value">iOS 15+</span>
                </div>
                <div className="platform-detail">
                  <span className="label">Estado</span>
                  <span className="value">{iosStatus === 'available' ? 'En App Store' : 'En desarrollo'}</span>
                </div>
              </div>

              {iosStatus === 'available' ? (
                <a
                  href={APP_CONFIG.IOS_APP_URL}
                  className="btn-download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon />
                  Descargar en App Store
                </a>
              ) : (
                <div className="btn-download disabled">
                  <DownloadIcon />
                  Próximamente
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features">
        <div className="container">
          <h2 className="section-title reveal">Características</h2>

          <div className="features-grid">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className={`feature-card reveal reveal-delay-${(index % 4) + 1}`}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section security-section" id="security">
        <div className="container">
          <h2 className="section-title reveal">Seguridad Garantizada</h2>

          <div className="security-grid">
            {SECURITY_INFO.official && (
              <div className="security-item reveal reveal-delay-1">
                <div className="security-icon">
                  <ShieldIcon />
                </div>
                <p className="security-text">App Oficial</p>
              </div>
            )}
            {SECURITY_INFO.verified && (
              <div className="security-item reveal reveal-delay-2">
                <div className="security-icon">
                  <CheckIcon />
                </div>
                <p className="security-text">Verificada</p>
              </div>
            )}
            {SECURITY_INFO.safeUpdates && (
              <div className="security-item reveal reveal-delay-3">
                <div className="security-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="23 4 23 10 17 10"/>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                  </svg>
                </div>
                <p className="security-text">Actualizaciones Seguras</p>
              </div>
            )}
            {SECURITY_INFO.noModifications && (
              <div className="security-item reveal reveal-delay-4">
                <div className="security-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <p className="security-text">Sin Modificaciones</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="section" id="instructions">
        <div className="container">
          <h2 className="section-title reveal">Cómo instalar</h2>

          <div className="instructions-container">
            {/* Android Steps */}
            <div className="instructions-platform reveal reveal-delay-1">
              <h3>Android</h3>
              <div className="steps">
                {INSTALL_STEPS.android.map((step) => (
                  <div key={step.step} className="step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* iOS Steps */}
            <div className="instructions-platform reveal reveal-delay-2">
              <h3>iOS</h3>
              <div className="steps">
                {iosStatus === 'available'
                  ? INSTALL_STEPS.ios.map((step) => (
                      <div key={step.step} className="step">
                        <div className="step-number">{step.step}</div>
                        <div className="step-content">
                          <h4 className="step-title">{step.title}</h4>
                          <p className="step-text">{step.text}</p>
                        </div>
                      </div>
                    ))
                  : (
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4 className="step-title">Espera el lanzamiento</h4>
                          <p className="step-text">La versión para iOS estará disponible próximamente en la App Store.</p>
                        </div>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" id="cta">
        <div className="container cta-content">
          <h2 className="cta-title reveal">¿Listo para comenzar?</h2>

          <div className="cta-buttons reveal reveal-delay-1">
            <a
              href={APP_CONFIG.ANDROID_APP_URL}
              className="btn-download primary"
              download
            >
              <AndroidIcon />
              Descargar para Android
            </a>

            {iosStatus === 'available' && (
              <a
                href={APP_CONFIG.IOS_APP_URL}
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleIcon />
                Descargar para iPhone
              </a>
            )}
          </div>

          <div className="reveal reveal-delay-2">
            <a href={APP_CONFIG.WEBSITE_URL} className="btn-secondary">
              Volver al inicio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href={APP_CONFIG.WEBSITE_URL} className="footer-link">Web Principal</a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} {APP_CONFIG.APP_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
