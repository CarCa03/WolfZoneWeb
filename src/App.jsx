import logo from './assets/logo.png'
import { INSTAGRAM_URL, players, trophies, kits } from './data.js'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function InstagramButton({ children = 'Síguenos en Instagram', size }) {
  return (
    <a className={`btn btn-primary ${size === 'lg' ? 'btn-lg' : ''}`} href={INSTAGRAM_URL}
      target="_blank" rel="noopener noreferrer">
      <InstagramIcon size={size === 'lg' ? 18 : 16} />
      {children}
    </a>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#inicio" className="brand">
          <img src={logo} alt="" width="32" height="32" />
          <span>WolfZone</span>
        </a>
        <nav className="nav-links">
          <a href="#plantilla">Plantilla</a>
          <a href="#trofeos">Trofeos</a>
          <a href="#equipaciones">Equipaciones</a>
        </nav>
        <InstagramButton>Instagram</InstagramButton>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero container">
      <img className="hero-crest" src={logo} alt="Escudo de WolfZone Esports" width="200" height="200" />
      <span className="pill-tag">
        <span className="dot" /> EA SPORTS FC 27 · Clubes Pro
      </span>
      <h1 className="display">
        La manada juega
        <br />
        <span className="accent">como uno solo.</span>
      </h1>
      <p className="lead">
        WolfZone Esports es un club competitivo de Clubes Pro en EA SPORTS FC 27.
        Jugamos torneos con un solo objetivo: competir como equipo.
      </p>
      <div className="hero-actions">
        <InstagramButton />
        <a className="btn btn-ghost" href="#plantilla">Conoce la plantilla</a>
      </div>
    </section>
  )
}

function Facts() {
  const facts = [
    ['Juego', 'FC 27'],
    ['Modalidad', 'Clubes Pro'],
    ['Plantilla', `${players.length} jugadores`],
    ['Fundado', '2024'],
  ]
  return (
    <section className="container">
      <dl className="facts">
        {facts.map(([label, value]) => (
          <div key={label} className="fact">
            <dt className="mono">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <span className="mono eyebrow">{eyebrow}</span>
      <h2 className="heading">{title}</h2>
      {children && <p className="section-sub">{children}</p>}
    </div>
  )
}

function Players() {
  return (
    <section id="plantilla" className="section container">
      <SectionHeader eyebrow="01 — Plantilla" title="Los lobos">
        Los jugadores que defienden el escudo de WolfZone en cada partido.
      </SectionHeader>
      <ul className="player-grid" style={{ '--desktop-cols': players.length % 3 === 0 ? 3 : 4 }}>
        {players.map((p) => (
          <li key={p.name} className="card player-card">
            <div className="player-media">
              {p.number != null && <span className="player-number" aria-hidden="true">{p.number}</span>}
              <img src={p.image} alt={p.name} loading="lazy" />
            </div>
            <div className="player-info">
              <h3>{p.name}</h3>
              {p.number != null && <span className="mono">#{String(p.number).padStart(2, '0')}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Trophies() {
  const total = trophies.reduce((sum, t) => sum + t.wins, 0)
  return (
    <section id="trofeos" className="section container">
      <SectionHeader eyebrow="02 — Palmarés" title="Vitrina de trofeos">
        {total} títulos conquistados por la manada en torneos de Clubes Pro.
      </SectionHeader>
      {/* 3 o 4 columnas según cuál deje las filas completas */}
      <ul className="trophy-grid" style={{ '--cols': trophies.length % 3 === 0 ? 3 : 4 }}>
        {trophies.map((t) => (
          <li key={t.image} className="card trophy-card">
            <div className="trophy-media">
              <img src={t.image} alt={`Trofeo ${t.name}`} loading="lazy"
                className={t.fit === 'cover' ? 'is-cover' : undefined} />
              {t.wins > 1 && <span className="trophy-wins">×{t.wins}</span>}
            </div>
            <div className="trophy-info">
              <h3>{t.name}</h3>
              <span className="mono">{t.wins > 1 ? `Campeón ×${t.wins}` : 'Campeón'} · {t.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Kits() {
  return (
    <section id="equipaciones" className="section container">
      <SectionHeader eyebrow="03 — Equipaciones" title="Las playeras">
        Tres equipaciones para cada escenario de la temporada.
      </SectionHeader>
      <ul className="kit-grid">
        {kits.map((k, i) => (
          <li key={k.name} className="card kit-card">
            <div className="kit-media">
              <img src={k.image} alt={`Playera ${k.name} de WolfZone`} loading="lazy" />
            </div>
            <div className="kit-info">
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{k.name}</h3>
                <p>{k.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Follow() {
  return (
    <section className="section container">
      <div className="card follow">
        <img src={logo} alt="" width="96" height="96" />
        <h2 className="heading">
          Sigue a la manada <span className="accent">en Instagram.</span>
        </h2>
        <p className="section-sub">Resultados, convocatorias y lo mejor de cada torneo.</p>
        <InstagramButton size="lg">Ir al perfil</InstagramButton>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#inicio" className="brand">
          <img src={logo} alt="" width="28" height="28" />
          <span>WolfZone Esports</span>
        </a>
        <span className="mono">FC 27 · Clubes Pro</span>
        <a className="footer-ig" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
          aria-label="Instagram de WolfZone">
          <InstagramIcon size={18} />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Players />
        <Trophies />
        <Kits />
        <Follow />
      </main>
      <Footer />
    </>
  )
}
