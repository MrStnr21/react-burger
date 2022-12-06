import stylesModal from "./modal-overlay.module.css";

import PropTypes from "prop-types";

export function ModalOverlay({ closeByOverlay }) {
  return (
    <div className={`${stylesModal.container}`} onClick={closeByOverlay} />
  );
}

ModalOverlay.propTypes = {
  closeByOverlay: PropTypes.func.isRequired,
};
