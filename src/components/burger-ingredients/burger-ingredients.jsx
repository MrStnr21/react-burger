import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import stylesIngredients from "./burger-ingredients.module.css";

import { TabBurgerIngredients } from "../burger-ingredients-tab/burger-ingredients-tab";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { IngredientItem } from "../ingredient-item/ingredient-item";

import { TabsIngredients } from "../utils/data";

import { openInfo, closeInfo } from "../../services/actions/ingredient-details";

function BurgerIngredients() {
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
    () => ingredients.filter((data) => data.type === TabsIngredients.BUN),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((data) => data.type === TabsIngredients.SAUCE),
    [ingredients]
  );
  const main = useMemo(
    () => ingredients.filter((data) => data.type === TabsIngredients.MAIN),
    [ingredients]
  );

  const handleClickTab = (value) => {
    switch (value) {
      case TabsIngredients.BUN:
        refBuns.current.scrollIntoView({ behavior: "smooth" });
        break;
      case TabsIngredients.SAUCE:
        refSauces.current.scrollIntoView({ behavior: "smooth" });
        break;
      case TabsIngredients.MAIN:
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
              <IngredientItem
                ingredient={ingredient}
                key={ingredient._id}
                onIngredientClick={() => openPopup(ingredient)}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2 ref={refSauces} className={`text text_type_main-medium`}>
            Соусы
          </h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {sauces.map((ingredient) => (
              <IngredientItem
                ingredient={ingredient}
                key={ingredient._id}
                onIngredientClick={() => openPopup(ingredient)}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2 ref={refMain} className={`text text_type_main-medium`}>
            Начинки
          </h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {main.map((ingredient) => (
              <IngredientItem
                ingredient={ingredient}
                key={ingredient._id}
                onIngredientClick={() => openPopup(ingredient)}
              />
            ))}
          </ul>
        </div>
      </div>
      {showedIngredient && (
        <Modal closePopup={closePopup}>
          <IngredientDetails ingredient={showedIngredient} />
        </Modal>
      )}
    </section>
  );
}

export { BurgerIngredients };
