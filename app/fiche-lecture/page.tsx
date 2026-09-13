"use client";

import { useState } from "react";
import Link from "next/link";
import "./fiche-lecture.css";

type Section = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

export default function FicheLecturePage() {
  const [openSection, setOpenSection] = useState<string | null>("general");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections: Section[] = [
    {
      id: "general",
      number: "01",
      title: "Informations générales",
      content: (
        <div className="info-grid">
          <div className="info-item">
            <span>Titre de l'œuvre</span>
            <strong>La Boîte à Merveilles</strong>
          </div>

          <div className="info-item">
            <span>Auteur</span>
            <strong>Ahmed Sefrioui</strong>
          </div>

          <div className="info-item">
            <span>Date d'écriture</span>
            <strong>1952</strong>
          </div>

          <div className="info-item">
            <span>Date de publication</span>
            <strong>1954</strong>
          </div>

          <div className="info-item">
            <span>Genre</span>
            <strong>Roman autobiographique</strong>
          </div>

          <div className="info-item">
            <span>Littérature</span>
            <strong>Marocaine d'expression française</strong>
          </div>

          <div className="info-item">
            <span>Nombre de chapitres</span>
            <strong>12 chapitres</strong>
          </div>

          <div className="info-item">
            <span>Cadre principal</span>
            <strong>Fès — Médina</strong>
          </div>
        </div>
      ),
    },

    {
      id: "narrateur",
      number: "02",
      title: "Narrateur et point de vue",
      content: (
        <div className="narrateur-content">
          <div className="narrateur-main">
            <span className="mini-label">NARRATEUR</span>

            <h3>Sidi Mohammed</h3>

            <p>
              Le récit est raconté à la première personne par Sidi Mohammed,
              un enfant de six ans. Il raconte son quotidien, ses expériences,
              ses émotions, ses peurs et son imagination.
            </p>
          </div>

          <div className="narrateur-cards">
            <div>
              <span>01</span>
              <h4>Focalisation</h4>
              <strong>Interne</strong>
              <p>
                Les événements sont principalement perçus à travers
                le regard du narrateur.
              </p>
            </div>

            <div>
              <span>02</span>
              <h4>Personne</h4>
              <strong>Première personne</strong>
              <p>
                Le narrateur participe directement aux événements racontés.
              </p>
            </div>

            <div>
              <span>03</span>
              <h4>Âge</h4>
              <strong>Six ans</strong>
              <p>
                Le monde est souvent présenté avec la sensibilité
                et l'imagination d'un enfant.
              </p>
            </div>

            <div>
              <span>04</span>
              <h4>Temps verbaux</h4>
              <strong>Imparfait / passé simple</strong>
              <p>
                Le présent peut également signaler la présence
                du narrateur adulte.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "temps",
      number: "03",
      title: "Temps et durée du récit",
      content: (
        <div className="time-content">
          <div className="time-main">
            <div className="big-number">≈ 9</div>
            <span>MOIS</span>
            <p>
              L'histoire couvre une période d'environ neuf mois,
              soit presque une année.
            </p>
          </div>

          <div className="seasons">
            <div className="season">
              <span>01</span>
              <div>
                <small>PREMIÈRE PÉRIODE</small>
                <h4>L'hiver</h4>
              </div>
            </div>

            <div className="season">
              <span>02</span>
              <div>
                <small>DEUXIÈME PÉRIODE</small>
                <h4>Le printemps</h4>
              </div>
            </div>

            <div className="season">
              <span>03</span>
              <div>
                <small>TROISIÈME PÉRIODE</small>
                <h4>L'été</h4>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "personnages",
      number: "04",
      title: "Les personnages principaux",
      content: (
        <div className="characters-grid">
          <div className="character main-character">
            <span>PERSONNAGE PRINCIPAL</span>
            <h3>Sidi Mohammed</h3>
            <p>
              Enfant sensible, solitaire et imaginatif. Il observe le monde
              des adultes et trouve refuge dans son univers intérieur.
            </p>
          </div>

          <div className="character">
            <span>LA MÈRE</span>
            <h3>Lalla Zoubida</h3>
            <p>
              La mère de Sidi Mohammed. Elle est très attachée à sa famille,
              aux traditions et aux croyances.
            </p>
          </div>

          <div className="character">
            <span>LE PÈRE</span>
            <h3>Abdeslam</h3>
            <p>
              Le père de Sidi Mohammed. Il exerce le métier de tisserand
              et connaît une période de difficultés financières.
            </p>
          </div>

          <div className="character">
            <span>LA VOISINE</span>
            <h3>Rahma</h3>
            <p>
              Voisine de la famille et mère de Zineb.
              Elle participe à la vie quotidienne de Dar Chouafa.
            </p>
          </div>

          <div className="character">
            <span>FILLE DE RAHMA</span>
            <h3>Zineb</h3>
            <p>
              Fille de Rahma et de Driss El Aouad,
              elle appartient à l'entourage quotidien du narrateur.
            </p>
          </div>

          <div className="character">
            <span>VOISINE</span>
            <h3>Fatma Bziouya</h3>
            <p>
              Une des habitantes de Dar Chouafa et une figure
              de la vie collective de la maison.
            </p>
          </div>

          <div className="character">
            <span>AMIE DE LA MÈRE</span>
            <h3>Lalla Aïcha</h3>
            <p>
              Amie de Lalla Zoubida, présente notamment lorsque
              la famille traverse des moments difficiles.
            </p>
          </div>

          <div className="character">
            <span>ÉDUCATION</span>
            <h3>Le Fqih</h3>
            <p>
              Maître du Msid, l'école coranique fréquentée
              par Sidi Mohammed.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "lieux",
      number: "05",
      title: "Les lieux importants",
      content: (
        <div className="places">
          <div className="place">
            <span>01</span>
            <div>
              <h3>Dar Chouafa</h3>
              <p>
                La maison où vivent Sidi Mohammed et ses parents,
                ainsi que plusieurs autres familles.
              </p>
            </div>
          </div>

          <div className="place">
            <span>02</span>
            <div>
              <h3>Le Msid</h3>
              <p>
                L'école coranique fréquentée par Sidi Mohammed.
              </p>
            </div>
          </div>

          <div className="place">
            <span>03</span>
            <div>
              <h3>La médina de Fès</h3>
              <p>
                L'espace principal du récit, avec ses ruelles,
                ses maisons, ses souks et ses traditions.
              </p>
            </div>
          </div>

          <div className="place">
            <span>04</span>
            <div>
              <h3>Le bain maure</h3>
              <p>
                Un lieu de rencontre et de vie sociale.
              </p>
            </div>
          </div>

          <div className="place">
            <span>05</span>
            <div>
              <h3>Les souks</h3>
              <p>
                Espaces commerciaux importants dans la vie du père
                et dans plusieurs événements du récit.
              </p>
            </div>
          </div>

          <div className="place">
            <span>06</span>
            <div>
              <h3>La maison de Lalla Aïcha</h3>
              <p>
                Un lieu où Lalla Zoubida échange avec son amie
                et partage ses inquiétudes.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "schema",
      number: "06",
      title: "Le schéma narratif",
      content: (
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-number">01</div>

            <div>
              <span>SITUATION INITIALE</span>
              <h3>La vie à Dar Chouafa</h3>
              <p>
                Sidi Mohammed vit avec ses parents dans la médina de Fès.
                Il fréquente le Msid et observe la vie des habitants
                de Dar Chouafa.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">02</div>

            <div>
              <span>ÉLÉMENT PERTURBATEUR</span>
              <h3>La ruine du père</h3>
              <p>
                Abdeslam perd son capital au souk.
                Cette situation provoque des difficultés financières
                pour toute la famille.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">03</div>

            <div>
              <span>PÉRIPÉTIES</span>
              <h3>L'absence du père</h3>
              <p>
                Le père quitte la maison pour chercher du travail.
                Cette absence provoque l'inquiétude de la famille
                et renforce la solitude de Sidi Mohammed.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">04</div>

            <div>
              <span>DÉNOUEMENT</span>
              <h3>Le retour d'Abdeslam</h3>
              <p>
                Le père revient après sa période de travail,
                apportant soulagement et joie à la famille.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">05</div>

            <div>
              <span>SITUATION FINALE</span>
              <h3>Retour au monde de l'enfant</h3>
              <p>
                La situation familiale s'améliore et Sidi Mohammed
                retrouve son univers intérieur et sa boîte à merveilles.
              </p>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: "themes",
      number: "07",
      title: "Les thèmes principaux",
      content: (
        <div className="themes-grid">

          <div className="theme">
            <span>01</span>
            <h3>La solitude</h3>
            <p>
              Sidi Mohammed souffre de solitude et cherche
              un refuge dans son imagination.
            </p>
          </div>

          <div className="theme">
            <span>02</span>
            <h3>L'enfance</h3>
            <p>
              Le récit présente le monde à travers les yeux
              et la sensibilité d'un enfant.
            </p>
          </div>

          <div className="theme">
            <span>03</span>
            <h3>La famille</h3>
            <p>
              Les relations entre les membres de la famille
              occupent une place centrale.
            </p>
          </div>

          <div className="theme">
            <span>04</span>
            <h3>L'imagination</h3>
            <p>
              L'imagination permet à l'enfant de s'évader
              des difficultés de la réalité.
            </p>
          </div>

          <div className="theme">
            <span>05</span>
            <h3>Les traditions</h3>
            <p>
              Le roman présente les habitudes, les croyances
              et les pratiques de la société traditionnelle.
            </p>
          </div>

          <div className="theme">
            <span>06</span>
            <h3>La pauvreté</h3>
            <p>
              Les difficultés économiques de la famille
              constituent un élément important du récit.
            </p>
          </div>

          <div className="theme">
            <span>07</span>
            <h3>La superstition</h3>
            <p>
              Les croyances et pratiques populaires apparaissent
              dans la vie quotidienne des personnages.
            </p>
          </div>

          <div className="theme">
            <span>08</span>
            <h3>La vie sociale</h3>
            <p>
              La médina et Dar Chouafa permettent de découvrir
              les relations entre les habitants.
            </p>
          </div>

        </div>
      ),
    },

    {
      id: "boite",
      number: "08",
      title: "La boîte à merveilles : symbole",
      content: (
        <div className="box-section">

          <div className="box-visual">
            <div className="box-inner">
              <span>✦</span>
            </div>
          </div>

          <div className="box-text">
            <span className="mini-label">SYMBOLE CENTRAL</span>

            <h3>
              Un refuge dans
              <br />
              <em>l'imagination.</em>
            </h3>

            <p>
              La boîte contient des objets ordinaires auxquels
              Sidi Mohammed attribue une valeur particulière.
              Elle devient un espace personnel où l'enfant peut
              s'évader de la réalité.
            </p>

            <p>
              Elle symbolise donc principalement l'imagination,
              le rêve, l'évasion et le refuge contre la solitude.
            </p>

            <div className="formula">
              <span>RÉALITÉ</span>
              <i>→</i>
              <span>IMAGINATION</span>
              <i>→</i>
              <strong>ÉVASION</strong>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: "auteur",
      number: "09",
      title: "Ahmed Sefrioui",
      content: (
        <div className="author-section">

          <div className="author-main">
            <span className="mini-label">L'AUTEUR</span>

            <h3>Ahmed Sefrioui</h3>

            <p>
              Ahmed Sefrioui est un écrivain marocain né à Fès
              en 1915 et mort en 2004. Il est considéré comme
              une figure importante de la littérature marocaine
              d'expression française.
            </p>
          </div>

          <div className="author-facts">
            <div>
              <span>1915</span>
              <p>Naissance</p>
            </div>

            <div>
              <span>FÈS</span>
              <p>Ville natale</p>
            </div>

            <div>
              <span>1952</span>
              <p>Écriture du roman</p>
            </div>

            <div>
              <span>2004</span>
              <p>Décès</p>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: "resume-fiche",
      number: "10",
      title: "À retenir pour l'examen",
      content: (
        <div className="revision">

          <div className="revision-line">
            <span>Œuvre</span>
            <strong>La Boîte à Merveilles</strong>
          </div>

          <div className="revision-line">
            <span>Auteur</span>
            <strong>Ahmed Sefrioui</strong>
          </div>

          <div className="revision-line">
            <span>Genre</span>
            <strong>Roman autobiographique</strong>
          </div>

          <div className="revision-line">
            <span>Narrateur</span>
            <strong>Sidi Mohammed</strong>
          </div>

          <div className="revision-line">
            <span>Focalisation</span>
            <strong>Interne</strong>
          </div>

          <div className="revision-line">
            <span>Âge</span>
            <strong>Six ans</strong>
          </div>

          <div className="revision-line">
            <span>Chapitres</span>
            <strong>12</strong>
          </div>

          <div className="revision-line">
            <span>Saisons</span>
            <strong>Hiver — Printemps — Été</strong>
          </div>

          <div className="revision-line">
            <span>Événement perturbateur</span>
            <strong>La ruine du père</strong>
          </div>

          <div className="revision-line">
            <span>Symbole</span>
            <strong>La boîte à merveilles</strong>
          </div>

          <div className="revision-line">
            <span>Thèmes</span>
            <strong>Solitude — enfance — famille — imagination</strong>
          </div>

        </div>
      ),
    },
  ];

  return (
    <main className="fiche-page">

      {/* HERO */}

      <section className="fiche-hero">

        <div className="hero-grid"></div>

        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="hero-content">

          <span className="eyebrow">
            FICHE DE LECTURE
          </span>

          <h1>
            La Boîte
            <br />
            <em>à Merveilles</em>
          </h1>

          <p>
            L'essentiel de l'œuvre d'Ahmed Sefrioui,
            présenté dans une fiche claire, complète et interactive.
          </p>

          <div className="hero-meta">
            <span>AHMED SEFRIOUI</span>
            <i></i>
            <span>1954</span>
            <i></i>
            <span>ROMAN AUTOBIOGRAPHIQUE</span>
          </div>

        </div>

        <div className="scroll">
          <span>EXPLORER</span>
          <div></div>
        </div>

      </section>

      {/* QUICK FACTS */}

      <section className="quick-facts">

        <div>
          <strong>1952</strong>
          <span>Écriture</span>
        </div>

        <div>
          <strong>1954</strong>
          <span>Publication</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Chapitres</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Saisons</span>
        </div>

        <div>
          <strong>06</strong>
          <span>Ans</span>
        </div>

      </section>

      {/* INTRO */}

      <section className="fiche-intro">

        <div className="intro-number">
          00 / INTRODUCTION
        </div>

        <div>

          <h2>
            Comprendre
            <br />
            <em>l'essentiel.</em>
          </h2>

          <p>
            La Boîte à Merveilles raconte le quotidien de Sidi Mohammed,
            un enfant de six ans vivant dans la médina de Fès.
            À travers son regard, le lecteur découvre sa famille,
            ses voisins, les traditions et les difficultés de la vie quotidienne.
          </p>

        </div>

      </section>

      {/* ACCORDIONS */}

      <section className="fiche-sections">

        {sections.map((section) => {

          const isOpen = openSection === section.id;

          return (
            <article
              key={section.id}
              className={`fiche-section ${
                isOpen ? "is-open" : ""
              }`}
            >

              <button
                className="section-trigger"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
              >

                <div className="trigger-left">

                  <span>{section.number}</span>

                  <h2>{section.title}</h2>

                </div>

                <div className="trigger-icon">
                  {isOpen ? "−" : "+"}
                </div>

              </button>

              <div className="section-content">

                <div className="section-content-inner">

                  {section.content}

                </div>

              </div>

            </article>
          );
        })}

      </section>

      {/* FINAL */}

      <section className="final-section">

        <span className="final-label">
          LA FICHE EN UNE PHRASE
        </span>

        <h2>
          Un enfant,
          <br />
          <em>un monde intérieur.</em>
        </h2>

        <p>
          Sidi Mohammed transforme les expériences de son quotidien
          en souvenirs, en émotions et en imagination.
        </p>

      </section>

      {/* NAVIGATION */}

      <section className="page-navigation">

        <Link
          href="/paratexte"
          className="page-nav-card"
        >
          <span>←</span>

          <div>
            <small>PRÉCÉDENT</small>
            <strong>Paratexte</strong>
          </div>
        </Link>

        <Link
          href="/resume"
          className="page-nav-card right"
        >

          <div>
            <small>RETOUR</small>
            <strong>Résumé complet</strong>
          </div>

          <span>→</span>

        </Link>

      </section>

      {/* FOOTER */}

      <footer className="fiche-footer">

        <div>L.B.M</div>

        <p>
          Étude de La Boîte à Merveilles
        </p>

      </footer>

    </main>
  );
}