import "../styles/CocktailDetail.css";
import PropTypes from "prop-types";

export default function CocktailDetail({ cocktail }) {
  return (
    <li className="cocktail-item">
      <h3 className="cocktail-name">{cocktail.name}</h3>
      <p className="cocktail-element">Base : {cocktail.alcohol}</p>
      <p className="cocktail-element">Goût : {cocktail.taste}</p>
      <p className="cocktail-element">Type : {cocktail.type}</p>
      <p className="cocktail-element">
        Ingrédients : {cocktail.ingredients.join(", ")}
      </p>
      <a href={cocktail.link} target="_blank" className="cocktail-link">
        Découvrez la recette
      </a>
    </li>
  );
}

CocktailDetail.propTypes = {
  cocktail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    alcohol: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
