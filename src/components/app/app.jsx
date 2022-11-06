import React from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { baseUrl } from "../utils/api";

export default function App() {
  const [dataApi, setDataApi] = React.useState({
    hasError: false,
    ingredients: [],
  });

  const getDataApi = () => {
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataApi({ ...dataApi, ingredients: data.data });
      })
      .catch((err) => {
        setDataApi({ ...dataApi, hasError: true });
        return console.log(`Ошибка ${err}, запрос не выполнен`);
      });
  };

  React.useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      {dataApi.ingredients && !dataApi.hasError && (
        <main className={`${stylesApp.main}`}>
          <BurgerIngredients data={dataApi.ingredients} />
          <BurgerConstructor data={dataApi.ingredients} />
        </main>
      )}
    </div>
  );
}
