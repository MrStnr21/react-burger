import React from "react";
import logoDone from "../../images/done.svg";
import stylesOrderDetails from "./order-details.module.css";

export function OrderDetails(props) {
  return (
    <>
      <p className={`${stylesOrderDetails.id} text text_type_digits-large`}>
        {props.orderNum}
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
