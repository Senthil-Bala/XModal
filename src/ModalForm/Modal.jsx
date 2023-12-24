import React, { useState } from 'react';
import FormOpen from './FormOpen';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleSubmitForm = (formData) => {
    // Perform form submission logic here using formData
    // After successful submission:
    setIsOpen(false); // Close modal
  };

  return (
    <div className="modal">
      <h1>User Details Form</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal-content">
          <FormOpen onSubmit={handleSubmitForm} />
        </div>
      )}
    </div>
  );
}

export default Modal;
