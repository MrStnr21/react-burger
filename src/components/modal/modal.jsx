import React from "react";
import { ReactDOM } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesModal from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

export default function Modal() {
  return (
    <>
      <ModalOverlay />
      <div className={`${stylesModal.container}`}>
        <button className={`${stylesModal.cross}`}>
          <CloseIcon type="primary" />
        </button>
      </div>
    </>
  );
}
