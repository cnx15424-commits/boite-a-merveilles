"use client";

import Link from "next/link";

const lieux = [
  {
    number: "01",
    title: "Dar Chouafa",
    subtitle: "La maison principale",
    description:
      "Dar Chouafa est la maison où vit Sidi Mohamed avec sa famille. Elle représente l'univers intime du narrateur et constitue l'un des espaces les plus importants du récit.",
    type: "house",
  },
  {
    number: "02",
    title: "Le Msid",
    subtitle: "L'école coranique",
    description:
      "Le Msid est le lieu où Sidi Mohamed apprend le Coran sous l'autorité du Fqih. C'est un espace d'apprentissage, de discipline et parfois de peur.",
    type: "msid",
  },
  {
    number: "03",
    title: "La Médina de Fès",
    subtitle: "La ville",
    description:
      "La médina constitue le décor général du récit. Ses ruelles, ses maisons, ses souks et ses portes forment l'univers quotidien du jeune narrateur.",
    type: "medina",
  },
  {
    number: "04",
    title: "Le Derb",
    subtitle: "Le quartier",
    description:
      "Le derb est la ruelle du quartier où se trouvent les maisons des habitants. C'est un espace de rencontres, de discussions et de vie communautaire.",
    type: "derb",
  },
  {
    number: "05",
    title: "Le Souk",
    subtitle: "Le marché",
    description:
      "Le souk est un lieu animé où les habitants viennent acheter et vendre différentes marchandises. Il représente le mouvement et l'activité de la médina.",
    type: "souk",
  },
  {
    number: "06",
    title: "La Kissaria",
    subtitle: "Le marché couvert",
    description:
      "La Kissaria est un espace commercial couvert de la médina. Elle fait partie des lieux fréquentés par les habitants de Fès.",
    type: "kissaria",
  },
  {
    number: "07",
    title: "Le Hammam",
    subtitle: "Le bain public",
    description:
      "Le hammam est un lieu collectif important dans la vie quotidienne. Il constitue également un espace de rencontre et de conversation entre les femmes.",
    type: "hammam",
  },
  {
    number: "08",
    title: "Le Four public",
    subtitle: "Le four traditionnel",
    description:
      "Le four public est un lieu de proximité où les habitants du quartier font cuire leur pain. Il participe à la vie quotidienne du derb.",
    type: "four",
  },
  {
    number: "09",
    title: "Le sanctuaire de Sidi Ali Boughaleb",
    subtitle: "Un lieu religieux",
    description:
      "Le sanctuaire de Sidi Ali Boughaleb est associé à la spiritualité et aux croyances populaires. Il représente l'importance du religieux dans l'univers du récit.",
    type: "sanctuary",
  },
  {
    number: "10",
    title: "La maison de Lalla Aïcha",
    subtitle: "Une maison de la médina",
    description:
      "La maison de Lalla Aïcha est un espace lié à l'une des figures importantes de l'entourage familial. Elle devient un lieu de visites et de conversations.",
    type: "aicha",
  },
  {
    number: "11",
    title: "L'atelier de Maâlem Abdeslam",
    subtitle: "L'espace de travail",
    description:
      "L'atelier de Maâlem Abdeslam représente son activité professionnelle. C'est un espace associé au travail, au savoir-faire et à la dignité du père.",
    type: "workshop",
  },
  {
    number: "12",
    title: "La Mosquée",
    subtitle: "Le lieu religieux",
    description:
      "La mosquée occupe une place importante dans l'environnement traditionnel de la médina. Elle représente la dimension spirituelle de la société décrite.",
    type: "mosque",
  },
];

function Architecture({ type }: { type: string }) {
  return (
    <div className={`architecture architecture-${type}`}>
      <div className="architecture-glow" />

      {type === "house" && (
        <div className="house-art">
          <div className="house-roof" />
          <div className="house-body">
            <span className="house-window w1" />
            <span className="house-window w2" />
            <span className="house-window w3" />
            <span className="house-window w4" />
            <span className="house-door" />
            <span className="house-balcony" />
          </div>
        </div>
      )}

      {type === "msid" && (
        <div className="msid-art">
          <div className="msid-roof" />
          <div className="msid-building">
            <span className="msid-arch" />
            <span className="msid-arch small" />
            <span className="msid-door" />
            <span className="msid-window mw1" />
            <span className="msid-window mw2" />
          </div>
        </div>
      )}

      {type === "medina" && (
        <div className="medina-art">
          <div className="medina-skyline">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="medina-ground" />
          <div className="medina-gate">
            <span />
          </div>
        </div>
      )}

      {type === "derb" && (
        <div className="derb-art">
          <div className="derb-wall left" />
          <div className="derb-wall right" />
          <div className="derb-arch">
            <span />
          </div>
          <div className="derb-floor" />
        </div>
      )}

      {type === "souk" && (
        <div className="souk-art">
          <div className="souk-roof" />
          <div className="souk-shop shop1">
            <span />
            <b />
          </div>
          <div className="souk-shop shop2">
            <span />
            <b />
          </div>
          <div className="souk-shop shop3">
            <span />
            <b />
          </div>
        </div>
      )}

      {type === "kissaria" && (
        <div className="kissaria-art">
          <div className="kissaria-arch">
            <div className="kissaria-inner" />
          </div>
          <div className="kissaria-floor" />
          <div className="kissaria-lamp" />
        </div>
      )}

      {type === "hammam" && (
        <div className="hammam-art">
          <div className="hammam-building">
            <div className="hammam-door" />
            <div className="hammam-window hw1" />
            <div className="hammam-window hw2" />
          </div>
          <div className="hammam-dome" />
          <div className="steam steam1" />
          <div className="steam steam2" />
          <div className="steam steam3" />
        </div>
      )}

      {type === "four" && (
        <div className="four-art">
          <div className="four-body">
            <div className="four-opening" />
            <div className="four-glow" />
          </div>
          <div className="four-chimney" />
          <div className="four-smoke s1" />
          <div className="four-smoke s2" />
        </div>
      )}

      {type === "sanctuary" && (
        <div className="sanctuary-art">
          <div className="sanctuary-body">
            <div className="sanctuary-door" />
          </div>
          <div className="sanctuary-dome" />
          <div className="sanctuary-crescent">☾</div>
        </div>
      )}

      {type === "aicha" && (
        <div className="aicha-art">
          <div className="aicha-roof" />
          <div className="aicha-house">
            <span className="aicha-window aw1" />
            <span className="aicha-window aw2" />
            <span className="aicha-door" />
          </div>
        </div>
      )}

      {type === "workshop" && (
        <div className="workshop-art">
          <div className="workshop-building">
            <span className="workshop-window" />
            <span className="workshop-door" />
          </div>
          <div className="workshop-tool hammer">
            <i />
          </div>
          <div className="workshop-tool anvil" />
        </div>
      )}

      {type === "mosque" && (
        <div className="mosque-art">
          <div className="mosque-main">
            <div className="mosque-door" />
            <div className="mosque-dome" />
          </div>
          <div className="mosque-minaret">
            <span className="minaret-top" />
            <span className="minaret-window" />
          </div>
          <div className="mosque-crescent">☾</div>
        </div>
      )}
    </div>
  );
}

export default function LieuxPage() {
  return (
    <main className="lieux-page">
      <div className="lieux-background">
        <div className="gold-orb orb-one" />
        <div className="gold-orb orb-two" />
        <div className="gold-line line-one" />
        <div className="gold-line line-two" />
      </div>

      <nav className="lieux-nav">
        <Link href="/" className="lieux-logo">
          <span className="logo-mark">Σ</span>
          <span>
            Science<span>Math</span>
            <small>1er Bac</small>
          </span>
        </Link>

        <div className="lieux-links">
          <Link href="/">Accueil</Link>
          <Link href="/litterature">Littérature</Link>
          <Link href="/autobiographie">Autobiographie</Link>
          <Link href="/auteur">Auteur</Link>
          <Link href="/personnages">Personnages</Link>
          <Link href="/lieux" className="active">
            Lieux
          </Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/fiche-de-lecture">Fiche de lecture</Link>
        </div>

        <Link href="/litterature" className="nav-back">
          ← Retour
        </Link>
      </nav>

      <section className="lieux-hero">
        <div className="hero-label">
          <span />
          LA BOÎTE À MERVEILLES
          <span />
        </div>

        <h1>
          LES <strong>LIEUX</strong>
        </h1>

        <p>
          Les espaces qui construisent l'univers de Sidi Mohamed
        </p>

        <div className="hero-decoration">
          <div className="hero-city">
            <span className="city-house c1" />
            <span className="city-house c2" />
            <span className="city-minaret" />
            <span className="city-dome" />
            <span className="city-house c3" />
            <span className="city-house c4" />
          </div>
        </div>

        <div className="scroll-indicator">
          <span>EXPLORER</span>
          <i />
        </div>
      </section>

      <section className="lieux-intro">
        <div className="intro-number">12</div>
        <div className="intro-content">
          <span className="eyebrow">UN UNIVERS ENTIÈREMENT DESSINÉ</span>
          <h2>
            La médina comme
            <br />
            <em>personnage.</em>
          </h2>
          <p>
            Dans <i>La Boîte à merveilles</i>, les lieux ne sont pas de simples
            décors. Ils accompagnent les personnages, racontent la vie
            quotidienne et permettent au lecteur d'entrer dans l'univers de
            Fès.
          </p>
        </div>
      </section>

      <section className="places-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CARTOGRAPHIE DU RÉCIT</span>
            <h2>Les espaces essentiels</h2>
          </div>
          <span className="section-count">01 — 12</span>
        </div>

        <div className="places-list">
          {lieux.map((lieu, index) => (
            <article
              className={`place-card ${index % 2 !== 0 ? "reverse" : ""}`}
              key={lieu.number}
            >
              <div className="place-number">{lieu.number}</div>

              <div className="place-visual">
                <div className="visual-corners">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <Architecture type={lieu.type} />

                <div className="visual-label">
                  <span>ESPACE</span>
                  <b>{lieu.number}</b>
                </div>
              </div>

              <div className="place-info">
                <div className="place-meta">
                  <span>{lieu.subtitle}</span>
                  <i />
                </div>

                <h3>{lieu.title}</h3>

                <p>{lieu.description}</p>

                <div className="place-bottom">
                  <span>LA BOÎTE À MERVEILLES</span>
                  <span>—</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="map-header">
          <span className="eyebrow">VISION D'ENSEMBLE</span>
          <h2>Une médina, plusieurs univers.</h2>
          <p>
            Les différents lieux s'organisent autour d'un même espace urbain :
            la médina traditionnelle de Fès.
          </p>
        </div>

        <div className="map">
          <div className="map-road road1" />
          <div className="map-road road2" />
          <div className="map-road road3" />
          <div className="map-road road4" />

          <div className="map-building b1" />
          <div className="map-building b2" />
          <div className="map-building b3" />
          <div className="map-building b4" />
          <div className="map-building b5" />
          <div className="map-building b6" />

          <div className="map-center">
            <span>FÈS</span>
            <b>MEDINA</b>
          </div>

          <div className="map-point p1">01</div>
          <div className="map-point p2">02</div>
          <div className="map-point p3">05</div>
          <div className="map-point p4">07</div>
          <div className="map-point p5">09</div>
          <div className="map-point p6">12</div>
        </div>
      </section>

      <section className="symbolism-section">
        <div className="section-heading centered">
          <span className="eyebrow">À RETENIR</span>
          <h2>Pourquoi les lieux sont importants ?</h2>
        </div>

        <div className="symbolism-grid">
          <div className="symbol-card">
            <span className="symbol-icon">01</span>
            <h3>Le quotidien</h3>
            <p>
              Les lieux montrent les habitudes et la vie quotidienne des
              habitants de la médina.
            </p>
          </div>

          <div className="symbol-card">
            <span className="symbol-icon">02</span>
            <h3>La société</h3>
            <p>
              Ils permettent de comprendre les relations entre les différentes
              personnes du quartier.
            </p>
          </div>

          <div className="symbol-card">
            <span className="symbol-icon">03</span>
            <h3>La mémoire</h3>
            <p>
              Les espaces deviennent des souvenirs importants dans l'enfance
              du narrateur.
            </p>
          </div>

          <div className="symbol-card">
            <span className="symbol-icon">04</span>
            <h3>L'atmosphère</h3>
            <p>
              Les ruelles, maisons et marchés donnent au récit son identité
              marocaine traditionnelle.
            </p>
          </div>
        </div>
      </section>

      <footer className="lieux-footer">
        <div className="footer-line" />
        <div>
          <span>LA BOÎTE À MERVEILLES</span>
          <strong>LES LIEUX</strong>
        </div>
        <Link href="/personnages">← Personnages</Link>
      </footer>
    </main>
  );
}