import stylesApp from "./app.module.css";

import { ConstructorPage } from "./pages";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<ConstructorPage />}
        />
      </Routes>
    </div>
  );
}
