import React from "react";
import stylesModal from "./modal-overlay.module.css";

export default function ModalOverlay({ closeModal }) {
  return (
    <div
      className={`${stylesModal.container}`}
      onClick={() => closeModal(false)}
    ></div>
  );
}
