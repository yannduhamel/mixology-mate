import CocktailDetail from "./CocktailDetail";
import "../styles/CocktailList.css";
import PropTypes from "prop-types";

export default function CocktailList({ cocktails }) {
  return (
    <ul className="cocktail-list">
      {cocktails.map((c) => (
        <CocktailDetail key={c.id} cocktail={c} />
      ))}
    </ul>
  );
}

CocktailList.propTypes = {
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
};
