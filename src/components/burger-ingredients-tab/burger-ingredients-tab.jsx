import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesTab from './burger-ingredients-tab.module.css';

export default function TabBurgerIngredients() {
  const [current, setCurrent] = React.useState("one");

  return (
    <div className={`${stylesTab.tab}`}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}
