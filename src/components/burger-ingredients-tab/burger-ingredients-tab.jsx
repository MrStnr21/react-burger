import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesTab from "./burger-ingredients-tab.module.css";

export function TabBurgerIngredients(props) {
  const [current, setCurrent] = React.useState("buns");

  const onClickHandlerTab = (value) => {
    props.onClickTab(value);
    setCurrent(value);
  };

  return (
    <div className={`${stylesTab.tab}`}>
      <Tab value="buns" active={current === "buns"} onClick={onClickHandlerTab}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={onClickHandlerTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={onClickHandlerTab}>
        Начинки
      </Tab>
    </div>
  );
}
