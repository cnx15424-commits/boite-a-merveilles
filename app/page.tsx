"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Accueil", href: "/" },
  { label: "Littérature", href: "/litterature" },
  { label: "Autobiographie", href: "/autobiographie" },
  { label: "L'auteur", href: "/auteur" },
  { label: "Personnages", href: "/personnages" },
  { label: "Lieux", href: "/lieux" },
  { label: "Résumé", href: "/resume" },
  { label: "Paratexte", href: "/paratexte" },
  { label: "Fiche de lecture", href: "/fiche-lecture" },

  // AJOUT : Test diagnostique
  { label: "Test diagnostique", href: "/test-diagnostique" },
];

const quickLinks = [
  {
    number: "01",
    title: "Littérature maghrébine",
    text: "Comprendre son origine, ses précurseurs et ses principales caractéristiques.",
    href: "/litterature",
  },
  {
    number: "02",
    title: "L'autobiographie",
    text: "Définition, caractéristiques et genres proches de l'autobiographie.",
    href: "/autobiographie",
  },
  {
    number: "03",
    title: "Ahmed Sefrioui",
    text: "Découvrir la vie et l'œuvre du premier écrivain marocain d'expression française.",
    href: "/auteur",
  },
  {
    number: "04",
    title: "Les personnages",
    text: "Explorer les personnages principaux et secondaires du roman.",
    href: "/personnages",
  },
  {
    number: "05",
    title: "Les lieux",
    text: "Découvrir les lieux importants présents dans le récit.",
    href: "/lieux",
  },
  {
    number: "06",
    title: "Résumé",
    text: "Retrouver l'histoire de La Boîte à merveilles de manière claire et organisée.",
    href: "/resume",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <main className="site">

      {/* ================= BACKGROUND ================= */}

      <div className="literary-background">
        <div className="writing writing-1">
          La Boîte à merveilles...
        </div>

        <div className="writing writing-2">
          Ahmed Sefrioui
        </div>

        <div className="writing writing-3">
          fès — enfance — souvenirs
        </div>

        <div className="writing writing-4">
          Il était une fois...
        </div>

        <div className="writing writing-5">
          mémoire · enfance · famille
        </div>

        <div className="ink-line ink-line-1" />
        <div className="ink-line ink-line-2" />
        <div className="ink-line ink-line-3" />
      </div>

      {/* ================= NAVBAR ================= */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">

          <Link href="/" className="brand">
            <div className="brand-symbol">✦</div>

            <div className="brand-text">
              <span className="brand-main">
                La Boîte
              </span>

              <span className="brand-sub">
                à merveilles
              </span>
            </div>
          </Link>

          <nav
            id="main-nav"
            className={`nav-links ${menuOpen ? "nav-open" : ""}`}
            aria-expanded={menuOpen}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/test-diagnostique"
            className="nav-button"
          >
            Réviser
            <span>↗</span>
          </Link>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-small-title">
            <span className="line" />

            <span>
              UNE ŒUVRE — UN MONDE
            </span>

            <span className="line" />
          </div>

          <p className="hero-eyebrow">
            Ahmed Sefrioui
          </p>

          <h1>
            La Boîte
            <br />
            <span>à merveilles</span>
          </h1>

          <div className="hero-divider">
            <span>✦</span>
          </div>

          <p className="hero-description">
            Entrez dans l'univers de Sidi Mohamed,
            entre souvenirs d'enfance, médina de Fès,
            famille et imagination.
          </p>

          <div className="hero-buttons">

            <Link
              href="/test-diagnostique"
              className="primary-button"
            >
              Commencer la révision
              <span>→</span>
            </Link>

            <Link
              href="/resume"
              className="secondary-button"
            >
              Découvrir le résumé
            </Link>

          </div>

        </div>

        <div className="hero-book">

          <div className="book-glow" />

          <div className="book">
            <img
              src="/images/la-boite-a-merveilles.png"
              alt="La Boîte à merveilles — Ahmed Sefrioui"
              className="book-image"
            />
          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="quote-section">

        <div className="quote-mark">
          “
        </div>

        <div className="quote-content">

          <p>
            Une plongée dans les souvenirs d'une enfance
            racontée avec sensibilité, imagination et poésie.
          </p>

          <span>
            — La Boîte à merveilles
          </span>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="intro-section">

        <div className="section-heading">

          <span className="section-number">
            01
          </span>

          <div>

            <p className="section-label">
              AVANT DE COMMENCER
            </p>

            <h2>
              Comprendre <i>l'œuvre</i>
            </h2>

          </div>

        </div>

        <div className="intro-grid">

          <div className="intro-main">

            <p className="big-text">
              <i>La Boîte à merveilles</i> n'est pas seulement
              un roman à étudier. C'est une porte ouverte sur
              le Maroc traditionnel, sur l'enfance et sur les
              souvenirs d'un écrivain.
            </p>

            <p>
              Pour bien comprendre l'œuvre, il faut d'abord
              connaître le contexte littéraire dans lequel elle
              est née, comprendre l'autobiographie, découvrir
              son auteur et identifier les éléments essentiels
              du récit.
            </p>

          </div>

          <div className="intro-card">

            <span className="card-symbol">
              ✒
            </span>

            <h3>
              Un voyage
              <br />
              dans la mémoire
            </h3>

            <p>
              Littérature · autobiographie · enfance · mémoire ·
              société marocaine
            </p>

          </div>

        </div>

      </section>

      {/* ================= QUICK ACCESS ================= */}

      <section className="quick-section">

        <div className="section-heading centered">

          <p className="section-label">
            EXPLORER LE SITE
          </p>

          <h2>
            Tout pour <i>réviser</i>
          </h2>

          <p className="section-subtitle">
            Retrouvez les notions essentielles de l'œuvre
            dans des fiches claires et organisées.
          </p>

        </div>

        <div className="cards-grid">

          {quickLinks.map((item) => (

            <Link
              href={item.href}
              className="literary-card"
              key={item.number}
            >

              <div className="card-top">

                <span>
                  {item.number}
                </span>

                <span className="card-arrow">
                  ↗
                </span>

              </div>

              <div className="card-icon">
                ✦
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="card-footer">
                Découvrir
                <span>→</span>
              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* ================= FICHE DE LECTURE CTA ================= */}

      <section className="revision-section">

        <div className="revision-inner">

          <div className="revision-symbol">
            ✒
          </div>

          <p className="section-label">
            FICHE DE LECTURE
          </p>

          <h2>
            Toutes les informations
            <br />
            <i>essentielles</i>
          </h2>

          <p>
            Titre, auteur, genre, date de publication,
            siècle, date d'écriture, date du récit et
            bien plus encore.
          </p>

          <Link
            href="/fiche-lecture"
            className="primary-button"
          >
            Voir la fiche complète
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="brand-symbol">
              ✦
            </div>

            <div>

              <h3>
                La Boîte <i> à merveilles</i>
              </h3>

              <p>
                Site de révision littéraire
              </p>

            </div>

          </div>

          <div className="footer-quote">

            <span>
              « Entre mémoire et imagination,
              l'enfance devient une histoire. »
            </span>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            Ahmed Sefrioui · La Boîte à merveilles
          </span>

          <span>
            ✦
          </span>

          <span>
            Révision 1er Bac
          </span>

        </div>

      </footer>

    </main>
  );
}