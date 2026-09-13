"use client";

import { useState } from "react";
import Link from "next/link";
import "./paratexte.css";

type Section = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

export default function ParatextePage() {
  const [openSection, setOpenSection] = useState<string | null>("definition");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections: Section[] = [
    {
      id: "definition",
      number: "01",
      title: "Qu'est-ce que le paratexte ?",
      content: (
        <div className="definition-content">
          <div className="definition-main">
            <span className="mini-label">DÉFINITION</span>

            <h3>
              Lire autour du texte
              <br />
              <em>avant de le lire.</em>
            </h3>

            <p>
              Le paratexte désigne l’ensemble des éléments qui accompagnent
              une œuvre et qui permettent au lecteur d’obtenir des informations
              sur celle-ci avant ou pendant la lecture.
            </p>
          </div>

          <div className="definition-points">
            <div>
              <span>01</span>
              <strong>Présenter</strong>
              <p>Donner les premières informations sur l’œuvre.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Attirer</strong>
              <p>Donner envie au lecteur de découvrir le livre.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Informer</strong>
              <p>Fournir des indices sur le contenu.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Anticiper</strong>
              <p>Permettre de formuler des hypothèses de lecture.</p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "premiere",
      number: "02",
      title: "La première de couverture",
      content: (
        <div className="cover-content">
          <div className="cover-intro">
            <span className="mini-label">PREMIER CONTACT</span>

            <h3>
              La porte d'entrée
              <br />
              <em>du roman.</em>
            </h3>

            <p>
              La première de couverture constitue le premier contact visuel
              du lecteur avec l’œuvre. Elle rassemble plusieurs éléments
              textuels et iconographiques.
            </p>
          </div>

          <div className="cover-elements">
            <div className="cover-element">
              <span>01</span>
              <div>
                <small>ÉLÉMENT TEXTUEL</small>
                <h4>Le nom de l’auteur</h4>
                <p>Ahmed Sefrioui</p>
              </div>
            </div>

            <div className="cover-element">
              <span>02</span>
              <div>
                <small>ÉLÉMENT TEXTUEL</small>
                <h4>Le titre</h4>
                <p>La Boîte à Merveilles</p>
              </div>
            </div>

            <div className="cover-element">
              <span>03</span>
              <div>
                <small>GENRE</small>
                <h4>Roman</h4>
                <p>Une indication sur la nature de l’œuvre.</p>
              </div>
            </div>

            <div className="cover-element">
              <span>04</span>
              <div>
                <small>ÉLÉMENT ICONOGRAPHIQUE</small>
                <h4>L’illustration</h4>
                <p>
                  Une scène évoquant un univers marocain traditionnel
                  et un enfant isolé.
                </p>
              </div>
            </div>

            <div className="cover-element">
              <span>05</span>
              <div>
                <small>ÉDITEUR</small>
                <h4>Librairie des écoles</h4>
                <p>Maison d’édition indiquée sur certaines éditions scolaires.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "titre",
      number: "03",
      title: "Le titre : La Boîte à Merveilles",
      content: (
        <div className="title-analysis">
          <div className="title-display">
            <span>LA</span>
            <strong>BOÎTE</strong>
            <span>À</span>
            <strong className="gold-text">MERVEILLES</strong>
          </div>

          <div className="title-explanation">
            <span className="mini-label">ANALYSE DU TITRE</span>

            <h3>Un titre qui ouvre la porte à l’imagination.</h3>

            <p>
              Le titre attire immédiatement l’attention du lecteur.
              Le mot « boîte » évoque un objet qui contient ou protège
              quelque chose, tandis que le mot « merveilles » suggère
              un univers extraordinaire et imaginaire.
            </p>

            <p>
              Le titre peut donc faire penser à un monde intérieur,
              à des objets précieux pour l’enfant et à une imagination
              capable de transformer des choses ordinaires en merveilles.
            </p>

            <div className="title-form">
              <span>STRUCTURE</span>
              <strong>La Boîte + à + Merveilles</strong>
              <small>Phrase nominale</small>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "illustration",
      number: "04",
      title: "L’illustration",
      content: (
        <div className="illustration-analysis">
          <div className="visual-placeholder">
            <div className="visual-frame">
              <span>✦</span>
              <p>
                Illustration de la
                <br />
                première de couverture
              </p>
            </div>
          </div>

          <div className="visual-analysis">
            <span className="mini-label">LECTURE DE L’IMAGE</span>

            <h3>
              Une image qui suggère
              <br />
              <em>la solitude de l’enfant.</em>
            </h3>

            <div className="image-details">
              <div>
                <span>01</span>
                <h4>Le petit garçon</h4>
                <p>
                  Il apparaît isolé et attire l’attention par sa présence
                  au milieu de l’environnement traditionnel.
                </p>
              </div>

              <div>
                <span>02</span>
                <h4>Les femmes</h4>
                <p>
                  Les vêtements traditionnels évoquent le contexte
                  social et culturel marocain.
                </p>
              </div>

              <div>
                <span>03</span>
                <h4>La ruelle</h4>
                <p>
                  L’architecture ancienne évoque l’univers de la médina
                  et particulièrement celui de Fès.
                </p>
              </div>

              <div>
                <span>04</span>
                <h4>L’atmosphère</h4>
                <p>
                  L’ensemble peut suggérer un univers ancien, intime
                  et mystérieux.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "quatrieme",
      number: "05",
      title: "La quatrième de couverture",
      content: (
        <div className="fourth-cover">
          <div className="fourth-main">
            <span className="mini-label">DOS DU LIVRE</span>

            <h3>
              Des informations
              <br />
              <em>complémentaires.</em>
            </h3>

            <p>
              La quatrième de couverture constitue la dernière face extérieure
              du livre. Elle apporte généralement des informations destinées
              à compléter celles de la première de couverture.
            </p>
          </div>

          <div className="fourth-elements">
            <div className="fourth-item">
              <span>01</span>
              <strong>Extrait du roman</strong>
              <p>
                Un fragment du texte peut donner un premier aperçu
                du style et de l’univers de l’œuvre.
              </p>
            </div>

            <div className="fourth-item">
              <span>02</span>
              <strong>Maison d’édition</strong>
              <p>
                Des informations concernant l’éditeur peuvent apparaître.
              </p>
            </div>

            <div className="fourth-item">
              <span>03</span>
              <strong>Prix</strong>
              <p>
                Certaines éditions indiquent le prix du livre.
              </p>
            </div>

            <div className="fourth-item">
              <span>04</span>
              <strong>Code-barres</strong>
              <p>
                Un élément commercial et éditorial présent sur les éditions
                imprimées.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "hypotheses",
      number: "06",
      title: "Hypothèses de lecture",
      content: (
        <div className="hypotheses">
          <div className="hypothesis-intro">
            <span className="mini-label">AVANT LA LECTURE</span>

            <h3>
              Que peut-on imaginer
              <br />
              <em>à partir du paratexte ?</em>
            </h3>

            <p>
              L’observation du titre, de l’image et des informations présentes
              sur les couvertures permet au lecteur de construire des hypothèses
              avant de commencer la lecture.
            </p>
          </div>

          <div className="questions-grid">
            <div className="question-card">
              <span>01</span>
              <h4>Qui sera le personnage principal ?</h4>
              <p>
                L’enfant représenté pourrait être au centre de l’histoire.
              </p>
            </div>

            <div className="question-card">
              <span>02</span>
              <h4>Où se déroulera l’histoire ?</h4>
              <p>
                L’architecture et les vêtements peuvent faire penser
                à une ancienne médina marocaine.
              </p>
            </div>

            <div className="question-card">
              <span>03</span>
              <h4>Quel sera le rôle de la boîte ?</h4>
              <p>
                Le titre laisse penser qu’elle aura une importance
                particulière dans l’univers de l’enfant.
              </p>
            </div>

            <div className="question-card">
              <span>04</span>
              <h4>L’enfant est-il heureux ?</h4>
              <p>
                Son isolement peut conduire à l’hypothèse d’un personnage
                sensible et solitaire.
              </p>
            </div>

            <div className="question-card">
              <span>05</span>
              <h4>Quelle époque ?</h4>
              <p>
                Les vêtements et l’architecture suggèrent un contexte
                marocain traditionnel.
              </p>
            </div>

            <div className="question-card">
              <span>06</span>
              <h4>Quel univers découvrir ?</h4>
              <p>
                Le titre peut annoncer un mélange de réalité quotidienne
                et d’imagination.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "role",
      number: "07",
      title: "Le rôle du paratexte",
      content: (
        <div className="role-content">
          <div className="role-big">
            <span>PARATEXTE</span>
            <strong>
              Un seuil
              <br />
              <em>vers l’œuvre.</em>
            </strong>
          </div>

          <div className="role-list">
            <div>
              <span>01</span>
              <h4>Informer</h4>
              <p>Présenter l’auteur, le titre, le genre et l’édition.</p>
            </div>

            <div>
              <span>02</span>
              <h4>Attirer</h4>
              <p>Créer un premier intérêt chez le lecteur.</p>
            </div>

            <div>
              <span>03</span>
              <h4>Orienter</h4>
              <p>Donner des indices sur l’univers de l’œuvre.</p>
            </div>

            <div>
              <span>04</span>
              <h4>Faire réfléchir</h4>
              <p>Permettre de formuler des hypothèses avant la lecture.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="paratexte-page">

      {/* HERO */}
      <section className="paratexte-hero">
        <div className="hero-grid"></div>

        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>

        <div className="paratexte-hero-content">
          <span className="eyebrow">ÉTUDE DU PARATEXTE</span>

          <h1>
            Lire
            <br />
            <em>avant de lire.</em>
          </h1>

          <p>
            Première de couverture, titre, illustration,
            quatrième de couverture et hypothèses de lecture.
          </p>

          <div className="hero-meta">
            <span>LA BOÎTE À MERVEILLES</span>
            <i></i>
            <span>AHMED SEFRIOUI</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span>DÉCOUVRIR</span>
          <div></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="paratexte-intro">
        <div className="intro-number">01 / ENTRÉE DANS L’ŒUVRE</div>

        <div className="intro-text">
          <h2>
            Le seuil
            <br />
            <em>de l’histoire.</em>
          </h2>

          <p>
            Avant même de découvrir le récit, le lecteur rencontre plusieurs
            éléments qui l’orientent : le titre, le nom de l’auteur,
            l’image, l’éditeur et les informations présentes sur les couvertures.
          </p>
        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="paratexte-sections">
        {sections.map((section) => {
          const isOpen = openSection === section.id;

          return (
            <article
              key={section.id}
              className={`paratexte-section ${
                isOpen ? "is-open" : ""
              }`}
            >
              <button
                className="paratexte-trigger"
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

              <div className="paratexte-content">
                <div className="paratexte-content-inner">
                  {section.content}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* FINAL SUMMARY */}
      <section className="paratexte-final">
        <div className="final-label">EN RÉSUMÉ</div>

        <h2>
          Le paratexte nous donne
          <br />
          <em>les premières clés de lecture.</em>
        </h2>

        <div className="final-flow">
          <div>
            <span>01</span>
            <strong>Observer</strong>
            <small>La couverture</small>
          </div>

          <i></i>

          <div>
            <span>02</span>
            <strong>Analyser</strong>
            <small>Les éléments</small>
          </div>

          <i></i>

          <div>
            <span>03</span>
            <strong>Imaginer</strong>
            <small>Des hypothèses</small>
          </div>

          <i></i>

          <div>
            <span>04</span>
            <strong>Lire</strong>
            <small>L’œuvre</small>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="paratexte-navigation">
        <Link href="/resume" className="nav-card">
          <span>←</span>

          <div>
            <small>RETOUR</small>
            <strong>Résumé</strong>
          </div>
        </Link>

        <Link href="/fiche-lecture" className="nav-card nav-card-right">
          <div>
            <small>SUIVANT</small>
            <strong>Fiche de lecture</strong>
          </div>

          <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="paratexte-footer">
        <div className="footer-mark">L.B.M</div>
        <p>Étude de La Boîte à Merveilles</p>
      </footer>

    </main>
  );
}