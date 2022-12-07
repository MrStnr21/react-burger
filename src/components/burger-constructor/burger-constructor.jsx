import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import stylesConsctructor from "./burger-constructor.module.css";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { ConstructorItem } from "../constructor-item/constructor-item";
import { OrderDetails } from "../order-details/order-details";

import { makeOrder, closeOrder } from "../../services/actions/order";
import {
  removeIngredient,
  addIngredient,
  resetConstructor,
} from "../../services/actions/burger-constructor";

export function BurgerConstructor() {
  const dispatch = useDispatch();
  const { selectedIngredient, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );
  const { isOrderDetailsOpened } = useSelector((store) => store.order);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
  });

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
    dispatch(resetConstructor());
  };

  const counterPrice = useMemo(() => {
    const bunPrice = selectedBun ? selectedBun.info.price * 2 : 0;
    const totalPrice = selectedIngredient.reduce(
      (sum, ingredient) => (sum += ingredient.info.price),
      bunPrice
    );
    return totalPrice;
  }, [selectedIngredient, selectedBun]);

  const handleRemoveIngredient = (ingredient) => {
    dispatch(removeIngredient(ingredient));
  };

  const renderIngredients = useMemo(
    () =>
      selectedIngredient.map((ingredient, index) => (
        <ConstructorItem
          ingredient={ingredient}
          key={ingredient.id}
          index={index}
          handleRemoveIngredient={handleRemoveIngredient}
        />
      )),
    // eslint-disable-next-line
    [selectedIngredient]
  );

  return (
    <section
      className={`${stylesConsctructor.section} ${
        isHover ? stylesConsctructor.dropHover : null
      }`}
      ref={dropTarget}
    >
      <div className={`${stylesConsctructor.items}`}>
        <ul className={`${stylesConsctructor.list}`}>
          {selectedBun ? (
            <li
              className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
            >
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedBun.info.name} (верх)`}
                price={selectedBun.info.price}
                thumbnail={selectedBun.info.image_mobile}
              />
            </li>
          ) : (
            <h2 className={`${stylesConsctructor.choseIngredient}`}>
              Выберите{" "}
              <span
                className={`${stylesConsctructor.choseIngredientFlickerOne}`}
              >
                Булку
              </span>
            </h2>
          )}

          {selectedIngredient.length ? (
            <ul
              className={`${stylesConsctructor.list} ${stylesConsctructor.topping}`}
            >
              {renderIngredients}
            </ul>
          ) : (
            <h2 className={`${stylesConsctructor.choseIngredient}`}>
              Выберите{" "}
              <span
                className={`${stylesConsctructor.choseIngredientFlickerTwo}`}
              >
                Начинку
              </span>
            </h2>
          )}

          {selectedBun ? (
            <li
              className={`${stylesConsctructor.type} ${stylesConsctructor.bun}`}
            >
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${selectedBun.info.name} (низ)`}
                price={selectedBun.info.price}
                thumbnail={selectedBun.info.image_mobile}
              />
            </li>
          ) : null}
        </ul>
      </div>
      <div className={`${stylesConsctructor.total}`}>
        <div className={`${stylesConsctructor.price}`}>
          <p className="text text_type_digits-medium">{counterPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          disabled={!selectedIngredient.length || !selectedBun}
          onClick={makeSomeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOrderDetailsOpened && (
        <Modal closePopup={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
