import { useEffect } from "react";
import ReactDOM from "react-dom";

import stylesModal from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

import PropTypes from "prop-types";

function Modal({ closePopup, children }) {
  useEffect(() => {
    const closelByEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", closelByEscape);

    return () => window.removeEventListener("keydown", closelByEscape);
    // eslint-disable-next-line
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
  children: PropTypes.element.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export { Modal };
