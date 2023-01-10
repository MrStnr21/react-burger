import stylesModal from "./modal-overlay.module.css";

import PropTypes from "prop-types";

function ModalOverlay({ closeByOverlay }) {
  return (
    <div className={`${stylesModal.container}`} onClick={closeByOverlay} />
  );
}

ModalOverlay.propTypes = {
  closeByOverlay: PropTypes.func.isRequired,
};

export { ModalOverlay };
