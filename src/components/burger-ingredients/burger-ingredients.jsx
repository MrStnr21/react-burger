import React from "react";
import stylesIngredients from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TabBurgerIngredients } from "../burger-ingredients-tab/burger-ingredients-tab";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { openInfo, closeInfo } from "../../services/actions/ingredient-details";

export function BurgerIngredients() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.ingredients);
  const { showedIngredient } = useSelector((store) => store.ingredientDetails);

  const refBuns = React.useRef(null);
  const refSauces = React.useRef(null);
  const refMain = React.useRef(null);

  const buns = React.useMemo(
    () => ingredients.filter((data) => data.type === "bun"),
    [ingredients]
  );

  const sauces = React.useMemo(
    () => ingredients.filter((data) => data.type === "sauce"),
    [ingredients]
  );
  const main = React.useMemo(
    () => ingredients.filter((data) => data.type === "main"),
    [ingredients]
  );

  const handleClickTab = (value) => {
    switch (value) {
      case "buns":
        refBuns.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauces":
        refSauces.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "main":
        refMain.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const openPopup = (ingredient) => {
    dispatch(openInfo(ingredient));
  };

  const closePopup = () => {
    dispatch(closeInfo());
  };

  return (
    <section className={`${stylesIngredients.section}`}>
      <h2 className={`${stylesIngredients.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <TabBurgerIngredients onClickTab={handleClickTab} />
      <div className={`${stylesIngredients.container}`}>
        <div>
          <h2 ref={refBuns} className={`text text_type_main-medium`}>
            Булки
          </h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {buns.map((ingredient) => (
              <li
                className={`${stylesIngredients.item}`}
                key={ingredient._id}
                onClick={() => openPopup(ingredient)}
              >
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">
                    {ingredient.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {ingredient.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 ref={refSauces} className={`text text_type_main-medium`}>
            Соусы
          </h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {sauces.map((ingredient) => (
              <li
                className={`${stylesIngredients.item}`}
                key={ingredient._id}
                onClick={() => openPopup(ingredient)}
              >
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">
                    {ingredient.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {ingredient.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 ref={refMain} className={`text text_type_main-medium`}>
            Начинки
          </h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {main.map((ingredient) => (
              <li
                className={`${stylesIngredients.item}`}
                key={ingredient._id}
                onClick={() => openPopup(ingredient)}
              >
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">
                    {ingredient.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {ingredient.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {Boolean(showedIngredient) && (
        <Modal closePopup={closePopup}>
          <IngredientDetails ingredient={showedIngredient} />
        </Modal>
      )}
    </section>
  );
}
