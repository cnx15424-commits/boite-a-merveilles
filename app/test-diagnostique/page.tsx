"use client";

import { useState } from "react";
import Link from "next/link";
import "./test-diagnostique.css";

const questions = [
  {
    question: "Qui est l’auteur de La Boîte à Merveilles ?",
    options: [
      "Tahar Ben Jelloun",
      "Ahmed Sefrioui",
      "Driss Chraïbi",
      "Mouloud Feraoun",
    ],
    answer: 1,
  },
  {
    question: "En quelle année La Boîte à Merveilles a-t-elle été publiée ?",
    options: ["1947", "1952", "1954", "1960"],
    answer: 2,
  },
  {
    question: "Quel est le genre de l’œuvre ?",
    options: [
      "Une pièce de théâtre",
      "Un roman autobiographique",
      "Un conte fantastique",
      "Un poème",
    ],
    answer: 1,
  },
  {
    question: "Comment s’appelle le narrateur ?",
    options: ["Sidi Mohammed", "Abdeslam", "Driss", "Abdallah"],
    answer: 0,
  },
  {
    question: "Quel âge a Sidi Mohammed au début du récit ?",
    options: ["4 ans", "6 ans", "8 ans", "10 ans"],
    answer: 1,
  },
  {
    question: "À quelle personne le récit est-il principalement raconté ?",
    options: [
      "À la première personne",
      "À la deuxième personne",
      "À la troisième personne",
      "À la quatrième personne",
    ],
    answer: 0,
  },
  {
    question: "Où se déroule principalement l’histoire ?",
    options: ["Rabat", "Casablanca", "Fès", "Marrakech"],
    answer: 2,
  },
  {
    question: "Dans quel quartier traditionnel vit Sidi Mohammed ?",
    options: [
      "Dar Chouafa",
      "Dar El Makhzen",
      "Bab Doukkala",
      "Derb Sultan",
    ],
    answer: 0,
  },
  {
    question: "Comment s’appelle la mère de Sidi Mohammed ?",
    options: ["Rahma", "Lalla Aïcha", "Lalla Zoubida", "Zineb"],
    answer: 2,
  },
  {
    question: "Comment s’appelle le père de Sidi Mohammed ?",
    options: ["Abdeslam", "Moulay Larbi", "Le Fqih", "Driss"],
    answer: 0,
  },
  {
    question: "Où Sidi Mohammed apprend-il le Coran ?",
    options: [
      "À l’école française",
      "Au Msid",
      "Au souk",
      "Dans une bibliothèque",
    ],
    answer: 1,
  },
  {
    question: "Quel événement provoque une grande difficulté pour la famille ?",
    options: [
      "La maladie de Sidi Mohammed",
      "Le départ de Zineb",
      "La perte du capital du père",
      "Un incendie",
    ],
    answer: 2,
  },
  {
    question: "Que fait le père après avoir perdu son capital ?",
    options: [
      "Il quitte définitivement Fès",
      "Il part chercher du travail",
      "Il devient professeur",
      "Il vend la maison",
    ],
    answer: 1,
  },
  {
    question: "Quelle est la fonction principale de la boîte à merveilles pour Sidi Mohammed ?",
    options: [
      "Un objet scolaire",
      "Un objet de commerce",
      "Un refuge pour son imagination",
      "Un cadeau de son père",
    ],
    answer: 2,
  },
  {
    question: "Quel thème est particulièrement important dans l’œuvre ?",
    options: [
      "La solitude de l’enfant",
      "La science-fiction",
      "Le voyage spatial",
      "La guerre moderne",
    ],
    answer: 0,
  },
  {
    question: "Quel lieu représente la vie traditionnelle de la médina ?",
    options: ["Les souks", "Un aéroport", "Une gare", "Une usine"],
    answer: 0,
  },
  {
    question: "Quelle est la ville associée à l’enfance de Sidi Mohammed ?",
    options: ["Fès", "Agadir", "Tanger", "Oujda"],
    answer: 0,
  },
  {
    question: "Quel élément permet à Sidi Mohammed de s’évader de la réalité ?",
    options: [
      "La télévision",
      "Son imagination et sa boîte à merveilles",
      "Le sport",
      "Les voyages",
    ],
    answer: 1,
  },
  {
    question: "Comment se termine globalement l’épreuve familiale ?",
    options: [
      "Le père revient",
      "La famille quitte le Maroc",
      "Sidi Mohammed disparaît",
      "La maison est vendue",
    ],
    answer: 0,
  },
  {
    question: "La Boîte à Merveilles appartient à quelle littérature ?",
    options: [
      "La littérature marocaine d’expression française",
      "La littérature anglaise",
      "La littérature américaine",
      "La littérature russe",
    ],
    answer: 0,
  },
];

export default function TestDiagnostique() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (submitted) return;

    setAnswers((previous) => {
      const updated = [...previous];
      updated[questionIndex] = answerIndex;
      return updated;
    });
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  };

  const score = calculateScore();

  const percentage = Math.round((score / questions.length) * 100);

  const getMessage = () => {
    if (score >= 17) {
      return {
        title: "Excellent niveau",
        text: "Tu maîtrises déjà très bien les éléments essentiels de La Boîte à Merveilles.",
      };
    }

    if (score >= 13) {
      return {
        title: "Bon niveau",
        text: "Tu as de bonnes bases. Une petite révision te permettra de consolider tes connaissances.",
      };
    }

    if (score >= 10) {
      return {
        title: "Niveau moyen",
        text: "Tu connais plusieurs éléments de l’œuvre, mais certaines notions importantes doivent encore être révisées.",
      };
    }

    return {
      title: "Révision recommandée",
      text: "Commence par revoir le résumé, le paratexte, les personnages et les thèmes principaux.",
    };
  };

  const resetTest = () => {
    setAnswers([]);
    setSubmitted(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const message = getMessage();

  return (
    <main className="diagnostic-page">
      <div className="diagnostic-noise" />

      <header className="diagnostic-header">
        <Link href="/" className="back-home">
          ← Retour à l’accueil
        </Link>

        <div className="header-center">
          <span>LA BOÎTE À MERVEILLES</span>
          <div className="header-line" />
          <small>TEST DIAGNOSTIQUE</small>
        </div>

        <div className="header-number">
          01 / 20
        </div>
      </header>

      <section className="diagnostic-hero">
        <div className="hero-number">01</div>

        <p className="eyebrow">
          AVANT DE COMMENCER LA RÉVISION
        </p>

        <h1>
          Test
          <br />
          <span>diagnostique</span>
        </h1>

        <p className="hero-description">
          Évalue tes connaissances sur <em>La Boîte à Merveilles</em>{" "}
          avant de commencer ta révision.
        </p>

        <div className="hero-meta">
          <div>
            <span>ŒUVRE</span>
            <strong>La Boîte à Merveilles</strong>
          </div>

          <div>
            <span>QUESTIONS</span>
            <strong>20 QCM</strong>
          </div>

          <div>
            <span>OBJECTIF</span>
            <strong>Évaluer ton niveau</strong>
          </div>
        </div>
      </section>

      {!submitted ? (
        <section className="questions-section">
          <div className="section-intro">
            <span className="section-number">I.</span>

            <div>
              <p className="section-label">LE DIAGNOSTIC</p>

              <h2>
                Teste tes
                <br />
                <em>connaissances.</em>
              </h2>

              <p>
                Choisis une seule réponse pour chaque question.
                Prends ton temps : ce test sert à identifier les
                notions que tu dois encore réviser.
              </p>
            </div>
          </div>

          <div className="progress-wrapper">
            <div className="progress-top">
              <span>PROGRESSION</span>
              <strong>
                {answers.filter((answer) => answer !== undefined).length}
                {" / "}
                {questions.length}
              </strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${
                    (answers.filter(
                      (answer) => answer !== undefined
                    ).length /
                      questions.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="questions-list">
            {questions.map((question, questionIndex) => (
              <article
                className={`question-card ${
                  answers[questionIndex] !== undefined
                    ? "answered"
                    : ""
                }`}
                key={questionIndex}
              >
                <div className="question-top">
                  <span className="question-number">
                    {String(questionIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="question-status">
                    {answers[questionIndex] !== undefined
                      ? "RÉPONDU"
                      : "À RÉPONDRE"}
                  </span>
                </div>

                <h3>{question.question}</h3>

                <div className="options">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      type="button"
                      className={`option ${
                        answers[questionIndex] === optionIndex
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleAnswer(
                          questionIndex,
                          optionIndex
                        )
                      }
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + optionIndex)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      <span className="option-check">
                        {answers[questionIndex] === optionIndex
                          ? "✓"
                          : ""}
                      </span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="submit-area">
            <p>
              {answers.filter(
                (answer) => answer !== undefined
              ).length < questions.length
                ? "Réponds à toutes les questions avant de voir ton résultat."
                : "Toutes les questions ont été répondues."}
            </p>

            <button
              type="button"
              className="submit-button"
              disabled={answers.length < questions.length}
              onClick={() => {
                setSubmitted(true);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <span>Voir mon résultat</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
        </section>
      ) : (
        <section className="result-section">
          <div className="result-number">RÉSULTAT</div>

          <p className="section-label">TON DIAGNOSTIC</p>

          <h2>
            {message.title}
          </h2>

          <div className="score-circle">
            <div>
              <strong>{score}</strong>
              <span>/ {questions.length}</span>
            </div>
          </div>

          <p className="percentage">
            {percentage}% de réussite
          </p>

          <p className="result-text">
            {message.text}
          </p>

          <div className="result-details">
            <div>
              <span>BONNES RÉPONSES</span>
              <strong>{score}</strong>
            </div>

            <div>
              <span>MAUVAISES RÉPONSES</span>
              <strong>{questions.length - score}</strong>
            </div>

            <div>
              <span>TAUX DE RÉUSSITE</span>
              <strong>{percentage}%</strong>
            </div>
          </div>

          <div className="correction">
            <div className="correction-heading">
              <span>02.</span>
              <div>
                <p className="section-label">CORRECTION</p>
                <h3>Vérifie tes réponses.</h3>
              </div>
            </div>

            <div className="correction-list">
              {questions.map((question, index) => {
                const isCorrect =
                  answers[index] === question.answer;

                return (
                  <div
                    className={`correction-item ${
                      isCorrect ? "correct" : "wrong"
                    }`}
                    key={index}
                  >
                    <div className="correction-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="correction-content">
                      <p>{question.question}</p>

                      <span>
                        Ta réponse :{" "}
                        <strong>
                          {question.options[
                            answers[index]
                          ] || "Aucune réponse"}
                        </strong>
                      </span>

                      {!isCorrect && (
                        <span className="correct-answer">
                          Bonne réponse :{" "}
                          <strong>
                            {question.options[question.answer]}
                          </strong>
                        </span>
                      )}
                    </div>

                    <div className="correction-icon">
                      {isCorrect ? "✓" : "×"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="result-actions">
            <button
              type="button"
              className="retry-button"
              onClick={resetTest}
            >
              Refaire le test
            </button>

            <Link
              href="/resume"
              className="revision-button"
            >
              Commencer la révision
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      <footer className="diagnostic-footer">
        <div>
          <strong>LA BOÎTE À MERVEILLES</strong>
          <span>— Ahmed Sefrioui</span>
        </div>

        <Link href="/">Retour à l’accueil ↑</Link>
      </footer>
    </main>
  );
}