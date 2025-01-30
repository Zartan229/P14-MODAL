(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('modalmaxoc/dist/style.module.css'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['modalmaxoc/dist/style.module.css', 'prop-types', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ModalMaxOC = factory(global.classes, global.PropTypes, global.React));
})(this, (function (classes, PropTypes, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function Modal(_ref) {
    var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      modalContent = _ref.modalContent,
      isActive = _ref.isActive;
    // fermer la modal en appelant onClose
    var close = function close() {
      if (onClose) {
        onClose();
      }
    };
    React.useEffect(function () {
      var escape = function escape(event) {
        if (event.key === "Escape") {
          close(); // Ferme la modal si la touche Escape est presser
        }
      };
      // Ecouteur d'événements quand la modal est ouverte
      if (isOpen) {
        document.addEventListener("keydown", escape);
      }

      // Suprime l'écouteur d'événements à la fermeture de la modal
      return function () {
        document.removeEventListener("keydown", escape);
      };
    }, [isOpen]);
    //Ferme les autres modal
    React.useEffect(function () {
      if (isActive && isOpen) {
        var modals = document.querySelectorAll(".".concat(classes__default["default"].modal));
        modals.forEach(function (modal) {
          if (modal !== isActive && modal.classList.contains(classes__default["default"].open)) {
            modal.classList.remove(classes__default["default"].open);
          }
        });
      }
    }, [isOpen, isActive]);
    return isOpen && /*#__PURE__*/React__default["default"].createElement("div", {
      className: classes__default["default"].blocker
    }, " ", /*#__PURE__*/React__default["default"].createElement("div", {
      className: classes__default["default"].modal
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: "#",
      className: classes__default["default"].closeModal,
      onClick: function onClick(e) {
        e.preventDefault();
        close();
      }
    }, "Fermer"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: classes__default["default"].closeModal
    }, modalContent)));
  }
  Modal.propTypes = {
    isOpen: PropTypes__default["default"].bool.isRequired,
    //  // Est-ce que la modal est afficher ? Bool requie
    onClose: PropTypes__default["default"].func.isRequired,
    // Fermeture de la modale le handle. Function requie
    modalContent: PropTypes__default["default"].string.isRequired,
    // Contenu de la modal. string requie
    isActive: PropTypes__default["default"].bool
  };

  return Modal;

}));
