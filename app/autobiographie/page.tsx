"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AutobiographiePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="autobiographie-page">
      {/* BACKGROUND */}
      <div className="autobiographie-background">
        <div className="auto-word auto-word-1">Mémoire</div>
        <div className="auto-word auto-word-2">Souvenirs</div>
        <div className="auto-word auto-word-3">Enfance</div>

        <div className="auto-line auto-line-1" />
        <div className="auto-line auto-line-2" />
      </div>

      {/* NAVBAR */}
      <header
        className={`auto-navbar ${
          scrolled ? "auto-navbar-scrolled" : ""
        }`}
      >
        <div className="auto-navbar-inner">
          <Link href="/" className="auto-brand">
            <div className="auto-brand-symbol">✦</div>

            <div>
              <span>La Boîte</span>
              <small>à merveilles</small>
            </div>
          </Link>

          <nav className="auto-nav">
            <Link href="/">Accueil</Link>

            <Link href="/litterature">Littérature</Link>

            <Link href="/autobiographie" className="active">
              Autobiographie
            </Link>

            <Link href="/auteur">L'auteur</Link>

            <Link href="/personnages">Personnages</Link>

            <Link href="/lieux">Lieux</Link>

            <Link href="/resume">Résumé</Link>

            <Link href="/paratexte">Paratexte</Link>

            <Link href="/fiche-de-lecture">
              Fiche de lecture
            </Link>
          </nav>

          <Link
            href="/fiche-de-lecture"
            className="auto-nav-button"
          >
            Réviser <span>↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="auto-hero">
        <div className="auto-hero-content">
          <div className="auto-small-title">
            <span />
            <span>02 — NOTION ESSENTIELLE</span>
            <span />
          </div>

          <p className="auto-eyebrow">1er BAC</p>

          <h1>
            L'<i>autobiographie</i>
          </h1>

          <p className="auto-hero-description">
            Un récit dans lequel un auteur raconte sa propre
            vie, ses souvenirs, son enfance et les événements
            qui ont marqué son existence.
          </p>

          <div className="auto-hero-buttons">
            <a href="#definition" className="auto-primary-button">
              Commencer
              <span>↓</span>
            </a>

            <Link
              href="/auteur"
              className="auto-secondary-button"
            >
              Découvrir l'auteur →
            </Link>
          </div>
        </div>

        {/* SYMBOL */}
        <div className="auto-hero-symbol">
          <div className="auto-glow" />

          <div className="auto-circle">
            <span>“</span>
            <span>✒</span>
            <span>”</span>
          </div>

          <div className="auto-orbit auto-orbit-1" />
          <div className="auto-orbit auto-orbit-2" />
        </div>
      </section>

      {/* DEFINITION */}
      <section className="auto-section" id="definition">
        <div className="auto-heading">
          <span className="auto-number">01</span>

          <div>
            <p>À RETENIR</p>

            <h2>
              Qu'est-ce que <i>l'autobiographie</i> ?
            </h2>
          </div>
        </div>

        <div className="auto-definition-grid">
          <div className="auto-main-card">
            <span className="auto-card-icon">✒</span>

            <p className="auto-big-text">
              L'autobiographie est un récit dans lequel
              une personne réelle raconte sa propre vie.
            </p>

            <p>
              L'auteur, le narrateur et le personnage principal
              sont généralement la même personne. Le récit
              présente donc des événements vécus ou inspirés
              de la vie réelle de l'auteur.
            </p>
          </div>

          <div className="auto-side-card">
            <span>LES 3 IDENTITÉS</span>

            <div className="auto-identities">
              <div>
                <strong>Auteur</strong>
                <small>écrit</small>
              </div>

              <div>
                <strong>Narrateur</strong>
                <small>raconte</small>
              </div>

              <div>
                <strong>Personnage</strong>
                <small>vit</small>
              </div>
            </div>

            <p>
              Dans une autobiographie, ces trois instances
              correspondent généralement à la même personne.
            </p>
          </div>
        </div>
      </section>

      {/* CARACTERISTIQUES */}
      <section className="auto-section auto-dark-section">
        <div className="auto-heading">
          <span className="auto-number">02</span>

          <div>
            <p>COMMENT LA RECONNAÎTRE ?</p>

            <h2>
              Les <i>caractéristiques</i>
            </h2>
          </div>
        </div>

        <div className="auto-features-grid">
          <article>
            <span>01</span>

            <div className="auto-feature-icon">✦</div>

            <h3>Le récit à la première personne</h3>

            <p>
              L'auteur utilise souvent le pronom personnel
              « je » pour raconter son histoire.
            </p>
          </article>

          <article>
            <span>02</span>

            <div className="auto-feature-icon">✒</div>

            <h3>Les souvenirs</h3>

            <p>
              Le récit s'appuie sur les souvenirs et les
              expériences personnelles de l'auteur.
            </p>
          </article>

          <article>
            <span>03</span>

            <div className="auto-feature-icon">◈</div>

            <h3>La mémoire</h3>

            <p>
              L'auteur sélectionne et organise les événements
              qu'il souhaite raconter.
            </p>
          </article>

          <article>
            <span>04</span>

            <div className="auto-feature-icon">❝</div>

            <h3>La subjectivité</h3>

            <p>
              Le récit présente les sentiments, les émotions
              et le point de vue personnel de l'auteur.
            </p>
          </article>

          <article>
            <span>05</span>

            <div className="auto-feature-icon">◇</div>

            <h3>Le passé</h3>

            <p>
              L'autobiographie revient souvent sur des
              événements passés de la vie de l'auteur.
            </p>
          </article>

          <article>
            <span>06</span>

            <div className="auto-feature-icon">∞</div>

            <h3>La vérité</h3>

            <p>
              L'auteur cherche généralement à présenter
              des événements qu'il considère comme vrais.
            </p>
          </article>
        </div>
      </section>

      {/* PACTE AUTOBIOGRAPHIQUE */}
      <section className="auto-section">
        <div className="auto-heading">
          <span className="auto-number">03</span>

          <div>
            <p>UNE NOTION IMPORTANTE</p>

            <h2>
              Le pacte <i>autobiographique</i>
            </h2>
          </div>
        </div>

        <div className="auto-pacte">
          <div className="auto-pacte-symbol">“</div>

          <div>
            <p className="auto-pacte-big">
              L'auteur s'engage à raconter sa vie ou
              certains événements de celle-ci en cherchant
              à établir une relation de confiance avec le lecteur.
            </p>

            <p className="auto-pacte-text">
              Le lecteur comprend ainsi que l'auteur,
              le narrateur et le personnage principal
              correspondent à la même personne.
            </p>
          </div>
        </div>
      </section>

      {/* GENRES PROCHES */}
      <section className="auto-section auto-dark-section">
        <div className="auto-heading">
          <span className="auto-number">04</span>

          <div>
            <p>À NE PAS CONFONDRE</p>

            <h2>
              Les genres <i>proches</i>
            </h2>
          </div>
        </div>

        <div className="auto-genres-grid">
          <article>
            <div className="auto-genre-number">01</div>

            <h3>Les mémoires</h3>

            <p>
              L'auteur raconte des événements auxquels
              il a participé ou dont il a été témoin,
              souvent en lien avec l'histoire collective.
            </p>
          </article>

          <article>
            <div className="auto-genre-number">02</div>

            <h3>Le journal intime</h3>

            <p>
              Texte personnel dans lequel l'auteur écrit
              régulièrement ses pensées, sentiments et
              événements quotidiens.
            </p>
          </article>

          <article>
            <div className="auto-genre-number">03</div>

            <h3>La biographie</h3>

            <p>
              Récit de la vie d'une personne écrit par
              une autre personne.
            </p>
          </article>

          <article>
            <div className="auto-genre-number">04</div>

            <h3>Le roman autobiographique</h3>

            <p>
              Récit inspiré de la vie de l'auteur, mais
              qui utilise des éléments de fiction.
            </p>
          </article>
        </div>
      </section>

      {/* LA BOITE A MERVEILLES */}
      <section className="auto-work-section">
        <div className="auto-work-inner">
          <p>APPLICATION À L'ŒUVRE</p>

          <h2>
            Et dans <i>La Boîte à merveilles</i> ?
          </h2>

          <div className="auto-work-grid">
            <div>
              <span>01</span>

              <h3>Sidi Mohamed</h3>

              <p>
                Le récit est raconté à la première personne
                par Sidi Mohamed, qui revient sur ses souvenirs
                d'enfance.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>Les souvenirs</h3>

              <p>
                Le narrateur raconte son enfance, sa famille,
                ses voisins et sa vie dans la médina de Fès.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>Ahmed Sefrioui</h3>

              <p>
                Le roman possède plusieurs caractéristiques
                autobiographiques et s'inspire de l'enfance
                de l'auteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FICHE EXPRESS */}
      <section className="auto-summary">
        <div className="auto-summary-inner">
          <div className="auto-summary-symbol">✦</div>

          <p>FICHE EXPRESS</p>

          <h2>
            Ce qu'il faut <i>retenir</i>
          </h2>

          <div className="auto-summary-box">
            <div>
              <strong>Auteur</strong>
              <span>écrit sa propre vie</span>
            </div>

            <div>
              <strong>Narrateur</strong>
              <span>raconte l'histoire</span>
            </div>

            <div>
              <strong>Personnage</strong>
              <span>vit les événements</span>
            </div>

            <div>
              <strong>Pronom</strong>
              <span>« je »</span>
            </div>
          </div>

          <p className="auto-summary-text">
            L'autobiographie est donc un récit personnel
            fondé sur les souvenirs et les expériences
            de l'auteur.
          </p>
        </div>
      </section>

      {/* NEXT */}
      <section className="auto-next">
        <p>PROCHAINE ÉTAPE</p>

        <h2>
          Découvrir <i>Ahmed Sefrioui</i>
        </h2>

        <Link href="/auteur" className="auto-primary-button">
          Continuer
          <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="auto-footer">
        <div>
          <strong>La Boîte à merveilles</strong>
          <span>Site de révision littéraire — 1er Bac</span>
        </div>

        <Link href="/">Retour à l'accueil ↑</Link>
      </footer>
    </main>
  );
}