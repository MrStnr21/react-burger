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
import {
  openIngredientInfo,
  closeIngredientInfo,
} from "../../services/actions/ingredient-details";

export function BurgerIngredients() {
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.ingredients);
  const { showedIngredient } = useSelector((store) => store.IngredientDetails);

  const openPopup = (ingredient) => {
    dispatch(openIngredientInfo(ingredient));
  };

  const closePopup = () => {
    dispatch(closeIngredientInfo());
  };

  const refBuns = React.useRef();
  const refSauces = React.useRef();
  const refMain = React.useRef();

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
      // no default
    }
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
            {buns.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => openPopup(item)}
              >
                <img src={item.image} alt={item.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {item.name}
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
            {sauces.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => openPopup(item)}
              >
                <img src={item.image} alt={item.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {item.name}
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
            {main.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => openPopup(item)}
              >
                <img src={item.image} alt={item.name} />
                <div className={`${stylesIngredients.price}`}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`${stylesIngredients.name} text text_type_main-default`}
                >
                  {item.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showedIngredient && (
        <Modal setOpenModal={closePopup}>
          <IngredientDetails data={showedIngredient} />
        </Modal>
      )}
    </section>
  );
}
