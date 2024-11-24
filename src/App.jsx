import { useState, useEffect } from "react";
import cocktails from "./data/cocktails.json";
import questions from "./data/questions.json";
import Question from "./components/Question";
import ResultSection from "./components/ResultSection";
import "./styles/App.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);
  const [isAdult, setIsAdult] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified === "true") {
      setIsAdult(true);
    }
  }, []);

  const filterCocktails = (filter) => {
    const newFilters = { ...selectedFilters, ...filter };
    setSelectedFilters(newFilters);

    const filtered = cocktails.filter((cocktail) => {
      let isMatch = true;

      if (newFilters.alcohol && cocktail.alcohol !== newFilters.alcohol) {
        isMatch = false;
      }
      if (newFilters.taste && cocktail.taste !== newFilters.taste) {
        isMatch = false;
      }
      if (newFilters.type && cocktail.type !== newFilters.type) {
        isMatch = false;
      }
      return isMatch;
    });

    setFilteredCocktails(filtered);
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetSearch = () => {
    setCurrentQuestion(0);
    setSelectedFilters({});
    setFilteredCocktails(cocktails);
  };

  const handleConfirmAccess = () => {
    setIsAdult(true);
    localStorage.setItem("ageVerified", "true");
    setIsAdult(true);
  };

  const handleDenyAccess = () => {
    window.location.href = "https://www.youtube.com/watch?v=T7seDQ-rPxk";
  };

  return (
    <div className="cocktail-finder-container">
      {!isAdult && (
        <div className="age-verification-overlay">
          <div className="age-verification-box">
            <h2 className="age-verification-title">Vérification d&apos;âge</h2>
            <p className="age-verification-text">
              L&apos;accès à ce site est destiné aux personnes majeures.
            </p>
            <div className="verification-buttons">
              <button onClick={handleConfirmAccess} className="confirm-button">
                Je suis majeur(e)
              </button>
              <button onClick={handleDenyAccess} className="deny-button">
                Je ne suis pas majeur(e)
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="main-title">
        Mixology Mate vous aide à trouver le cocktail parfait !
      </h1>

      {currentQuestion < questions.length ? (
        <div className="question-container">
          <Question
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            filterCocktails={filterCocktails}
          />
        </div>
      ) : (
        <ResultSection
          cocktails={filteredCocktails}
          resetSearch={resetSearch}
        />
      )}

      <div className="footer-message">
        <p>
          L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer
          avec modération.
        </p>
        <p>
          Développé par{" "}
          <a
            href="https://www.linkedin.com/in/yannduhamel/"
            target="_blank"
            className="footer-link"
          >
            Yann Duhamel
          </a>
        </p>
      </div>
    </div>
  );
}
