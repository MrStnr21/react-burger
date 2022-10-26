import React from "react";
import stylesConsctructor from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { BurgerPropTypes } from "../utils/PropTypes";

export default function BurgerConstructor({ data }) {
  return (
    <section className={`${stylesConsctructor.section}`}>
      <div className={`${stylesConsctructor.items}`}>
        <ul className={`${stylesConsctructor.list}`}>
          <li
            className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
          >
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={1255}
              thumbnail={
                "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
              }
            />
          </li>
          <ul
            className={`${stylesConsctructor.list} ${stylesConsctructor.topping}`}
          >
            {data.map((item) => (
              <li className={`${stylesConsctructor.type}`} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                />
              </li>
            ))}
          </ul>
          <li
            className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
          >
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={1255}
              thumbnail={
                "https://code.s3.yandex.net/react/code/bun-02-mobile.png"
              }
            />
          </li>
        </ul>
      </div>
      <div className={`${stylesConsctructor.total}`}>
        <div className={`${stylesConsctructor.price}`}>
          <p className="text text_type_digits-medium">4815162342</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" htmlType="button">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(BurgerPropTypes).isRequired,
};

ConstructorElement.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
