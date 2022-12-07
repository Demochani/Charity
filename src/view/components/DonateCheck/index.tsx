import React from 'react'

const DonateCheck = () => {
  return (
    <div className='donate-check-bg' >
      <div className="donate-check-wrapper">
      <form>
        <p className="donate-title">Secure donation &#128274;</p>
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
        
        <input className="donate-button" type="submit" value="Donate"></input>
      </form>
    </div>
    </div>
  )
}

export default DonateCheck()
