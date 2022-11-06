import React from "react";
import stylesModal from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ closeByOverlay }) {
  return (
    <div
      className={`${stylesModal.container}`}
      onClick={() => closeByOverlay(false)}
    ></div>
  );
}

ModalOverlay.propTypes = {
  closeByOverlay: PropTypes.func.isRequired,
};
