import React from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { dataBurgers } from "../utils/data";

export default function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      <main>
        <BurgerIngredients data={dataBurgers} />
      </main>
    </div>
  );
}
