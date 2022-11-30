import StylesIngredientDetails from "./ingredient-details.module.css";
import { BurgerPropTypes } from "../utils/PropTypes";

export function IngredientDetails({ data }) {
  return (
    <>
      <p
        className={`${StylesIngredientDetails.title} text text_type_main-large`}
      >
        Детали ингредиента
      </p>
      <img
        className={`${StylesIngredientDetails.image}`}
        src={data.image_large}
        alt={data.name}
      />
      <p
        className={`${StylesIngredientDetails.name} text text_type_main-medium`}
      >
        {data.name}
      </p>
      <ul className={`${StylesIngredientDetails.energy_value}`}>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  data: BurgerPropTypes.isRequired,
};
