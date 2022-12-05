import React, { useEffect } from "react";
import stylesApp from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function App() {
  const dispatch = useDispatch();
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={`${stylesApp.App}`}>
      <AppHeader />
      {!ingredientsRequest && !ingredientsFailed && (
        <main className={`${stylesApp.main}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            {/* <BurgerConstructor /> */}
          </DndProvider>
        </main>
      )}
    </div>
  );
}
