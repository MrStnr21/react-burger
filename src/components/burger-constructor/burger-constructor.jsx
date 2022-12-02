import React, { useState, useMemo, useEffect } from "react";
import stylesConsctructor from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
// import { makeOrderApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder, closeOrder } from "../../services/actions/order";

export function BurgerConstructor() {
  const dispatch = useDispatch();
  const { selectedIngredient, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );
  const { orderDetailOpen } = useSelector((store) => store.order);

  const [finalSum, setFinalSum] = useState(0);

  const orderListIngredients = useMemo(
    () => ({
      ingredients: [
        selectedBun?.info._id,
        ...selectedIngredient?.map((ingredient) => ingredient.info._id),
        selectedBun?.info._id,
      ],
    }),
    [selectedIngredient, selectedBun]
  );

  const makeSomeOrder = () => {
    dispatch(makeOrder(orderListIngredients));
  };

  const closeOrderDetails = () => {
    dispatch(closeOrder());
  };

  const buns = useMemo(
    () => selectedBun.find((item) => item.type === "bun"),
    [selectedBun]
  );

  const otherIngs = useMemo(
    () => selectedIngredient.filter((item) => item.type !== "bun"),
    [selectedIngredient]
  );

  useEffect(() => {
    const counterPrice = otherIngs.reduce(
      (sum, ingredient) => (sum += ingredient.price),
      0
    );
    const price = counterPrice + buns.price * 2;
    setFinalSum(price);
  }, [buns, otherIngs]);

  return (
    <section className={`${stylesConsctructor.section}`}>
      <div className={`${stylesConsctructor.items}`}>
        <ul className={`${stylesConsctructor.list}`}>
          {selectedBun && (
            <li
              className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
            >
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedBun.name} (верх)`}
                price={selectedBun.price}
                thumbnail={selectedBun.image_mobile}
              />
            </li>
          )}
          <ul
            className={`${stylesConsctructor.list} ${stylesConsctructor.topping}`}
          >
            {selectedIngredient.map((ingredient, index) => (
              <li className={`${stylesConsctructor.type}`} key={index}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image_mobile}
                />
              </li>
            ))}
          </ul>
          {selectedBun && (
            <li
              className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
            >
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${selectedBun.name} (низ)`}
                price={selectedBun.price}
                thumbnail={selectedBun.image_mobile}
              />
            </li>
          )}
        </ul>
      </div>
      <div className={`${stylesConsctructor.total}`}>
        <div className={`${stylesConsctructor.price}`}>
          <p className="text text_type_digits-medium">{finalSum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={makeSomeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {orderDetailOpen && (
        <Modal closePopup={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
