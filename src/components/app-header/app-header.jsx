import React from "react";
import stylesAppHeader from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function AppHeader() {
  return (
    <header className={`${stylesAppHeader.header}`}>
      <div className={`${stylesAppHeader.container}`}>
        <nav className={`${stylesAppHeader.navigation}`}>
          <ul className={`${stylesAppHeader.menu}`}>
            <li>
              <a className={`${stylesAppHeader.link}`}>
                <BurgerIcon type="primary" />
                <p className={`text text_type_main-default`}>Конструктор</p>
              </a>
            </li>
            <li>
              <a className={`${stylesAppHeader.link}`}>
                <ListIcon type="secondary" />
                <p
                  className={`text text_type_main-default text_color_inactive`}
                >
                  Лента заказов
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={`${stylesAppHeader.login}`}>
          <a className={`${stylesAppHeader.link}`}>
            <ProfileIcon type="secondary" />
            <p className={`text text_type_main-default text_color_inactive`}>
              Личный кабинет
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
