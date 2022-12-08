import { useSelector } from "react-redux";

import stylesOrderDetails from "./order-details.module.css";

import logoDone from "../../images/done.svg";

export function OrderDetails() {
  const { orderNumber } = useSelector((store) => store.order);

  return (
    <>
      <p className={`${stylesOrderDetails.id} text text_type_digits-large`}>
        {orderNumber}
      </p>
      <p
        className={`${stylesOrderDetails.order_id} text text_type_main-medium`}
      >
        идентификатор заказа
      </p>
      <img
        className={`${stylesOrderDetails.image}`}
        src={logoDone}
        alt="done"
      />
      <p className={`${stylesOrderDetails.status} text text_type_main-default`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${stylesOrderDetails.place} text text_type_main-default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
