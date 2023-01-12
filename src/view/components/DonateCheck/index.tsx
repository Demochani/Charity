import React, {FC} from 'react'

const DonateCheck:FC = () => {
  return (
    <div className='donate-check-bg' >
      <div className="donate-check-wrapper">
      <form>
        <p className="donate-title">Payment</p>
        
        <input className="donate-input" type="text" placeholder="$" pattern="[\d]{1,10}" />
        
        <input className="donate-button" type="submit" value="PayPal"></input>
      </form>
    </div>
    </div>
  )
}

export default DonateCheck
