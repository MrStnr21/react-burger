import React from "react";
import stylesIngredients from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TabBurgerIngredients from "../burger-ingredients-tab/burger-ingredients-tab";
import PropTypes from "prop-types";
import { BurgerPropTypes } from "../utils/PropTypes";

export default function BurgerIngredients({ data }) {
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
            {data
              .filter((item) => {
                if (item.type === "bun") {
                  return item;
                }
              })
              .map((item) => (
                <li className={`${stylesIngredients.item}`} key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className={`${stylesIngredients.price}`}>
                    <p className="text text_type_digits-default">
                      {item.price}
                    </p>
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
            {data
              .filter((item) => {
                if (item.type === "sauce") {
                  return item;
                }
              })
              .map((item) => (
                <li className={`${stylesIngredients.item}`} key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className={`${stylesIngredients.price}`}>
                    <p className="text text_type_digits-default">
                      {item.price}
                    </p>
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
            {data
              .filter((item) => {
                if (item.type === "main") {
                  return item;
                }
              })
              .map((item) => (
                <li className={`${stylesIngredients.item}`} key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className={`${stylesIngredients.price}`}>
                    <p className="text text_type_digits-default">
                      {item.price}
                    </p>
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
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(BurgerPropTypes).isRequired,
};
