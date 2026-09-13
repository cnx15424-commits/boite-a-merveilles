"use client";

import { useState } from "react";
import Link from "next/link";
import "./resume.css";

type Chapter = {
  id: number;
  title: string;
  period: string;
  places: string[];
  characters: string[];
  summary: string;
  events: string[];
};

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapitre 1 — La maison et le narrateur",
    period: "Enfance de Sidi Mohammed",
    places: ["Dar Chouafa", "La maison familiale"],
    characters: ["Sidi Mohammed", "Lalla Zoubida", "Le père"],
    summary:
      "Le narrateur Sidi Mohammed présente son enfance, sa famille et son environnement à Dar Chouafa. Il décrit sa vie quotidienne et son imagination très développée.",
    events: [
      "Présentation du narrateur.",
      "Présentation de sa famille.",
      "Description de Dar Chouafa.",
      "Sidi Mohammed montre son caractère solitaire et imaginatif.",
    ],
  },
  {
    id: 2,
    title: "Chapitre 2 — L'école coranique",
    period: "Début de l'enfance scolaire",
    places: ["Le Msid", "Dar Chouafa"],
    characters: ["Sidi Mohammed", "Le fqih", "Les élèves"],
    summary:
      "Sidi Mohammed fréquente le Msid où il apprend le Coran sous l'autorité du fqih. Il décrit l'ambiance difficile de cette école.",
    events: [
      "Arrivée au Msid.",
      "Description du fqih.",
      "Apprentissage du Coran.",
      "Les difficultés rencontrées par les élèves.",
    ],
  },
  {
    id: 3,
    title: "Chapitre 3 — Les voisins de Dar Chouafa",
    period: "Vie quotidienne dans le quartier",
    places: ["Dar Chouafa", "Le quartier"],
    characters: ["Lalla Aïcha", "Lalla Zoubida", "Rahma", "Zineb"],
    summary:
      "Le narrateur présente davantage les habitants de Dar Chouafa et les relations entre les différentes familles.",
    events: [
      "Présentation des voisins.",
      "Les femmes se rencontrent et discutent.",
      "Description des relations entre les habitants.",
      "Sidi Mohammed observe le monde des adultes.",
    ],
  },
  {
    id: 4,
    title: "Chapitre 4 — La fête et les événements du quartier",
    period: "Période de fêtes",
    places: ["Dar Chouafa", "Le quartier"],
    characters: ["Sidi Mohammed", "Lalla Zoubida", "Les voisins"],
    summary:
      "La vie du quartier est marquée par les fêtes, les visites et les événements familiaux qui permettent au narrateur d'observer la société.",
    events: [
      "Préparatifs de fête.",
      "Visites entre familles.",
      "Discussions des femmes.",
      "Sidi Mohammed découvre davantage le monde extérieur.",
    ],
  },
  {
    id: 5,
    title: "Chapitre 5 — Lalla Aïcha",
    period: "Vie des familles",
    places: ["Dar Chouafa", "Chez Lalla Aïcha"],
    characters: ["Lalla Aïcha", "Lalla Zoubida", "Sidi Mohammed"],
    summary:
      "Lalla Aïcha occupe une place importante dans le récit. Les discussions entre elle et Lalla Zoubida permettent de découvrir les difficultés de la vie familiale.",
    events: [
      "Visite de Lalla Aïcha.",
      "Discussion entre les deux femmes.",
      "Évocation des problèmes familiaux.",
      "Sidi Mohammed observe les conversations.",
    ],
  },
  {
    id: 6,
    title: "Chapitre 6 — Le monde de Sidi Mohammed",
    period: "Enfance et imagination",
    places: ["La maison", "Le Msid", "Le quartier"],
    characters: ["Sidi Mohammed", "Lalla Zoubida", "Le fqih"],
    summary:
      "L'imagination de Sidi Mohammed lui permet de transformer les objets ordinaires en objets merveilleux. Sa boîte à merveilles devient un refuge personnel.",
    events: [
      "Sidi Mohammed utilise son imagination.",
      "La boîte devient un objet important.",
      "Il collectionne différents objets.",
      "Il se réfugie dans son monde imaginaire.",
    ],
  },
  {
    id: 7,
    title: "Chapitre 7 — Les difficultés de la famille",
    period: "Période de difficultés",
    places: ["La maison familiale", "Le quartier"],
    characters: ["Sidi Mohammed", "Le père", "Lalla Zoubida"],
    summary:
      "La famille rencontre des difficultés économiques et sociales. Le narrateur ressent les inquiétudes de ses parents.",
    events: [
      "Difficultés économiques.",
      "Inquiétude de Lalla Zoubida.",
      "Le père cherche des solutions.",
      "Sidi Mohammed ressent l'angoisse familiale.",
    ],
  },
  {
    id: 8,
    title: "Chapitre 8 — Le départ du père",
    period: "Période difficile",
    places: ["Fès", "La maison"],
    characters: ["Le père", "Lalla Zoubida", "Sidi Mohammed"],
    summary:
      "Le père doit partir pour travailler et améliorer la situation financière de la famille. Cette séparation affecte profondément Sidi Mohammed.",
    events: [
      "Le père annonce son départ.",
      "La famille s'inquiète.",
      "Sidi Mohammed ressent la tristesse.",
      "Le père quitte la maison.",
    ],
  },
  {
    id: 9,
    title: "Chapitre 9 — L'absence du père",
    period: "Pendant l'absence du père",
    places: ["Dar Chouafa", "Le quartier"],
    characters: ["Sidi Mohammed", "Lalla Zoubida", "Les voisines"],
    summary:
      "L'absence du père rend la vie familiale plus difficile. Sidi Mohammed se réfugie encore davantage dans son imagination.",
    events: [
      "La famille vit sans le père.",
      "Lalla Zoubida ressent l'inquiétude.",
      "Sidi Mohammed devient plus sensible.",
      "La boîte à merveilles joue un rôle de refuge.",
    ],
  },
  {
    id: 10,
    title: "Chapitre 10 — Les nouvelles",
    period: "Retour progressif à l'espoir",
    places: ["La maison", "Le quartier"],
    characters: ["Sidi Mohammed", "Lalla Zoubida", "Le père"],
    summary:
      "Les nouvelles concernant le père apportent progressivement de l'espoir à la famille. Sidi Mohammed attend avec impatience son retour.",
    events: [
      "La famille reçoit des nouvelles.",
      "Lalla Zoubida retrouve l'espoir.",
      "Sidi Mohammed pense à son père.",
      "L'attente du retour commence.",
    ],
  },
  {
    id: 11,
    title: "Chapitre 11 — Le retour",
    period: "Retour du père",
    places: ["La maison familiale", "Dar Chouafa"],
    characters: ["Le père", "Sidi Mohammed", "Lalla Zoubida"],
    summary:
      "Le retour du père apporte de la joie à toute la famille. Sidi Mohammed retrouve un sentiment de sécurité.",
    events: [
      "Retour du père.",
      "Joie de la famille.",
      "Soulagement de Lalla Zoubida.",
      "Sidi Mohammed retrouve son père.",
    ],
  },
  {
    id: 12,
    title: "Chapitre 12 — La fin et l'espoir",
    period: "Fin du récit",
    places: ["Dar Chouafa", "La maison"],
    characters: ["Sidi Mohammed", "Le père", "Lalla Zoubida"],
    summary:
      "Le récit se termine sur une note d'espoir. Sidi Mohammed continue de trouver dans son imagination et dans sa boîte à merveilles un moyen de comprendre le monde.",
    events: [
      "Retour au calme familial.",
      "Fin des grandes inquiétudes.",
      "Sidi Mohammed retrouve son univers.",
      "La boîte à merveilles reste un symbole important.",
    ],
  },
];

const questions: Question[] = [
  {
    question: "Qui est le narrateur de La Boîte à Merveilles ?",
    options: ["Sidi Mohammed", "Abdallah", "Le fqih", "Driss Chraïbi"],
    answer: 0,
  },
  {
    question: "Qui a écrit La Boîte à Merveilles ?",
    options: ["Ahmed Sefrioui", "Tahar Ben Jelloun", "Molière", "Victor Hugo"],
    answer: 0,
  },
  {
    question: "Quel est le genre de l'œuvre ?",
    options: ["Roman autobiographique", "Poésie", "Théâtre", "Conte fantastique"],
    answer: 0,
  },
  {
    question: "Dans quelle ville se déroule principalement l'histoire ?",
    options: ["Fès", "Rabat", "Casablanca", "Marrakech"],
    answer: 0,
  },
  {
    question: "Comment s'appelle la mère de Sidi Mohammed ?",
    options: ["Lalla Zoubida", "Lalla Aïcha", "Rahma", "Zineb"],
    answer: 0,
  },
  {
    question: "Comment s'appelle le père de Sidi Mohammed ?",
    options: ["Le maâlem Abdeslam", "Abdallah", "Le fqih", "Driss"],
    answer: 0,
  },
  {
    question: "Où habite la famille de Sidi Mohammed ?",
    options: ["Dar Chouafa", "Dar El Beida", "Le palais", "Une ferme"],
    answer: 0,
  },
  {
    question: "Quel objet est très important pour Sidi Mohammed ?",
    options: ["La boîte à merveilles", "Une montre", "Un livre", "Une épée"],
    answer: 0,
  },
  {
    question: "Quel lieu Sidi Mohammed fréquente-t-il pour apprendre le Coran ?",
    options: ["Le Msid", "Le lycée", "La bibliothèque", "Le marché"],
    answer: 0,
  },
  {
    question: "Qui dirige le Msid ?",
    options: ["Le fqih", "Le père", "Abdallah", "Le voisin"],
    answer: 0,
  },

  {
    question: "Quel trait caractérise Sidi Mohammed ?",
    options: ["Il est très imaginatif", "Il est très violent", "Il est sportif", "Il est commerçant"],
    answer: 0,
  },
  {
    question: "Quel rôle joue la boîte à merveilles ?",
    options: ["Un refuge imaginaire", "Un objet de commerce", "Un instrument scolaire", "Un cadeau du fqih"],
    answer: 0,
  },
  {
    question: "Qui est Lalla Aïcha ?",
    options: ["Une proche de la famille", "La maîtresse du Msid", "La sœur de Sidi Mohammed", "Une enseignante"],
    answer: 0,
  },
  {
    question: "Quel est le sentiment dominant de Sidi Mohammed dans plusieurs passages ?",
    options: ["La solitude", "La colère", "La haine", "La jalousie"],
    answer: 0,
  },
  {
    question: "Quel est le principal refuge de l'enfant ?",
    options: ["Son imagination", "Le marché", "La rue", "Le Msid"],
    answer: 0,
  },
  {
    question: "Quelle relation unit Lalla Aïcha et Lalla Zoubida ?",
    options: ["Une relation d'amitié", "Une relation professionnelle", "Une relation scolaire", "Aucune relation"],
    answer: 0,
  },
  {
    question: "Quelle difficulté touche la famille ?",
    options: ["Des difficultés économiques", "Une guerre", "Un voyage touristique", "Un problème scolaire"],
    answer: 0,
  },
  {
    question: "Pourquoi le père quitte-t-il la maison ?",
    options: ["Pour travailler", "Pour étudier", "Pour voyager", "Pour rejoindre le Msid"],
    answer: 0,
  },
  {
    question: "Comment Sidi Mohammed vit-il l'absence de son père ?",
    options: ["Avec inquiétude et tristesse", "Avec indifférence", "Avec colère uniquement", "Avec joie"],
    answer: 0,
  },
  {
    question: "Que permet l'imagination à Sidi Mohammed ?",
    options: [
      "D'échapper momentanément aux difficultés",
      "De devenir riche",
      "De quitter Fès",
      "De devenir enseignant",
    ],
    answer: 0,
  },

  {
    question: "Quel thème est important dans l'œuvre ?",
    options: ["L'enfance", "La science-fiction", "La guerre moderne", "Le sport"],
    answer: 0,
  },
  {
    question: "Quel autre thème est important ?",
    options: ["La famille", "La technologie", "La politique moderne", "L'espace"],
    answer: 0,
  },
  {
    question: "Comment est présenté le monde de l'enfance ?",
    options: ["Comme un monde d'imagination", "Comme un monde uniquement violent", "Comme un monde sans émotions", "Comme un monde futuriste"],
    answer: 0,
  },
  {
    question: "Quel est le rôle des voisins dans le récit ?",
    options: ["Ils permettent de montrer la vie sociale du quartier", "Ils sont tous des ennemis", "Ils sont des enseignants", "Ils sont des voyageurs"],
    answer: 0,
  },
  {
    question: "Quel type de narration domine ?",
    options: ["Récit à la première personne", "Récit à la deuxième personne", "Récit uniquement théâtral", "Récit épistolaire"],
    answer: 0,
  },
  {
    question: "Quel âge environ a Sidi Mohammed dans le récit ?",
    options: ["Un jeune enfant", "Un adulte", "Un vieillard", "Un étudiant universitaire"],
    answer: 0,
  },
  {
    question: "Quel environnement est souvent décrit ?",
    options: ["La médina", "La campagne européenne", "Une ville américaine", "Un village japonais"],
    answer: 0,
  },
  {
    question: "La boîte à merveilles représente principalement :",
    options: ["L'imagination de l'enfant", "La richesse de la famille", "Le travail du père", "L'école"],
    answer: 0,
  },
  {
    question: "Quel sentiment apparaît lorsque le père est absent ?",
    options: ["L'inquiétude", "La fierté", "La victoire", "L'amusement"],
    answer: 0,
  },
  {
    question: "Quelle valeur familiale apparaît souvent ?",
    options: ["La solidarité", "La compétition", "La vengeance", "La rivalité"],
    answer: 0,
  },

  {
    question: "Quel est le rôle de Lalla Zoubida ?",
    options: ["Elle est la mère de Sidi Mohammed", "Elle est son enseignante", "Elle est sa sœur", "Elle est sa voisine inconnue"],
    answer: 0,
  },
  {
    question: "Quel est le rôle du fqih ?",
    options: ["Il enseigne le Coran", "Il vend des objets", "Il est le père", "Il est le voisin"],
    answer: 0,
  },
  {
    question: "Quel lieu symbolise l'éducation traditionnelle ?",
    options: ["Le Msid", "Le marché", "Dar Chouafa", "La maison"],
    answer: 0,
  },
  {
    question: "Que fait souvent Sidi Mohammed lorsqu'il est seul ?",
    options: ["Il rêve et imagine", "Il voyage", "Il travaille", "Il fait du commerce"],
    answer: 0,
  },
  {
    question: "Comment la famille réagit-elle aux difficultés ?",
    options: ["Avec inquiétude mais aussi solidarité", "Avec indifférence", "Avec violence", "Avec enthousiasme"],
    answer: 0,
  },
  {
    question: "Quel est l'un des grands intérêts de l'œuvre ?",
    options: ["Découvrir la vie quotidienne marocaine traditionnelle", "Découvrir la technologie", "Découvrir le futur", "Découvrir la médecine"],
    answer: 0,
  },
  {
    question: "La mémoire joue quel rôle dans le récit ?",
    options: ["Elle permet au narrateur de raconter son enfance", "Elle est absente", "Elle sert uniquement au père", "Elle concerne uniquement le Msid"],
    answer: 0,
  },
  {
    question: "Quel élément donne une dimension autobiographique à l'œuvre ?",
    options: ["Le récit de souvenirs d'enfance", "Une histoire policière", "Un récit fantastique", "Un journal scientifique"],
    answer: 0,
  },
  {
    question: "Quel est le rapport de Sidi Mohammed avec les objets ?",
    options: ["Il leur donne une valeur imaginaire", "Il les vend tous", "Il les détruit", "Il les ignore"],
    answer: 0,
  },
  {
    question: "Pourquoi les descriptions du quartier sont-elles importantes ?",
    options: ["Elles montrent le milieu social du narrateur", "Elles racontent une guerre", "Elles présentent une ville moderne", "Elles expliquent la science"],
    answer: 0,
  },

  {
    question: "Quelle est la principale fonction des personnages secondaires ?",
    options: ["Ils enrichissent le monde social du narrateur", "Ils remplacent le narrateur", "Ils racontent une autre œuvre", "Ils sont tous des enseignants"],
    answer: 0,
  },
  {
    question: "Comment évolue Sidi Mohammed ?",
    options: ["Il observe et comprend progressivement son environnement", "Il devient roi", "Il quitte définitivement sa famille", "Il devient professeur"],
    answer: 0,
  },
  {
    question: "Quelle atmosphère caractérise plusieurs passages ?",
    options: ["Une atmosphère intime et familiale", "Une atmosphère futuriste", "Une atmosphère militaire", "Une atmosphère scientifique"],
    answer: 0,
  },
  {
    question: "Que représente principalement l'enfance dans l'œuvre ?",
    options: ["Une période d'apprentissage et d'imagination", "Une période de guerre", "Une période de voyage", "Une période de travail industriel"],
    answer: 0,
  },
  {
    question: "Quel élément aide Sidi Mohammed à supporter la solitude ?",
    options: ["Sa boîte à merveilles", "Le marché", "Le fqih", "Les voyages"],
    answer: 0,
  },
  {
    question: "Quel aspect de la société marocaine est présenté ?",
    options: ["La vie traditionnelle de la médina", "La vie industrielle moderne", "La vie militaire", "La vie universitaire"],
    answer: 0,
  },
  {
    question: "Quel sentiment accompagne le retour du père ?",
    options: ["Le soulagement et la joie", "La peur", "La colère", "La honte"],
    answer: 0,
  },
  {
    question: "Pourquoi Sidi Mohammed aime-t-il son monde imaginaire ?",
    options: ["Il lui permet de s'évader", "Il lui permet de gagner de l'argent", "Il lui permet de voyager réellement", "Il lui permet d'éviter l'école"],
    answer: 0,
  },
  {
    question: "Quel élément rapproche le lecteur du narrateur ?",
    options: ["Le récit de ses sentiments et souvenirs", "Les dialogues uniquement", "Les descriptions scientifiques", "Les scènes de guerre"],
    answer: 0,
  },
  {
    question: "Quelle idée peut-on retenir de l'œuvre ?",
    options: [
      "L'imagination peut aider l'enfant à comprendre les difficultés de la vie",
      "L'argent résout tous les problèmes",
      "L'école est inutile",
      "La famille n'a aucune importance",
    ],
    answer: 0,
  },
];

export default function ResumePage() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const finishQuiz = () => {
    setShowResult(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const restartQuiz = () => {
    setAnswers([]);
    setShowResult(false);
    setQuizStarted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  const answeredQuestions = answers.filter(
    (answer) => answer !== undefined
  ).length;

  return (
    <main className="resume-page">
      {/* HERO */}
      <section className="resume-hero">
        <div className="hero-grid" />
        <div className="hero-red-glow" />

        <Link href="/" className="home-button">
          <span>←</span> Home
        </Link>

        <div className="hero-content">
          <span className="hero-small">LITTÉRATURE MAROCAINE</span>

          <h1>
            La Boîte à <span>Merveilles</span>
          </h1>

          <p>
            Résumés des chapitres, personnages, lieux, événements et quiz de
            révision.
          </p>

          <a href="#chapitres" className="hero-button">
            Explorer les chapitres
            <span>↓</span>
          </a>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* INTRO */}
      <section className="resume-intro">
        <div className="section-label">01 — RÉSUMÉ</div>

        <h2>
          Explorez <span>l'œuvre</span>
        </h2>

        <p>
          Retrouvez les différents chapitres de <strong>La Boîte à Merveilles</strong>,
          avec les périodes, les lieux, les personnages et les événements
          essentiels.
        </p>
      </section>

      {/* CHAPTERS */}
      <section className="chapters-section" id="chapitres">
        <div className="section-heading">
          <div>
            <span className="section-label">02 — CHAPITRES</span>
            <h2>
              Tous les <span>chapitres</span>
            </h2>
          </div>

          <div className="chapter-count">
            <strong>{chapters.length}</strong>
            <span>CHAPITRES</span>
          </div>
        </div>

        <div className="chapters-grid">
          {chapters.map((chapter) => {
            const isOpen = activeChapter === chapter.id;

            return (
              <article
                className={`chapter-card ${isOpen ? "chapter-open" : ""}`}
                key={chapter.id}
              >
                <button
                  className="chapter-header"
                  onClick={() =>
                    setActiveChapter(isOpen ? null : chapter.id)
                  }
                  aria-expanded={isOpen}
                >
                  <div className="chapter-number">
                    {String(chapter.id).padStart(2, "0")}
                  </div>

                  <div className="chapter-title">
                    <span>CHAPITRE</span>
                    <h3>{chapter.title.replace(/^Chapitre \d+ — /, "")}</h3>
                  </div>

                  <div className="chapter-plus">
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {isOpen && (
                  <div className="chapter-content">
                    <div className="info-grid">
                      <div className="info-box">
                        <span>⏱ PÉRIODE</span>
                        <p>{chapter.period}</p>
                      </div>

                      <div className="info-box">
                        <span>📍 LIEUX</span>
                        <p>{chapter.places.join(" • ")}</p>
                      </div>

                      <div className="info-box">
                        <span>👥 PERSONNAGES</span>
                        <p>{chapter.characters.join(" • ")}</p>
                      </div>
                    </div>

                    <div className="chapter-summary">
                      <span>RÉSUMÉ DU CHAPITRE</span>
                      <p>{chapter.summary}</p>
                    </div>

                    <div className="events-box">
                      <span>ÉVÉNEMENTS IMPORTANTS</span>

                      <ul>
                        {chapter.events.map((event, index) => (
                          <li key={index}>
                            <b>{String(index + 1).padStart(2, "0")}</b>
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <section className="final-summary">
        <div className="final-glow" />

        <div className="section-label">03 — SYNTHÈSE</div>

        <h2>
          Résumé <span>global</span>
        </h2>

        <div className="final-summary-content">
          <p>
            <strong>La Boîte à Merveilles</strong> raconte l'enfance de Sidi
            Mohammed dans la médina de Fès. À travers son regard d'enfant, le
            lecteur découvre sa famille, ses voisins, le Msid, les habitudes
            sociales et les difficultés de la vie quotidienne.
          </p>

          <p>
            Sidi Mohammed est un enfant sensible et très imaginatif. Sa boîte
            à merveilles devient pour lui un espace personnel où il conserve
            des objets auxquels il donne une valeur particulière. Elle
            représente son monde intérieur et lui permet de s'évader de la
            réalité.
          </p>

          <p>
            Les difficultés économiques de la famille, notamment l'absence du
            père, provoquent des moments d'inquiétude. Malgré cela, la famille
            reste un élément essentiel de l'équilibre de l'enfant.
          </p>

          <p>
            L'œuvre présente donc à la fois <strong>l'enfance</strong>,
            <strong> la famille</strong>, <strong>la mémoire</strong>,
            <strong> l'imagination</strong> et la vie traditionnelle de la
            société marocaine.
          </p>
        </div>
      </section>

      {/* QUIZ */}
      <section className="quiz-section" id="quiz">
        <div className="section-label">04 — TEST</div>

        <div className="quiz-title-row">
          <div>
            <h2>
              Test de <span>révision</span>
            </h2>

            <p>
              {questions.length} questions pour tester votre connaissance de
              l'œuvre.
            </p>
          </div>

          <div className="quiz-badge">
            <strong>{questions.length}</strong>
            <span>QUESTIONS</span>
          </div>
        </div>

        {!quizStarted ? (
          <div className="quiz-start">
            <div className="quiz-start-icon">?</div>

            <h3>Êtes-vous prêt ?</h3>

            <p>
              Testez vos connaissances sur les personnages, les événements,
              les lieux et les thèmes de La Boîte à Merveilles.
            </p>

            <button
              className="red-button"
              onClick={() => setQuizStarted(true)}
            >
              Commencer le test
              <span>→</span>
            </button>
          </div>
        ) : (
          <div className="quiz-wrapper">
            <div className="quiz-progress">
              <div>
                <span>
                  Progression : {answeredQuestions}/{questions.length}
                </span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      (answeredQuestions / questions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="questions-list">
              {questions.map((question, questionIndex) => (
                <article className="question-card" key={questionIndex}>
                  <div className="question-number">
                    {String(questionIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="question-main">
                    <h3>{question.question}</h3>

                    <div className="options-grid">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`option-button ${
                            answers[questionIndex] === optionIndex
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            selectAnswer(questionIndex, optionIndex)
                          }
                        >
                          <span>
                            {String.fromCharCode(65 + optionIndex)}
                          </span>

                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!showResult ? (
              <div className="quiz-submit">
                <button
                  className="red-button"
                  onClick={finishQuiz}
                  disabled={answeredQuestions !== questions.length}
                >
                  Terminer le test
                  <span>→</span>
                </button>

                {answeredQuestions !== questions.length && (
                  <p>
                    Répondez à toutes les questions pour afficher votre score.
                  </p>
                )}
              </div>
            ) : (
              <div className="quiz-result">
                <div className="score-circle">
                  <strong>{score}</strong>
                  <span>/ {questions.length}</span>
                </div>

                <div>
                  <span className="result-label">RÉSULTAT FINAL</span>

                  <h3>
                    {score >= 40
                      ? "Excellent travail !"
                      : score >= 25
                      ? "Très bon travail !"
                      : "Continuez à réviser !"}
                  </h3>

                  <p>
                    Vous avez obtenu <strong>{score}</strong> bonnes réponses
                    sur <strong>{questions.length}</strong>.
                  </p>
                </div>

                <button className="outline-button" onClick={restartQuiz}>
                  Recommencer
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="resume-footer">
        <div className="footer-logo">
          <span>CW</span>
          <div>
            <strong>LITTÉRATURE</strong>
            <small>STUDY SPACE</small>
          </div>
        </div>

        <Link href="/" className="footer-home">
          ← Retour à Home
        </Link>

        <p>© 2026 — La Boîte à Merveilles</p>
      </footer>
    </main>
  );
}