import React from "react";
import stylesIngredients from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TabBurgerIngredients } from "../burger-ingredients-tab/burger-ingredients-tab";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { BurgerContext } from "../../services/burger-context";

export function BurgerIngredients() {
  const [openModal, setModal] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();
  const { ingredients } = React.useContext(BurgerContext);

  const handleClickModal = (event) => {
    setModal(true);
    setIngredient(event);
  };

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

  return (
    <section className={`${stylesIngredients.section}`}>
      <h2 className={`${stylesIngredients.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <TabBurgerIngredients />
      <div className={`${stylesIngredients.container}`}>
        <div>
          <h2 className={`text text_type_main-medium`}>Булки</h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {buns.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => handleClickModal(item)}
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
          <h2 className={`text text_type_main-medium`}>Соусы</h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {sauces.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => handleClickModal(item)}
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
          <h2 className={`text text_type_main-medium`}>Начинки</h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            {main.map((item) => (
              <li
                className={`${stylesIngredients.item}`}
                key={item._id}
                onClick={(event) => handleClickModal(item)}
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
      {openModal && ingredient && (
        <Modal setOpenModal={setModal}>
          <IngredientDetails data={ingredient} />
        </Modal>
      )}
    </section>
  );
}
