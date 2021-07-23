import React from 'react'

const HugLifeBanner = () => {
  return (
    <div className="details-container">
      <div className="details-img-grid">
        <div className="image-container">
          <img src="./img/hug5.jpg" alt="" />
        </div>
        <div><img src="./img/hug6.jpg" alt="" /></div>
        <div><img src="./img/hug7.jpg" alt="" /></div>
        <div><img src="./img/hug8.jpg" alt="" /></div>
        <div><img src="./img/hug9.jpg" alt="" /></div>
        <div className="details-img-overlay">
          <div className="details-store-info">
            <div>
              {/* Title */}
              <h1 className="details-title white-font fw-bold">Hug Life Ice Cream</h1>
              <div className="details-img-ratings">
                <div>
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                </div>
                {/* Reviews */}
                <p className="white-font fw-bold">1179 reviews</p>
              </div>
              <div className="d-flex">
                <span className="d-flex">
                  <span className="fas fa-check-circle text-primary me-2"></span>
                  <p className="text-primary fw-bold pe-2">Claimed</p>
                </span>
                <span className="d-flex">
                  <p className="details-categories white-font fw-bold">
                    {/* Categories */}
                    • $$ • Ice Cream & Frozen Yogurt, Desserts, Bakeries
                    <span className="badge bg-secondary ms-2">Edit</span>
                  </p>
                </span>
              </div>
              <div className="details-hours-container">
                <div className="details-hours">
                  <p className="text-success fw-bold me-2">Open</p>
                  <p className="white-font fw-bold">12:00 PM - 11:00 PM</p>
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

export default HugLifeBanner
