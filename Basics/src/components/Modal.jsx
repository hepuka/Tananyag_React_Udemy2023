import React from "react";
import "./Modal.css";
import { getDataToModal } from "../getDataToModal";

const Modal = ({ setOpenModal, data }) => {
  return (
    <>
      <div className="modalContainer">
        {getDataToModal(data)}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
