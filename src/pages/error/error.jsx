import stylesError from "./error.module.css";

import { AppHeader } from "../../components/app-header/app-header";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <AppHeader />
      <div className={stylesError.container}>
        <h2 className={`${stylesError.text} ${stylesError.textFlickerOne}`}>
          Ooops...
        </h2>
        <h3 className={stylesError.text}>Page Not Found</h3>
        <h4 className={`${stylesError.text} ${stylesError.textFlickerTwo}`}>
          404
        </h4>
        <NavLink to="/" className={stylesError.link}>
          Вернуться на главную страницу
        </NavLink>
      </div>
    </>
  );
}

export { ErrorPage };
