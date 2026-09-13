"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuteurPage(): import("react").JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="auteur-page">

      {/* Background */}
      <div className="auteur-bg">
        <span>ÉCRITURE</span>
        <span>MÉMOIRE</span>
        <span>FÈS</span>
        <span>LITTÉRATURE</span>
      </div>

      {/* Navbar */}
      <header className={`auteur-navbar ${scrolled ? "auteur-navbar-scrolled" : ""}`}>
        <Link href="/" className="auteur-logo">
          <span>✦</span>
          La Boîte à merveilles
        </Link>

        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/litterature">Littérature</Link>
          <Link href="/autobiographie">Autobiographie</Link>
          <Link href="/auteur" className="active">Auteur</Link>
          <Link href="/personnages">Personnages</Link>
          <Link href="/lieux">Lieux</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/paratexte">Paratexte</Link>
          <Link href="/fiche-de-lecture">Fiche de lecture</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="auteur-hero">

        <div className="auteur-hero-line"></div>

        <p className="auteur-eyebrow">
          ✦ FICHE AUTEUR ✦
        </p>

        <h1>
          Ahmed <span>Sefrioui</span>
        </h1>

        <p className="auteur-subtitle">
          L’un des pionniers de la littérature marocaine
          d’expression française.
        </p>

        <div className="auteur-scroll">
          <span>↓</span>
          Découvrir l’auteur
        </div>

      </section>

      {/* Identité */}
      <section className="auteur-section">

        <div className="auteur-title">
          <span>01</span>
          <div>
            <p>IDENTITÉ</p>
            <h2>Qui est Ahmed Sefrioui ?</h2>
          </div>
        </div>

        <div className="auteur-identity-grid">

          <div className="auteur-identity-card">
            <span>Nom</span>
            <strong>Ahmed Sefrioui</strong>
          </div>

          <div className="auteur-identity-card">
            <span>Naissance</span>
            <strong>1915 — Fès</strong>
          </div>

          <div className="auteur-identity-card">
            <span>Décès</span>
            <strong>2004 — Rabat</strong>
          </div>

          <div className="auteur-identity-card">
            <span>Nationalité</span>
            <strong>Marocaine</strong>
          </div>

          <div className="auteur-identity-card">
            <span>Langue d’écriture</span>
            <strong>Français</strong>
          </div>

          <div className="auteur-identity-card">
            <span>Domaine</span>
            <strong>Littérature</strong>
          </div>

        </div>

      </section>

      {/* Biographie */}
      <section className="auteur-section auteur-dark-section">

        <div className="auteur-title">
          <span>02</span>
          <div>
            <p>BIOGRAPHIE</p>
            <h2>Une vie entre culture et littérature</h2>
          </div>
        </div>

        <div className="auteur-biography">

          <div className="auteur-big-letter">
            A
          </div>

          <div className="auteur-biography-text">
            <p>
              <strong>Ahmed Sefrioui</strong> est un écrivain marocain
              né à Fès en 1915. Il grandit dans l’univers traditionnel
              de la ville de Fès, un environnement qui aura une grande
              influence sur son œuvre littéraire.
            </p>

            <p>
              Il s’intéresse très tôt à la culture, à la langue et
              aux traditions marocaines. À travers ses écrits, il
              cherche notamment à préserver la mémoire d’une société
              marocaine traditionnelle.
            </p>

            <p>
              Son écriture est marquée par les souvenirs, l’enfance,
              la famille, les traditions et la vie quotidienne dans
              l’ancienne médina de Fès.
            </p>
          </div>

        </div>

      </section>

      {/* Enfance */}
      <section className="auteur-section">

        <div className="auteur-title">
          <span>03</span>
          <div>
            <p>SON UNIVERS</p>
            <h2>L’enfance et la ville de Fès</h2>
          </div>
        </div>

        <div className="auteur-univers">

          <div className="auteur-univers-card">
            <div className="auteur-icon">🏛</div>
            <h3>Fès</h3>
            <p>
              La ville de Fès occupe une place importante dans
              l’univers de Sefrioui et constitue le décor principal
              de plusieurs de ses récits.
            </p>
          </div>

          <div className="auteur-univers-card">
            <div className="auteur-icon">✒</div>
            <h3>L’écriture</h3>
            <p>
              Son écriture donne une place importante aux souvenirs,
              aux traditions et à la description de la société
              marocaine.
            </p>
          </div>

          <div className="auteur-univers-card">
            <div className="auteur-icon">◈</div>
            <h3>La mémoire</h3>
            <p>
              La mémoire et les souvenirs de l’enfance constituent
              des éléments essentiels de son œuvre.
            </p>
          </div>

        </div>

      </section>

      {/* Œuvres */}
      <section className="auteur-section auteur-dark-section">

        <div className="auteur-title">
          <span>04</span>
          <div>
            <p>ŒUVRES</p>
            <h2>Ses principales œuvres</h2>
          </div>
        </div>

        <div className="auteur-books">

          <div className="auteur-book">
            <span>01</span>
            <div>
              <h3>La Boîte à merveilles</h3>
              <p>1954</p>
              <small>
                Roman autobiographique racontant l’enfance
                de Sidi Mohamed dans la médina de Fès.
              </small>
            </div>
          </div>

          <div className="auteur-book">
            <span>02</span>
            <div>
              <h3>Le Chapelet d’ambre</h3>
              <p>1949</p>
              <small>
                Une œuvre qui s’inscrit dans l’univers culturel
                et traditionnel marocain.
              </small>
            </div>
          </div>

          <div className="auteur-book">
            <span>03</span>
            <div>
              <h3>La Maison de servitude</h3>
              <p>1973</p>
              <small>
                Un autre roman important dans la production
                littéraire de Sefrioui.
              </small>
            </div>
          </div>

        </div>

      </section>

      {/* La Boîte à merveilles */}
      <section className="auteur-section auteur-oeuvre-section">

        <div className="auteur-title">
          <span>05</span>
          <div>
            <p>ŒUVRE ÉTUDIÉE</p>
            <h2>Ahmed Sefrioui et La Boîte à merveilles</h2>
          </div>
        </div>

        <div className="auteur-oeuvre">

          <div className="auteur-quote">
            <span>“</span>

            <p>
              La Boîte à merveilles raconte les souvenirs
              d’enfance de Sidi Mohamed dans la médina de Fès.
            </p>

            <small>
              — Ahmed Sefrioui
            </small>
          </div>

          <div className="auteur-oeuvre-info">

            <div>
              <span>Auteur</span>
              <strong>Ahmed Sefrioui</strong>
            </div>

            <div>
              <span>Genre</span>
              <strong>Roman autobiographique</strong>
            </div>

            <div>
              <span>Publication</span>
              <strong>1954</strong>
            </div>

            <div>
              <span>Personnage principal</span>
              <strong>Sidi Mohamed</strong>
            </div>

          </div>

        </div>

      </section>

      {/* À retenir */}
      <section className="auteur-section auteur-summary">

        <div className="auteur-summary-box">

          <p className="auteur-eyebrow">
            ✦ À RETENIR POUR L’EXAMEN ✦
          </p>

          <h2>
            Ahmed Sefrioui = mémoire + enfance + Fès
          </h2>

          <p>
            Retenez surtout le lien entre l’auteur, son enfance,
            la ville de Fès et les souvenirs racontés dans
            <em> La Boîte à merveilles</em>.
          </p>

          <div className="auteur-keywords">
            <span>Fès</span>
            <span>Enfance</span>
            <span>Mémoire</span>
            <span>Traditions</span>
            <span>Autobiographie</span>
          </div>

        </div>

      </section>

      {/* Next */}
      <section className="auteur-next">

        <p>PROCHAINE ÉTAPE</p>

        <h2>
          Découvrir les <span>personnages</span>
        </h2>

        <Link href="/personnages">
          Voir les personnages →
        </Link>

      </section>

      {/* Footer */}
      <footer className="auteur-footer">

        <div>
          <strong>La Boîte à merveilles</strong>
          <span>Ahmed Sefrioui · 1er Bac</span>
        </div>

        <p>
          Plateforme de révision littéraire
        </p>

      </footer>

    </main>
  );
}