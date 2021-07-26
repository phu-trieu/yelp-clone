import React from 'react'

const SabrosoBanner = () => {
  return (
    <div className="details-banner-container">
      <div className="details-img-grid">
        <div className="image-container">
          <img src="./img/sabroso5.jpg" alt="" />
        </div>
        <div><img src="./img/sabroso6.jpg" alt="" /></div>
        <div><img src="./img/sabroso7.jpg" alt="" /></div>
        <div><img src="./img/sabroso8.jpg" alt="" /></div>
        <div><img src="./img/sabroso9.jpg" alt="" /></div>
        <div className="details-img-overlay">
          <div className="details-store-info">
            <div>
              {/* Title */}
              <h1 className="details-title white-font fw-bold">Sabroso! Mexican Grill</h1>
              <div className="details-img-ratings">
                <div>
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                </div>
                {/* Reviews */}
                <p className="white-font fw-bold">3183 reviews</p>
              </div>
              <div className="d-flex">
                <span className="d-flex">
                  <span className="fas fa-check-circle text-primary me-2"></span>
                  <p className="text-primary fw-bold pe-2">Claimed</p>
                </span>
                <span className="d-flex">
                  <p className="details-categories white-font fw-bold">
                    {/* Categories */}
                    • $$ • Mexican, Breakfast & Brunch, Seafood
                    <span className="badge bg-secondary ms-2">Edit</span>
                  </p>
                </span>
              </div>
              <div className="details-hours-container">
                <div className="details-hours">
                  <p className="text-success fw-bold me-2">Open</p>
                  <p className="white-font fw-bold">11:00 AM - 9:00 PM</p>
                </div>
                <div className="details-hours-updated">
                  <span className="me-2 fas fa-info-circle text-primary"></span>
                  <p className="text-primary fw-bold">Hours updated 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button type="button" class="photo-btn btn white-font fw-bold">See 1410 photos</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SabrosoBanner
