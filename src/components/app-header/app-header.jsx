import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Typography,
  Box,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="menu">
          <ul>
            <li>
              <BurgerIcon type="primary" />
              <p>Конструктор</p>
            </li>
            <li>
              <ListIcon type="primary" />
              <p>Лента заказов</p>
            </li>
          </ul>
        </div>
        <Logo />
        <div className="login">
          <ProfileIcon type="primary" />
          <p>Личный кабинет</p>
        </div>
      </header>
    );
  }
}
