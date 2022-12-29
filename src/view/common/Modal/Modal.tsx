import React from "react";
import { ModalProps } from "../../../types";
import "./modal.css"

const Modal = ({children, onClose}: ModalProps) => {
    return (
        <>
            <div
                className="modal" onClick={onClose}
            />
            <button className="modal-close">✖</button>
            <div className="modal-container">
                {children}
            </div>
        </>
    )
};

export default Modal;