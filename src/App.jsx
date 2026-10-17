import { useState } from 'react'
import './App.css'

const skills = [
  'Laravel', 'PHP', 'React', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'SQL',
  'Bootstrap', 'Git & GitHub', 'VS Code',
]

const projects = [
  {
    title: 'Coin des Recettes',
    subtitle: 'Plateforme de partage des recettes de cuisine',
    description: 'Plateforme web permettant aux utilisateurs de découvrir, publier, gérer, commenter et enregistrer leurs recettes favorites.',
    artSymbol: '\u273f',
    artCode: '< recettes />',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/karkoubaya10-cell/coin_des_recettes',
    screenshots: [
      { image: 'coin-recettes-home.png', title: 'Accueil' },
      { image: 'coin-recettes-details.png', title: 'D\u00e9tails de la recette' },
    ],
  },
  {
    title: 'Gestion des ventes \u2014 Librairie',
    subtitle: 'Syst\u00e8me de gestion',
    description: 'Syst\u00e8me de gestion des ventes d\u2019une librairie, d\u00e9velopp\u00e9 avec Laravel et MySQL.',
    artSymbol: '\u25a4',
    artCode: '< ventes / librairie >',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/karkoubaya10-cell/gestion-des-ventes-librairie',
    features: ['gestion des produits', 'recherche', 'panier', 'validation des ventes', 'impression des tickets', 'historique des ventes'],
    screenshots: [
      { image: 'accueil.png', title: 'Accueil' },
      { image: 'produits.png', title: 'Produits' },
      { image: 'tableau_de_bord.png', title: 'Tableau de bord' },
      { image: 'ticket_vente.png', title: 'Ticket de vente' },
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app">
      <header className="site-header">
        <nav className="navbar container" aria-label="Navigation principale">
          <a className="logo" href="#accueil" onClick={closeMenu}>Aya<span>.</span></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <div id="nav-links" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            <a href="#accueil" onClick={closeMenu}>Accueil</a>
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a href="#competences" onClick={closeMenu}>Compétences</a>
            <a href="#projets" onClick={closeMenu}>Projets</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero container">
          <div className="hero-text">
            <p className="eyebrow"><span className="eyebrow-mark">&lt;/&gt;</span> Bonjour, je suis</p>
            <h1>Aya <span>Karkoub</span></h1>
            <h2>Développeuse Full Stack Junior</h2>
            <p className="hero-description">Je conçois des applications web modernes et fonctionnelles en combinant développement frontend et backend.</p>
            <p className="location"><span aria-hidden="true">⌖</span> Casablanca, Maroc</p>
            <div className="hero-buttons">
              <a href="#projets" className="btn primary">Voir mes projets <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="btn secondary">Me contacter</a>
            </div>
            <a className="cv-link" href="/cv-aya-karkoub.pdf" download>Télécharger mon CV <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-visual" aria-label="Illustration de code">
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>aya.dev</small></div>
              <div className="code-lines" aria-hidden="true">
                <p><i>01</i><span className="code-muted">const</span> <b>developer</b> = {'{'}</p>
                <p><i>02</i><span className="code-key">name</span>: <span className="code-string">'Aya'</span>,</p>
                <p><i>03</i><span className="code-key">stack</span>: [<span className="code-string">'React'</span>,</p>
                <p><i>04</i>        <span className="code-string">'Laravel'</span>],</p>
                <p><i>05</i><span className="code-key">basedIn</span>: <span className="code-string">'Casablanca'</span></p>
                <p><i>06</i>{'}'}</p>
                <p className="code-comment"><i>07</i>// toujours en apprentissage ✿</p>
              </div>
            </div>
            <span className="visual-sparkle sparkle-one" aria-hidden="true">✳</span>
            <span className="visual-sparkle sparkle-two" aria-hidden="true">＋</span>
          </div>
        </section>

        <section id="apropos" className="section container">
          <p className="section-label">01 <span>—</span> À PROPOS</p>
          <div className="section-heading"><h2>À propos de moi</h2><span className="heading-mark" aria-hidden="true">✳</span></div>
          <div className="about-content">
            <p>Je suis une développeuse web junior spécialisée en développement digital. Ma formation m'a permis d'acquérir des compétences en développement frontend, backend et bases de données.</p>
            <p>J'aime créer des interfaces modernes et développer des applications web simples, fonctionnelles et adaptées aux besoins des utilisateurs.</p>
          </div>
        </section>

        <section id="competences" className="section section-tinted">
          <div className="container">
            <p className="section-label">02 <span>—</span> COMPÉTENCES</p>
            <h2>Technologies & outils</h2>
            <p className="section-intro">Les outils que j'utilise pour donner vie à des projets web.</p>
            <div className="skills">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section id="projets" className="section container">
          <p className="section-label">03 <span>—</span> PROJETS</p>
          <p className="section-intro">Une première réalisation, et le début de bien d'autres.</p>
          <div className="projects">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-art" aria-hidden="true"><span className="recipe-symbol">{project.artSymbol}</span><span className="art-code">{project.artCode}</span><span className="art-number">0{index + 1}</span></div>
                <div className="project-content">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.features && <p className="project-description">Fonctionnalit&#233;s : {project.features.join(', ')}.</p>}
                  <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-actions">
                    <a className="btn primary" href={project.github} target="_blank" rel="noreferrer">{project.linkLabel || 'Voir sur GitHub'} <span aria-hidden="true">&#8599;</span></a>
                  </div>
                  {project.screenshots.length > 0 && <div className="screenshot-gallery" aria-label={`Captures du projet ${project.title}`}>
                    {project.screenshots.map((screenshot) => (
                      <div className="screenshot" key={screenshot.image}>
                        <img src={`/images/projects/${screenshot.image}`} alt={`Capture du projet ${project.title} - ${screenshot.title}`} onError={(event) => { event.currentTarget.hidden = true }} />
                        <span className="screenshot-title">{screenshot.title}</span>
                      </div>
                    ))}
                  </div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-inner">
            <p className="section-label">04 <span>—</span> CONTACT</p>
            <h2>Faisons connaissance</h2>
            <p className="contact-intro">Vous avez une opportunité, un projet ou souhaitez simplement me contacter ?</p>
            <div className="contact-links">
              <a className="contact-item" href="mailto:karkoubaya10@gmail.com"><span className="contact-icon" aria-hidden="true">@</span><span><small>Email</small><strong>karkoubaya10@gmail.com</strong></span></a>
              <a className="contact-item" href="https://www.linkedin.com/in/aya-karkoub" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true">in</span><span><small>LinkedIn</small><strong>linkedin.com/in/aya-karkoub ↗</strong></span></a>
              <a className="contact-item" href="https://github.com/karkoubaya10-cell" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true">&lt;/&gt;</span><span><small>GitHub</small><strong>karkoubaya10-cell ↗</strong></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container"><a className="logo" href="#accueil">Aya<span>.</span></a><p>© 2026 Aya Karkoub</p><span className="footer-code">fait avec &lt;3 et du code</span></div></footer>
    </div>
  )
}

export default App
