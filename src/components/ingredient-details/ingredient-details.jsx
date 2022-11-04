import React from "react";
import logoIngredient from "../../images/meat-01.svg";
import StylesIngredientDetails from "./ingredient-details.module.css";

export default function IngredientDetails() {
  return (
    <>
      <p
        className={`${StylesIngredientDetails.title} text text_type_main-large`}
      >
        Детали ингредиента
      </p>
      <img
        className={`${StylesIngredientDetails.image}`}
        src={logoIngredient}
      />
      <p
        className={`${StylesIngredientDetails.name} text text_type_main-medium`}
      >
        Биокотлета из марсианской Магнолии
      </p>
      <ul className={`${StylesIngredientDetails.energy_value}`}>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            69
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            69
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            69
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            69
          </p>
        </li>
      </ul>
    </>
  );
}
