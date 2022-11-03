import React from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import { dataBurgers } from "../utils/data";
import { baseUrl } from "../utils/api";

export default function App() {
  const [dataApi, setDataApi] = React.useState({
    ingredients: [],
  });

  const getDataApi = () => {
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataApi({ ingredients: data.data });
      })
      .catch((err) => {
        return console.log(`Ошибка ${err}, запрос не выполнен`);
      });
  };

  React.useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      <main id="modal-root" className={`${stylesApp.main}`}>
        <BurgerIngredients data={dataApi.ingredients} />
        <BurgerConstructor data={dataApi.ingredients} />
      </main>
      <Modal />
    </div>
  );
}
