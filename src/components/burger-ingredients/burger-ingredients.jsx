import React, { useState, useEffect, useRef, useMemo } from "react";
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

  const [startScroll, setStartScroll] = useState();

  useEffect(() => {
    if (refTab) {
      setStartScroll(refTab.current.getBoundingClientRect().bottom);
    }
  }, [startScroll]);

  const refTab = useRef();
  const refBuns = useRef();
  const refSauces = useRef();
  const refMain = useRef();

  const [currentIndexTab, setCurrentIndexTab] = useState(0);

  const buns = useMemo(
    () => ingredients.filter((data) => data.type === "bun"),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((data) => data.type === "sauce"),
    [ingredients]
  );
  const main = useMemo(
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

  const handleTabScroll = () => {
    const buns = Math.abs(
      startScroll - refBuns.current.getBoundingClientRect().top
    );
    const sauces = Math.abs(
      startScroll - refSauces.current.getBoundingClientRect().top
    );
    const main = Math.abs(
      startScroll - refMain.current.getBoundingClientRect().top
    );

    const arr = [buns, sauces, main];

    const activeTab = Math.min(...arr);
    const index = arr.findIndex((el) => el === activeTab);
    setCurrentIndexTab(index);
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
      <TabBurgerIngredients
        refTab={refTab}
        onClickTab={handleClickTab}
        currentIndexTab={currentIndexTab}
      />
      <div
        onScroll={handleTabScroll}
        className={`${stylesIngredients.container}`}
      >
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
