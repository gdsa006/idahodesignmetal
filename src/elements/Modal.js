import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon from react-icons
import style from './Modal.module.css'; // Import the CSS file for modal styling

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`${style.modal} ${show ? style.displayBlock : style.displayNone}`}>
      <button className={style.closeButton} onClick={handleClose}>
          <FaTimes /> &nbsp;Close
        </button>
      <section className={style.modalMain}>
        {children}
      </section>
    </div>
  );
};

export default Modal;
