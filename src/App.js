import React, { useState } from "react";
import User from "./components/User";
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">
        Open Form
      </button>
      {isOpen && <User closeModal={closeModal} />}
    </div>
  );
};

export default App;