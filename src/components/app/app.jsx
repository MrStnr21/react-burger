import React from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { dataBurgers } from "../utils/data";

export default function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      <main className={`${stylesApp.main}`}>
        <BurgerIngredients data={dataBurgers} />
        <BurgerConstructor data={dataBurgers}/>
      </main>
    </div>
  );
}
