/*

A komponens children elemként kapja meg a props-okat.

Ebben az esetben a children elem egy sima szöveg

*/

import React, { useState } from "react";
import Modal from "./Modal";

const Button = ({ children, data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isBlured, setIsBlured] = useState(false);

  console.log(isBlured);
  
  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
          setIsBlured(true);
        }}
      >
        {children}
      </button>
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          setIsBlured={setIsBlured}
          data={data}
        />
      )}
    </div>
  );
};

export default Button;
