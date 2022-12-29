import React, {useContext} from "react";
import "./donateForm.css";
// import { Link } from "react-router-dom";
import { ModalContext } from "../../common/Modal/ModalContext";
import ModalQuestion from "../../common/Modal";
import Modal from "../../common/Modal/Modal";
// import LockIcon from "../../common/LockIcon";

export default function DonateForm() {
  const {modal, open, close} = useContext(ModalContext)
  return (
    <div className="donate-form-wrapper" >
      <form>
        <p className="donate-title">Secure donation </p>
        {/* 128274 */}
        <div className="button-dollar-container">
          <button>$ 5</button>
          <button>$ 25</button>
          <button>$ 50</button>
        </div>
        <div className="button-dollar-container">
          <button>$ 200</button>
          <button>$ 500</button>
          <button>$ 1000</button>
        </div>
        <input className="donate-input" type="text" placeholder="$" pattern="[\d]{1,10}" />
        {/* <button className="donate-button"  onClick={open}>Donate</button> */}
        <input className="donate-button" type="button" value="Donate" onClick={open}></input>
        {/* <input className="donate-button" type="submit" value="Donate" onClick={open}></input> */}
        {/* <Link to={'Check'}><input className="donate-button" type="submit" value="Donate"></input></Link> */}
      </form>
      {modal && <Modal onClose={close}>
                <ModalQuestion/>
            </Modal>}
    </div>
  );
}
