"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LitteraturePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="literature-page">
      {/* BACKGROUND */}
      <div className="literature-background">
        <div className="lit-word lit-word-1">Littérature</div>
        <div className="lit-word lit-word-2">Maghreb</div>
        <div className="lit-word lit-word-3">Mémoire</div>
        <div className="lit-line lit-line-1" />
        <div className="lit-line lit-line-2" />
      </div>

      {/* NAVBAR */}
      <header className={`lit-navbar ${scrolled ? "lit-navbar-scrolled" : ""}`}>
        <div className="lit-navbar-inner">
          <Link href="/" className="lit-brand">
            <div className="lit-brand-symbol">✦</div>
            <div>
              <span>La Boîte</span>
              <small>à merveilles</small>
            </div>
          </Link>

          <nav className="lit-nav">
            <Link href="/">Accueil</Link>
            <Link href="/litterature" className="active">
              Littérature
            </Link>
            <Link href="/autobiographie">Autobiographie</Link>
            <Link href="/auteur">L'auteur</Link>
            <Link href="/personnages">Personnages</Link>
            <Link href="/lieux">Lieux</Link>
            <Link href="/resume">Résumé</Link>
            <Link href="/paratexte">Paratexte</Link>
            <Link href="/fiche-de-lecture">Fiche de lecture</Link>
          </nav>

          <Link href="/fiche-de-lecture" className="lit-nav-button">
            Réviser <span>↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="lit-hero">
        <div className="lit-hero-content">
          <div className="lit-small-title">
            <span />
            <span>01 — CONTEXTE LITTÉRAIRE</span>
            <span />
          </div>

          <p className="lit-eyebrow">1er BAC</p>

          <h1>
            La littérature
            <br />
            <i>maghrébine</i>
          </h1>

          <p className="lit-hero-description">
            Comprendre la littérature maghrébine d'expression française,
            son origine, ses précurseurs et ses principales caractéristiques.
          </p>

          <div className="lit-hero-buttons">
            <a href="#definition" className="lit-primary-button">
              Commencer
              <span>↓</span>
            </a>

            <Link href="/autobiographie" className="lit-secondary-button">
              Étape suivante →
            </Link>
          </div>
        </div>

        <div className="lit-hero-symbol">
          <div className="lit-circle-glow" />

          <div className="lit-symbol-circle">
            <span>أ</span>
            <span>✒</span>
            <span>A</span>
          </div>

          <div className="lit-orbit lit-orbit-1" />
          <div className="lit-orbit lit-orbit-2" />
        </div>
      </section>

      {/* DEFINITION */}
      <section className="lit-section" id="definition">
        <div className="lit-section-heading">
          <span className="lit-number">01</span>

          <div>
            <p>À RETENIR</p>
            <h2>
              Qu'est-ce que la <i>littérature maghrébine</i> ?
            </h2>
          </div>
        </div>

        <div className="lit-definition-grid">
          <div className="lit-main-card">
            <span className="lit-card-icon">✒</span>

            <p className="lit-big-text">
              La littérature maghrébine d'expression française désigne
              l'ensemble des œuvres écrites en français par des écrivains
              originaires du Maghreb, notamment du Maroc, de l'Algérie et de
              la Tunisie.
            </p>

            <p>
              Elle s'est développée principalement au XXe siècle, dans un
              contexte marqué par la colonisation, puis par les mouvements
              d'indépendance et les transformations sociales et culturelles
              des pays du Maghreb.
            </p>
          </div>

          <div className="lit-side-card">
            <span>MAGHREB</span>

            <div className="lit-countries">
              <div>
                <strong>Maroc</strong>
                <small>🇲🇦</small>
              </div>

              <div>
                <strong>Algérie</strong>
                <small>🇩🇿</small>
              </div>

              <div>
                <strong>Tunisie</strong>
                <small>🇹🇳</small>
              </div>
            </div>

            <p>
              Trois espaces culturels majeurs de la littérature maghrébine
              d'expression française.
            </p>
          </div>
        </div>
      </section>

      {/* PRECURSEURS */}
      <section className="lit-section lit-dark-section">
        <div className="lit-section-heading">
          <span className="lit-number">02</span>

          <div>
            <p>LES PREMIERS ÉCRIVAINS</p>
            <h2>
              Les <i>précurseurs</i>
            </h2>
          </div>
        </div>

        <div className="lit-authors-grid">
          <article className="lit-author-card">
            <span className="lit-author-number">01</span>
            <div className="lit-author-symbol">✒</div>
            <h3>Driss Chraïbi</h3>
            <p>
              Écrivain marocain considéré comme l'un des grands pionniers de
              la littérature marocaine d'expression française.
            </p>
          </article>

          <article className="lit-author-card featured">
            <span className="lit-author-number">02</span>
            <div className="lit-author-symbol">✒</div>
            <h3>Ahmed Sefrioui</h3>
            <p>
              L'un des premiers écrivains marocains à publier en français.
              Il est notamment l'auteur de{" "}
              <i>La Boîte à merveilles</i>.
            </p>
          </article>

          <article className="lit-author-card">
            <span className="lit-author-number">03</span>
            <div className="lit-author-symbol">✒</div>
            <h3>Abdelkebir Khatibi</h3>
            <p>
              Écrivain et penseur marocain dont les œuvres interrogent
              l'identité, la culture et les rapports entre les langues.
            </p>
          </article>
        </div>
      </section>

      {/* CARACTERISTIQUES */}
      <section className="lit-section">
        <div className="lit-section-heading">
          <span className="lit-number">03</span>

          <div>
            <p>COMPRENDRE L'ESSENTIEL</p>
            <h2>
              Les principales <i>caractéristiques</i>
            </h2>
          </div>
        </div>

        <div className="lit-features-grid">
          <article>
            <span>01</span>
            <h3>Identité</h3>
            <p>
              Questionnement autour de l'identité individuelle et collective.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Culture</h3>
            <p>
              Présence des traditions, des coutumes et de la culture
              maghrébines.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Colonisation</h3>
            <p>
              Réflexion sur la colonisation, ses conséquences et la période
              qui suit les indépendances.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Langue</h3>
            <p>
              Utilisation de la langue française pour exprimer une réalité
              maghrébine.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Mémoire</h3>
            <p>
              Importance des souvenirs, de l'enfance et de la mémoire
              personnelle.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Société</h3>
            <p>
              Description des transformations et des problèmes de la société
              maghrébine.
            </p>
          </article>
        </div>
      </section>

      {/* A RETENIR */}
      <section className="lit-summary">
        <div className="lit-summary-inner">
          <div className="lit-summary-symbol">✦</div>

          <p>FICHE EXPRESS</p>

          <h2>
            Ce qu'il faut <i>retenir</i>
          </h2>

          <div className="lit-summary-text">
            <p>
              La littérature maghrébine d'expression française est une
              littérature produite par des écrivains du Maghreb utilisant le
              français comme langue d'écriture.
            </p>

            <p>
              Elle aborde notamment l'identité, la culture, la colonisation,
              la mémoire, les traditions et les transformations de la société.
            </p>
          </div>

          <div className="lit-keywords">
            <span>Maghreb</span>
            <span>Identité</span>
            <span>Culture</span>
            <span>Mémoire</span>
            <span>Colonisation</span>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="lit-next">
        <p>PROCHAINE ÉTAPE</p>

        <h2>
          Comprendre <i>l'autobiographie</i>
        </h2>

        <Link href="/autobiographie" className="lit-primary-button">
          Continuer
          <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="lit-footer">
        <div>
          <strong>La Boîte à merveilles</strong>
          <span>Site de révision littéraire — 1er Bac</span>
        </div>

        <Link href="/">Retour à l'accueil ↑</Link>
      </footer>
    </main>
  );
}