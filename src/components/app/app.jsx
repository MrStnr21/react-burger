import React from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

export default function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      <main>
        <BurgerIngredients />
      </main>
    </div>
  );
}
