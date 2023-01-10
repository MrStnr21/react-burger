import stylesApp from "./app.module.css";

import { ConstructorPage, ErrorPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={`${stylesApp.App}`}>
      <Routes>
        <Route path="/" exact={true} element={<ConstructorPage />} />
        <Route path="/error404" exact={true} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export { App };
