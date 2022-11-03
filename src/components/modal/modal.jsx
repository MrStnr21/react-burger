import React from "react";
import { ReactDOM } from "react";
import stylesModal from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
