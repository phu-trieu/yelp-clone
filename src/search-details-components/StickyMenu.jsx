import React from 'react'

const StickyMenu = () => {
  return (
    <div className="sticky-menu">
      <div className="top-sticky-menu">
        <h5 className="fw-bold mb-3">Order Food</h5>
        <p className="fw-bold mb-4">Delivery</p>
        <div className="delivery-costs">
          <p>
            <b>$0.99 </b>
            <span className="text-muted">delivery fee</span>
          </p>
          <p>
            <b>$0 </b>
            <span className="text-muted">min</span>
          </p>
          <p className="text-muted">N/A</p>
        </div>
        <label htmlFor="delivery-address">
          <input type="text" autoComplete="off" id="delivery-address" placeholder="Delivery Address" />
        </label>
        <div>
          <button className="order-btn">
            Start Order
          </button>
        </div>
      </div>
      <div className="bottom-sticky-menu">
        <div>
          <a href="" className="text-decoration-none"><b>huglifeicecream.com</b></a>
          <span className="fas fa-external-link-alt"></span>
        </div>
        <div>
          <b className="mb-0">(714) 760-4345</b>
          <span className="fas fa-phone-volume"></span>
        </div>
        <div>
          <div>
            <a href="" className="text-decoration-none"><b>Get Directions</b></a>
            <div>14241 Euclid St Ste C115 Garden Grove, CA 92843</div>
          </div>
          <span className="fas fa-location-arrow"></span>
        </div>
      </div>
    </div>
  )
}

export default StickyMenu
