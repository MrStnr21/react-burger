import React from "react";
import stylesIngredients from "./burger-ingredients.module.css";
import {
  Counter,
  Icons,
  Tab,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");



  return (
    <section className={`${stylesIngredients.section}`}>
      <h2 className={`${stylesIngredients.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <div className={`${stylesIngredients.tab}`} style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Three
        </Tab>
      </div>
      <div className={`${stylesIngredients.container}`}>
        <div>
          <h2 className={`text text_type_main-medium`}>булки</h2>
          <ul className={`${stylesIngredients.ingredients}`}>
            <li>
              <img src="" alt="" />
              <p></p>
              <p></p>
              <Counter count={1} size="small" />
            </li>
          </ul>
        </div>
        <div>
          <h2 className={`text text_type_main-medium`}>соусы</h2>
          <ul className={`${stylesIngredients.ingredients}`}></ul>
        </div>
        <div>
          <h2 className={`text text_type_main-medium`}>начинки</h2>
          <ul className={`${stylesIngredients.ingredients}`}></ul>
        </div>
      </div>
    </section>
  );
}
