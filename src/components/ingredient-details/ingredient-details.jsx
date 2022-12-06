import StylesIngredientDetails from "./ingredient-details.module.css";

import { BurgerPropTypes } from "../utils/PropTypes";

export function IngredientDetails({ ingredient }) {
  return (
    <>
      <p
        className={`${StylesIngredientDetails.title} text text_type_main-large`}
      >
        Детали ингредиента
      </p>
      <img
        className={`${StylesIngredientDetails.image}`}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <p
        className={`${StylesIngredientDetails.name} text text_type_main-medium`}
      >
        {ingredient.name}
      </p>
      <ul className={`${StylesIngredientDetails.energy_value}`}>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  ingredient: BurgerPropTypes.isRequired,
};
