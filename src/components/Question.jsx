import "../styles/Question.css";
import PropTypes from "prop-types";

export default function Question({
  question,
  currentQuestion,
  filterCocktails,
}) {
  return (
    <div className="question-step">
      <h2 className="question-title">{question.question}</h2>
      <div className="answer-grid">
        {question.answers.map((a, index) => (
          <button
            key={index}
            onClick={() => {
              if (currentQuestion === 0) {
                filterCocktails({ alcohol: a });
              } else if (currentQuestion === 1) {
                filterCocktails({ taste: a });
              } else if (currentQuestion === 2) {
                filterCocktails({ type: a });
              }
            }}
            className="answer-button"
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string),
  currentQuestion: PropTypes.number.isRequired,
  filterCocktails: PropTypes.func.isRequired,
};
