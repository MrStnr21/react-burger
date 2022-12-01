import React from "react";
import stylesConsctructor from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { BurgerContext } from "../../services/burger-context";
import { makeOrderApi } from "../utils/api";

export function BurgerConstructor() {
  const { ingredients } = React.useContext(BurgerContext);
  const [openModal, setOpenModal] = React.useState(false);
  const [finalSum, setFinalSum] = React.useState(0);
  const [orderNum, setOrderNum] = React.useState();

  const buns = React.useMemo(
    () => ingredients.find((item) => item.type === "bun"),
    [ingredients]
  );

  const otherIngs = React.useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );

  React.useEffect(() => {
    const counterPrice = otherIngs.reduce(
      (sum, ingredient) => (sum += ingredient.price),
      0
    );
    const price = counterPrice + buns.price * 2;
    setFinalSum(price);
  }, [buns, otherIngs]);

  const handleClickModal = () => {
    setOpenModal(true);
  };

  const handleClickOrder = () => {
    makeOrderApi([
      buns._id,
      ...otherIngs.map((ingredient) => ingredient._id),
      buns._id,
    ])
      .then((data) => {
        if (data.success) {
          setOrderNum(data);
          handleClickModal(true);
        } else {
          return Promise.reject(data);
        }
      })
      .catch((err) => console.log(`Ошибка ${err}, запрос не выполнен`));
  };

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
              text={`${buns.name} (верх)`}
              price={buns.price}
              thumbnail={buns.image_mobile}
            />
          </li>
          <ul
            className={`${stylesConsctructor.list} ${stylesConsctructor.topping}`}
          >
            {otherIngs.map((item, index) => (
              <li className={`${stylesConsctructor.type}`} key={index}>
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
              text={`${buns.name} (низ)`}
              price={buns.price}
              thumbnail={buns.image_mobile}
            />
          </li>
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
          onClick={handleClickOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <OrderDetails orderNum={orderNum.order.number} />
        </Modal>
      )}
    </section>
  );
}
