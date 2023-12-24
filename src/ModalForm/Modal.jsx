import React, { useState, useRef, useEffect } from 'react';
import FormOpen from './FormOpen';
import "./Modal.css"

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="modal">
      <h1>User Details Form</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal-content" ref={modalRef}>
          <FormOpen />
        </div>
      )}
    </div>
  );
}

export default Modal;
