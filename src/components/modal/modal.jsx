import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import stylesModal from "./modal.module.css";
import PropTypes from "prop-types";

export function Modal({ closePopup, children }) {
  React.useEffect(() => {
    const closelByEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", closelByEscape);

    return () => window.removeEventListener("keydown", closelByEscape);
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeByOverlay={closePopup} />
      <div className={`${stylesModal.container}`}>
        <button className={`${stylesModal.cross}`} onClick={closePopup}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
Modal.propTypes = {
  children: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired,
};
