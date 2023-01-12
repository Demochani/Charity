import React from "react";
import { ModalProps } from "../../../types";

import './modal.css'

const Modal = ({active, setActive, children}:ModalProps) => {
  return (
    <div className={active?"modal active":"modal"} onClick={() => setActive(false)}>
      <div className={active?"modal-content active":"modal-content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
};

export default Modal