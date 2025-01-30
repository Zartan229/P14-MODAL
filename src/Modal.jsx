import classes from 'modalmaxoc/dist/style.module.css';
import PropTypes from "prop-types";
import React, { useEffect } from "react";


export default function Modal({ isOpen, onClose, modalContent, isActive }) {
  // fermer la modal en appelant onClose
  const close = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const escape = (event) => {
      if (event.key === "Escape") {
        close();// Ferme la modal si la touche Escape est presser
      }
    };
    // Ecouteur d'événements quand la modal est ouverte
    if (isOpen) {
      document.addEventListener("keydown", escape);
    }

    // Suprime l'écouteur d'événements à la fermeture de la modal
    return () => {
      document.removeEventListener("keydown", escape);
    };
  }, [isOpen]); 
  //Ferme les autres modal
  useEffect(() => {
    if (isActive && isOpen) {
      const modals = document.querySelectorAll(`.${classes.modal}`);
      modals.forEach((modal) => {
        if (modal !== isActive && modal.classList.contains(classes.open)) {
          modal.classList.remove(classes.open);
        }
      });
    }
  }, [isOpen, isActive]);
  return (
    isOpen && (
      <div className={classes.blocker}> {/* Bloque de l'arrière plan*/}
        <div className={classes.modal}>{/* Bloque de la modale */}
          <a
            href="#"
            className={classes.closeModal}
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
          >
            Fermer
          </a>
          <div className={classes.closeModal}>{modalContent}</div>{/* Contenu de la modale */}
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, //  // Est-ce que la modal est afficher ? Bool requie
  onClose: PropTypes.func.isRequired, // Fermeture de la modale le handle. Function requie
  modalContent: PropTypes.string.isRequired, // Contenu de la modal. string requie
  isActive: PropTypes.bool,
}