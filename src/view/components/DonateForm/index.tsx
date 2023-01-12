import React, {useState} from "react";
import "./donateForm.css";
import Modal from "../../common/Modal/Modal";
import { flattenDiagnosticMessageText } from "typescript";
import DonateCheck from "../DonateCheck";

export default function DonateForm() {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const open = () => {
    setModalActive(true)
}

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
      <Modal active={modalActive} setActive={setModalActive}>
        <DonateCheck/>
      </Modal>
    </div>
  );
}
