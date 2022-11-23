import React from "react";
import stylesApp from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerContext } from "../../services/burger-context";
import { getIngredients } from "../utils/api";

export function App() {
  const [ingredients, setIngredients] = React.useState([]);

  const getDataApi = () => {
    getIngredients()
      .then((data) => {
        setIngredients([...data.data]);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, запрос не выполнен`);
      });
  };

  React.useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      {ingredients.length > 0 && (
        <main className={`${stylesApp.main}`}>
          <BurgerContext.Provider value={{ ingredients }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </main>
      )}
    </div>
  );
}
