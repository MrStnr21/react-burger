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

export function BurgerConstructor() {
  const [openModal, setModal] = React.useState(false);
  const dataApi = React.useContext(BurgerContext);
  const [totalSum, setTotalSum] = React.useState();

  const handleClick = () => {
    setModal(true);
  };

  React.useEffect(() => {
    let totalSum = 0;
    dataApi.map((item) => (totalSum += item.price));
    setTotalSum(totalSum);
  }, [dataApi, setTotalSum]);

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
            {dataApi
              .filter((item) => {
                if (item.type !== "bun" && item.type !== "sauce") {
                  return item;
                }
              })
              .map((item) => (
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
          <p className="text text_type_digits-medium">{totalSum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={handleClick}
        >
          Оформить заказ
        </Button>
      </div>
      {openModal && (
        <Modal setOpenModal={setModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}
