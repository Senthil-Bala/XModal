import React, { useState } from 'react';
import "./Modal.css"

function FormOpen({handleCloseModal}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handlePhoneBlur = (e) => {
    const phoneNumber = e.target.value;
    if (phoneNumber.length < 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
    }
  };

  const handleDateChange = (e) => {
    const today = new Date();
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    setDob(formattedDate);
    if (selectedDate > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      phone,
      dob,
    };
    // Handle form submission internally (example: validation)
    // You can also pass this formData to the parent component using `onSubmit(formData)`
    console.log('Form Data:', formData);

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setDob('');
    handleCloseModal();
  };

  return (
    <div className="modal-content">
      <form onSubmit={handleSubmit}>
        <h1>Fill Details</h1>
        <label>
          <b>Username:</b>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <b>Email Address:</b>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <b>Phone Number:</b>
          <br />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={handlePhoneBlur}
            required
          />
        </label>
        <br />
        <label>
          <b>Date of Birth:</b>
          <br />
          <input
            type="date"
            value={dob}
            onChange={handleDateChange}
            required
          />
        </label>
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormOpen;
