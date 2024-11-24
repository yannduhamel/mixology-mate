import CocktailList from "./CocktailList";
import "../styles/ResultSection.css";
import PropTypes from "prop-types";

export default function ResultSection({ cocktails, resetSearch }) {
  return (
    <div className="results-section">
      <h2 className="results-title">
        Résultats ({cocktails.length}{" "}
        {cocktails.length < 2 ? "cocktail" : "cocktails"})
      </h2>
      {cocktails.length > 0 ? (
        <CocktailList cocktails={cocktails} />
      ) : (
        <p className="no-results">
          Aucun cocktail ne correspond à vos critères.
        </p>
      )}
      <button onClick={resetSearch} className="reset-button">
        Nouvelle recherche
      </button>
    </div>
  );
}

ResultSection.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      alcohol: PropTypes.string.isRequired,
      taste: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  resetSearch: PropTypes.func.isRequired,
};
