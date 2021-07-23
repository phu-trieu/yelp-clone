import React from 'react'

const StickyMenu = () => {
  return (
    <div className="sticky-menu">
      <div className="top-sticky-menu">
        <h5 className="fw-bold">Order Food</h5>
        <p className="fw-bold">Delivery</p>
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
    </div>
  )
}

export default StickyMenu
