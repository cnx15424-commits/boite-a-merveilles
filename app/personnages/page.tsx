"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Personnage = {
  number: string;
  name: string;
  category: "Principal" | "Secondaire";
  role: string;
  description: string;
  traits: string[];
  symbol: string;
  relations: string;
};

const personnagesPrincipaux: Personnage[] = [
  {
    number: "01",
    name: "Sidi Mohamed",
    category: "Principal",
    role: "Personnage principal · Narrateur",
    description:
      "Sidi Mohamed est le narrateur et le personnage principal. Âgé de six ans, il raconte son enfance à Dar Chouafa avec un regard sensible, imaginatif et parfois solitaire.",
    traits: ["Sensible", "Imaginatif", "Solitaire"],
    symbol: "✦",
    relations: "Fils de Lalla Zoubida et de Maâlem Abdeslam.",
  },
  {
    number: "02",
    name: "Lalla Zoubida",
    category: "Principal",
    role: "Mère de Sidi Mohamed",
    description:
      "Lalla Zoubida est une mère affectueuse et protectrice. Très attachée à son fils, elle représente la famille et les traditions marocaines.",
    traits: ["Protectrice", "Affectueuse", "Traditionnelle"],
    symbol: "❋",
    relations: "Épouse de Maâlem Abdeslam et mère de Sidi Mohamed. Amie de Lalla Aïcha.",
  },
  {
    number: "03",
    name: "Maâlem Abdeslam",
    category: "Principal",
    role: "Père de Sidi Mohamed · Artisan",
    description:
      "Maâlem Abdeslam est le père de Sidi Mohamed. Il travaille comme artisan pour assurer les besoins de sa famille et représente la figure paternelle.",
    traits: ["Travailleur", "Responsable", "Père"],
    symbol: "✧",
    relations: "Époux de Lalla Zoubida et père de Sidi Mohamed.",
  },
  {
    number: "04",
    name: "Lalla Kanza",
    category: "Principal",
    role: "La Chouafa · Voyante",
    description:
      "Lalla Kanza, appelée la Chouafa, habite Dar Chouafa. Elle exerce le métier de voyante et participe à l'atmosphère mystérieuse et traditionnelle de la maison.",
    traits: ["Voyante", "Mystérieuse", "Traditionnelle"],
    symbol: "☾",
    relations: "Habite à Dar Chouafa où vivent également plusieurs familles.",
  },
  {
    number: "05",
    name: "Rahma",
    category: "Principal",
    role: "Voisine · Mère de Zineb",
    description:
      "Rahma est une voisine de Dar Chouafa. Elle est la mère de Zineb et participe à la vie quotidienne de la maison.",
    traits: ["Mère", "Voisine", "Solidaire"],
    symbol: "❀",
    relations: "Épouse de Driss El Aouad et mère de Zineb.",
  },
  {
    number: "06",
    name: "Driss El Aouad",
    category: "Principal",
    role: "Voisin · Artisan",
    description:
      "Driss El Aouad est un voisin de Dar Chouafa. Il appartient au monde des artisans et vit avec Rahma et leur fille Zineb.",
    traits: ["Artisan", "Voisin", "Père"],
    symbol: "✦",
    relations: "Époux de Rahma et père de Zineb.",
  },
  {
    number: "07",
    name: "Zineb",
    category: "Principal",
    role: "Fille de Rahma",
    description:
      "Zineb est une petite fille qui habite à Dar Chouafa. Elle appartient au même univers quotidien que Sidi Mohamed.",
    traits: ["Enfant", "Voisine", "Jeune"],
    symbol: "✧",
    relations: "Fille de Rahma et de Driss El Aouad.",
  },
  {
    number: "08",
    name: "Fatma Bziouya",
    category: "Principal",
    role: "Voisine de Dar Chouafa",
    description:
      "Fatma Bziouya est une voisine de Sidi Mohamed. Elle représente avec sa famille la vie collective et le voisinage de Dar Chouafa.",
    traits: ["Voisine", "Mère", "Traditionnelle"],
    symbol: "❋",
    relations: "Épouse d'Allal et voisine de la famille de Sidi Mohamed.",
  },
  {
    number: "09",
    name: "Allal",
    category: "Principal",
    role: "Voisin · Mari de Fatma Bziouya",
    description:
      "Allal est le mari de Fatma Bziouya. Il fait partie des habitants qui entourent la famille de Sidi Mohamed.",
    traits: ["Mari", "Voisin", "Famille"],
    symbol: "◆",
    relations: "Époux de Fatma Bziouya.",
  },
];

const personnagesSecondaires: Personnage[] = [
  {
    number: "10",
    name: "Lalla Aïcha",
    category: "Secondaire",
    role: "Amie de Lalla Zoubida",
    description:
      "Lalla Aïcha est une amie proche de Lalla Zoubida. Elle lui raconte ses problèmes personnels et conjugaux.",
    traits: ["Amie", "Sensible", "Confidente"],
    symbol: "❀",
    relations: "Amie de Lalla Zoubida et épouse de Moulay Larbi.",
  },
  {
    number: "11",
    name: "Moulay Larbi",
    category: "Secondaire",
    role: "Mari de Lalla Aïcha",
    description:
      "Moulay Larbi est le mari de Lalla Aïcha. Ses problèmes conjugaux deviennent une source importante de discussions.",
    traits: ["Époux", "Artisan", "Secondaire"],
    symbol: "✦",
    relations: "Mari de Lalla Aïcha.",
  },
  {
    number: "12",
    name: "Le Fqih",
    category: "Secondaire",
    role: "Maître de l'école coranique",
    description:
      "Le Fqih enseigne le Coran aux enfants. Il représente l'autorité religieuse et scolaire dans l'univers de Sidi Mohamed.",
    traits: ["Religieux", "Professeur", "Autoritaire"],
    symbol: "☾",
    relations: "Professeur de Sidi Mohamed à l'école coranique.",
  },
  {
    number: "13",
    name: "Driss le Teigneux",
    category: "Secondaire",
    role: "Camarade de Sidi Mohamed",
    description:
      "Driss le Teigneux est un enfant de l'école coranique. Son comportement contraste avec la sensibilité et l'imagination de Sidi Mohamed.",
    traits: ["Élève", "Camarade", "Turbulent"],
    symbol: "◆",
    relations: "Camarade de Sidi Mohamed à l'école coranique.",
  },
  {
    number: "14",
    name: "Hammoussa",
    category: "Secondaire",
    role: "Camarade de Sidi Mohamed",
    description:
      "Hammoussa fait partie des enfants qui entourent Sidi Mohamed dans son quotidien scolaire.",
    traits: ["Enfant", "Élève", "Camarade"],
    symbol: "✧",
    relations: "Camarade de Sidi Mohamed.",
  },
  {
    number: "15",
    name: "Sidi El Arafi",
    category: "Secondaire",
    role: "Voyant · Personnage spirituel",
    description:
      "Sidi El Arafi est un personnage associé à la spiritualité et à la recherche de réconfort. Il apporte une dimension religieuse et mystérieuse au récit.",
    traits: ["Spirituel", "Sage", "Mystérieux"],
    symbol: "☾",
    relations: "Personnage consulté dans les moments difficiles.",
  },
  {
    number: "16",
    name: "Abdallah",
    category: "Secondaire",
    role: "Épicier · Personnage du quartier",
    description:
      "Abdallah est un commerçant connu dans le quartier. Il appartient au monde quotidien des habitants de la médina.",
    traits: ["Commerçant", "Voisin", "Connu"],
    symbol: "◇",
    relations: "Connu des habitants du quartier.",
  },
  {
    number: "17",
    name: "Salama",
    category: "Secondaire",
    role: "Voisine",
    description:
      "Salama appartient au cercle des habitants et des femmes qui entourent la famille de Sidi Mohamed.",
    traits: ["Voisine", "Traditionnelle", "Femme"],
    symbol: "❋",
    relations: "Appartient au voisinage de Dar Chouafa.",
  },
  {
    number: "18",
    name: "Zhor",
    category: "Secondaire",
    role: "Femme du voisinage",
    description:
      "Zhor fait partie du monde féminin de la médina et participe à la vie sociale qui entoure les personnages.",
    traits: ["Voisine", "Sociale", "Traditionnelle"],
    symbol: "❀",
    relations: "Appartient au cercle des femmes du quartier.",
  },
  {
    number: "19",
    name: "Lalla Khadija",
    category: "Secondaire",
    role: "Femme du quartier",
    description:
      "Lalla Khadija est une figure secondaire du récit appartenant au monde traditionnel de la médina.",
    traits: ["Traditionnelle", "Voisine", "Femme"],
    symbol: "✧",
    relations: "Personnage appartenant au réseau social du quartier.",
  },
  {
    number: "20",
    name: "Oncle Othman",
    category: "Secondaire",
    role: "Membre de l'entourage familial",
    description:
      "Oncle Othman appartient à l'entourage de la famille et contribue à représenter les liens familiaux et sociaux de l'époque.",
    traits: ["Famille", "Adulte", "Traditionnel"],
    symbol: "◆",
    relations: "Membre de l'entourage familial.",
  },
  {
    number: "21",
    name: "M'barka",
    category: "Secondaire",
    role: "Femme du voisinage",
    description:
      "M'barka fait partie des personnages féminins qui participent à la vie sociale du quartier.",
    traits: ["Voisine", "Femme", "Traditionnelle"],
    symbol: "❋",
    relations: "Appartient au cercle social du quartier.",
  },
  {
    number: "22",
    name: "Lalla Fattoum",
    category: "Secondaire",
    role: "Femme du quartier",
    description:
      "Lalla Fattoum est une figure secondaire appartenant à l'univers social et traditionnel de la médina.",
    traits: ["Traditionnelle", "Voisine", "Femme"],
    symbol: "❀",
    relations: "Appartient au réseau social du quartier.",
  },
  {
    number: "23",
    name: "Si Abderrahmane",
    category: "Secondaire",
    role: "Personnage du quartier",
    description:
      "Si Abderrahmane appartient au monde des adultes qui entourent les habitants de la médina.",
    traits: ["Adulte", "Quartier", "Tradition"],
    symbol: "✦",
    relations: "Personnage lié à la vie du quartier.",
  },
  {
    number: "24",
    name: "Sidi Mohamed Ben Tahar",
    category: "Secondaire",
    role: "Personnage religieux",
    description:
      "Sidi Mohamed Ben Tahar appartient à l'univers religieux et traditionnel évoqué dans le récit.",
    traits: ["Religieux", "Traditionnel", "Adulte"],
    symbol: "☾",
    relations: "Lié à l'environnement religieux et traditionnel.",
  },
];

function CharacterCard({ personnage }: { personnage: Personnage }) {
  return (
    <article className="personnage-visual-card">
      <div className="personnage-card-decor">
        <div className="card-orbit" />

        <div className="card-symbol">
          {personnage.symbol}
        </div>

        <span className="card-number">
          {personnage.number}
        </span>

        <div className="card-initial">
          {personnage.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <span className="card-category">
          {personnage.category}
        </span>
      </div>

      <div className="personnage-card-content">
        <p className="personnage-card-role">
          {personnage.role}
        </p>

        <h3>{personnage.name}</h3>

        <div className="personnage-card-line">
          <span />
        </div>

        <p className="personnage-card-description">
          {personnage.description}
        </p>

        <div className="personnage-traits">
          {personnage.traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>

        <div className="personnage-card-relations">
          <small>RELATIONS</small>
          <p>{personnage.relations}</p>
        </div>
      </div>

      <div className="personnage-corner personnage-corner-one" />
      <div className="personnage-corner personnage-corner-two" />
    </article>
  );
}

export default function PersonnagesPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="personnages-page">

      {/* BACKGROUND */}
      <div className="personnages-background">
        <div className="personnages-moon" />

        <div className="personnages-star star-1">✦</div>
        <div className="personnages-star star-2">✧</div>
        <div className="personnages-star star-3">✦</div>
        <div className="personnages-star star-4">✧</div>

        <div className="personnages-writing writing-one">
          Sidi Mohamed
        </div>

        <div className="personnages-writing writing-two">
          famille · enfance · souvenirs
        </div>

        <div className="personnages-writing writing-three">
          Dar Chouafa
        </div>

        <div className="personnages-line line-one" />
        <div className="personnages-line line-two" />
      </div>

      {/* NAVBAR */}
      <header
        className={`personnages-navbar ${
          scrolled ? "personnages-navbar-scrolled" : ""
        }`}
      >
        <Link href="/" className="personnages-brand">
          <span className="personnages-brand-symbol">✦</span>

          <div>
            <strong>La Boîte</strong>
            <small>à merveilles</small>
          </div>
        </Link>

        <nav className="personnages-nav">
          <Link href="/">Accueil</Link>

          <Link href="/litterature">
            Littérature
          </Link>

          <Link href="/autobiographie">
            Autobiographie
          </Link>

          <Link href="/auteur">
            L'auteur
          </Link>

          <Link
            href="/personnages"
            className="active"
          >
            Personnages
          </Link>

          <Link href="/lieux">
            Lieux
          </Link>

          <Link href="/resume">
            Résumé
          </Link>
        </nav>

        <Link
          href="/fiche-de-lecture"
          className="personnages-revision-button"
        >
          Réviser <span>↗</span>
        </Link>
      </header>

      {/* HERO */}
      <section className="personnages-hero">

        <div className="personnages-hero-left">

          <div className="personnages-hero-top">
            <span />
            LES FIGURES DU RÉCIT
          </div>

          <p className="personnages-hero-author">
            La Boîte à merveilles
          </p>

          <h1>
            Les
            <br />
            <span>personnages</span>
          </h1>

          <div className="personnages-hero-divider">
            <span>✦</span>
          </div>

          <p className="personnages-hero-description">
            Découvrez les personnages principaux et
            secondaires qui construisent l&apos;univers de
            Sidi Mohamed, entre famille, école,
            voisinage et traditions de
            <i> Dar Chouafa.</i>
          </p>

          <a
            href="#personnages-list"
            className="personnages-hero-button"
          >
            Explorer les personnages
            <span>↓</span>
          </a>

        </div>

        {/* HERO CARD */}
        <div className="personnages-hero-visual">

          <div className="hero-character-glow" />

          <div className="hero-character-card">

            <div className="hero-character-number">
              01
            </div>

            <div className="hero-character-symbol">
              ✦
            </div>

            <div className="hero-character-orbit orbit-one" />
            <div className="hero-character-orbit orbit-two" />

            <div className="hero-character-initial">
              SM
            </div>

            <div className="hero-character-bottom">
              <span>PERSONNAGE PRINCIPAL</span>

              <strong>
                Sidi Mohamed
              </strong>

              <small>
                Narrateur · Enfant
              </small>
            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="personnages-intro">

        <div className="personnages-section-title">

          <span>01</span>

          <div>
            <p>
              COMPRENDRE LES PERSONNAGES
            </p>

            <h2>
              Un monde <i>humain</i>
            </h2>
          </div>

        </div>

        <div className="personnages-intro-content">

          <p className="personnages-big-text">
            Chaque personnage participe à la
            construction de l'univers de{" "}
            <i>La Boîte à merveilles</i>.
          </p>

          <p>
            À travers Sidi Mohamed, sa famille,
            ses voisins, ses camarades et les
            habitants de la médina, Ahmed Sefrioui
            présente une société marocaine
            traditionnelle vue à travers les yeux
            d'un enfant.
          </p>

        </div>

      </section>

      {/* PRINCIPAUX */}
      <section
        className="personnages-list-section"
        id="personnages-list"
      >

        <div className="personnages-section-title">

          <span>02</span>

          <div>
            <p>
              LES PERSONNAGES DE L'ŒUVRE
            </p>

            <h2>
              Personnages <i>principaux</i>
            </h2>
          </div>

        </div>

        <div className="personnages-count">
          <span>09</span>
          personnages principaux
        </div>

        <div className="personnages-cards">

          {personnagesPrincipaux.map((personnage) => (
            <CharacterCard
              key={personnage.number}
              personnage={personnage}
            />
          ))}

        </div>

      </section>

      {/* SECONDAIRES */}
      <section className="personnages-list-section secondaires-section">

        <div className="personnages-section-title">

          <span>03</span>

          <div>
            <p>
              L'ENTOURAGE ET LES FIGURES SECONDAIRES
            </p>

            <h2>
              Personnages <i>secondaires</i>
            </h2>
          </div>

        </div>

        <div className="personnages-count">
          <span>15</span>
          personnages secondaires
        </div>

        <div className="personnages-cards">

          {personnagesSecondaires.map((personnage) => (
            <CharacterCard
              key={personnage.number}
              personnage={personnage}
            />
          ))}

        </div>

      </section>

      {/* RELATIONS */}
      <section className="personnages-relations-section">

        <div className="personnages-section-title centered-title">

          <span>04</span>

          <div>
            <p>LES RELATIONS ENTRE LES PERSONNAGES</p>

            <h2>
              Un univers <i>lié</i>
            </h2>
          </div>

        </div>

        <div className="relations-intro">
          Les personnages vivent dans un même univers
          familial, scolaire et social. Les relations
          permettent de comprendre la société décrite
          dans l'œuvre.
        </div>

        {/* FAMILLE */}
        <div className="relation-group">

          <div className="relation-group-title">
            <span>01</span>
            LA FAMILLE DE SIDI MOHAMED
          </div>

          <div className="relation-tree">

            <div className="relation-box relation-main">
              <span>NARRATEUR</span>
              <strong>Sidi Mohamed</strong>
            </div>

            <div className="relation-horizontal-line" />

            <div className="relation-children">

              <div className="relation-box">
                <span>MÈRE</span>
                <strong>Lalla Zoubida</strong>
              </div>

              <div className="relation-box">
                <span>PÈRE</span>
                <strong>Maâlem Abdeslam</strong>
              </div>

            </div>

          </div>

        </div>

        {/* DAR CHOUAFA */}
        <div className="relation-group">

          <div className="relation-group-title">
            <span>02</span>
            LES HABITANTS DE DAR CHOUAFA
          </div>

          <div className="relations-grid">

            <div className="relation-box">
              <span>VOYANTE</span>
              <strong>Lalla Kanza</strong>
            </div>

            <div className="relation-box">
              <span>VOISINE</span>
              <strong>Rahma</strong>
            </div>

            <div className="relation-box">
              <span>MARI DE RAHMA</span>
              <strong>Driss El Aouad</strong>
            </div>

            <div className="relation-box">
              <span>FILLE</span>
              <strong>Zineb</strong>
            </div>

            <div className="relation-box">
              <span>VOISINE</span>
              <strong>Fatma Bziouya</strong>
            </div>

            <div className="relation-box">
              <span>MARI</span>
              <strong>Allal</strong>
            </div>

          </div>

        </div>

        {/* LALLA AICHA */}
        <div className="relation-group">

          <div className="relation-group-title">
            <span>03</span>
            LES RELATIONS DE LALLA ZOUBIDA
          </div>

          <div className="relations-special">

            <div className="relation-box relation-highlight">
              <span>AMIE</span>
              <strong>Lalla Zoubida</strong>
            </div>

            <div className="relation-arrow">
              <span>amitié</span>
              <div>↔</div>
            </div>

            <div className="relation-box">
              <span>AMIE</span>
              <strong>Lalla Aïcha</strong>
            </div>

            <div className="relation-arrow">
              <span>épouse</span>
              <div>↓</div>
            </div>

            <div className="relation-box">
              <span>MARI</span>
              <strong>Moulay Larbi</strong>
            </div>

          </div>

        </div>

        {/* ECOLE */}
        <div className="relation-group">

          <div className="relation-group-title">
            <span>04</span>
            L'ENVIRONNEMENT SCOLAIRE
          </div>

          <div className="relations-special">

            <div className="relation-box relation-highlight">
              <span>ÉLÈVE</span>
              <strong>Sidi Mohamed</strong>
            </div>

            <div className="relation-arrow">
              <span>enseignement</span>
              <div>↔</div>
            </div>

            <div className="relation-box">
              <span>MAÎTRE</span>
              <strong>Le Fqih</strong>
            </div>

            <div className="relation-arrow">
              <span>camarade</span>
              <div>↔</div>
            </div>

            <div className="relation-box">
              <span>ÉLÈVE</span>
              <strong>Driss le Teigneux</strong>
            </div>

            <div className="relation-box">
              <span>CAMARADE</span>
              <strong>Hammoussa</strong>
            </div>

          </div>

        </div>

      </section>

      {/* SCHEMA GLOBAL */}
      <section className="global-map-section">

        <div className="personnages-section-title centered-title">

          <span>05</span>

          <div>
            <p>CARTE DES RELATIONS</p>

            <h2>
              Le réseau <i>humain</i>
            </h2>
          </div>

        </div>

        <div className="global-map">

          <div className="map-line map-line-1" />
          <div className="map-line map-line-2" />
          <div className="map-line map-line-3" />
          <div className="map-line map-line-4" />

          <div className="map-node node-main">
            <span>NARRATEUR</span>
            <strong>Sidi Mohamed</strong>
          </div>

          <div className="map-node node-mother">
            <span>MÈRE</span>
            <strong>Lalla Zoubida</strong>
          </div>

          <div className="map-node node-father">
            <span>PÈRE</span>
            <strong>Maâlem Abdeslam</strong>
          </div>

          <div className="map-node node-rahma">
            <span>VOISINE</span>
            <strong>Rahma</strong>
          </div>

          <div className="map-node node-lalla-aicha">
            <span>AMIE</span>
            <strong>Lalla Aïcha</strong>
          </div>

          <div className="map-node node-fqih">
            <span>MAÎTRE</span>
            <strong>Le Fqih</strong>
          </div>

          <div className="map-node node-zineb">
            <span>FILLE</span>
            <strong>Zineb</strong>
          </div>

          <div className="map-node node-larbi">
            <span>MARI</span>
            <strong>Moulay Larbi</strong>
          </div>

        </div>

        <div className="map-legend">

          <span>
            <i className="legend-family" />
            Famille
          </span>

          <span>
            <i className="legend-friend" />
            Amitié
          </span>

          <span>
            <i className="legend-school" />
            École
          </span>

          <span>
            <i className="legend-neighbor" />
            Voisinage
          </span>

        </div>

      </section>

      {/* A RETENIR */}
      <section className="personnages-summary-section">

        <div className="personnages-summary-glow" />

        <div className="personnages-summary-content">

          <div className="summary-symbol">
            ✦
          </div>

          <p>
            À RETENIR
          </p>

          <h2>
            Des personnages qui racontent
            <br />
            <i>une époque et une société.</i>
          </h2>

          <span className="summary-line" />

          <div className="summary-keywords">

            <span>Enfance</span>
            <span>Famille</span>
            <span>Voisinage</span>
            <span>École</span>
            <span>Tradition</span>
            <span>Maroc</span>
            <span>Souvenirs</span>

          </div>

        </div>

      </section>

      {/* NEXT */}
      <section className="personnages-next">

        <p>
          CONTINUER LA DÉCOUVERTE
        </p>

        <h2>
          Découvrez maintenant
          <br />
          <span>les lieux de l'œuvre.</span>
        </h2>

        <Link href="/lieux">
          Explorer les lieux
          <span>→</span>
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="personnages-footer">

        <div className="personnages-footer-brand">

          <span>✦</span>

          <div>
            <strong>
              La Boîte à merveilles
            </strong>

            <small>
              Site de révision littéraire
            </small>
          </div>

        </div>

        <p>
          Ahmed Sefrioui · Révision 1er Bac
        </p>

      </footer>

    </main>
  );
}

