import React, {useContext} from 'react';
import {ModalContext} from "../../common/Modal/ModalContext";
// import "../../common/Modal/modal.css"


const ModalQuestion = () => {
    const {close} = useContext(ModalContext)

    return (
        <div className="modal-background">
            <div className="modal-content">
                <h1>Payment</h1>
                <div>
                    <p>
                        The items are awesome! you should move forward, you will enjoy it!
                    </p>
                </div>
                <div className="button-container">
                    <button
                        className="modal-continue-button">Continue
                    </button>
                    {/* <button
                        className="modal-cancel-button"
                        onClick={close}
                    >✖</button> */}
                </div>
            </div>

        </div>
    );
};

export default ModalQuestion;