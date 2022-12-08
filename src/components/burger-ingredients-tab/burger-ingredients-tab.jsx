import { useState, useEffect } from "react";

import stylesTab from "./burger-ingredients-tab.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { TabsIngredients } from "../utils/data";

import PropTypes from "prop-types";

export function TabBurgerIngredients(props) {
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (props.currentIndexTab) setCurrent(0);
  }, [props.currentIndexTab]);

  const onClickHandlerTab = (value) => {
    props.onClickTab(value);
    setCurrent(value);
  };

  return (
    <div ref={props.refTab} className={`${stylesTab.tab}`}>
      <Tab
        value="bun"
        active={current === TabsIngredients.BUN || props.currentIndexTab === 0}
        onClick={onClickHandlerTab}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={
          current === TabsIngredients.SAUCE || props.currentIndexTab === 1
        }
        onClick={onClickHandlerTab}
      >
        Соусы
      </Tab>  
      <Tab
        value="main"
        active={current === TabsIngredients.MAIN || props.currentIndexTab === 2}
        onClick={onClickHandlerTab}
      >
        Начинки
      </Tab>
    </div>
  );
}

TabBurgerIngredients.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  currentIndexTab: PropTypes.number,
  refTab: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
