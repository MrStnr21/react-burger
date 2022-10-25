import React from "react";
import stylesIngredients from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TabBurgerIngredients from "../burger-ingredients-tab/burger-ingredients-tab";

export default function BurgerIngredients({ data }) {
  return (
    <section className={`${stylesIngredients.section}`}>
      <h2 className={`${stylesIngredients.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <TabBurgerIngredients />
      <div className={`${stylesIngredients.container}`}>
        <div>
          <h2 className={`text text_type_main-medium`}>булки</h2>
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
                  <Counter count={1} size="default" />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className={`text text_type_main-medium`}>соусы</h2>
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
                  <Counter count={1} size="default" />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className={`text text_type_main-medium`}>начинки</h2>
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
                  <Counter count={1} size="default" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
