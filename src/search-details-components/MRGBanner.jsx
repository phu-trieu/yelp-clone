import React from 'react'

const MRGBanner = () => {
  return (
    <div className="details-banner-container">
      <div className="details-img-grid">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/img/mrg5.jpg`} alt="" />
        </div>
        <div><img src={`${process.env.PUBLIC_URL}/img/mrg6.jpg`} alt="" /></div>
        <div><img src={`${process.env.PUBLIC_URL}/img/mrg7.jpg`} alt="" /></div>
        <div><img src={`${process.env.PUBLIC_URL}/img/mrg8.jpg`} alt="" /></div>
        <div><img src={`${process.env.PUBLIC_URL}/img/mrg9.jpg`} alt="" /></div>
        <div className="details-img-overlay">
          <div className="details-store-info">
            <div>
              {/* Title */}
              <h1 className="details-title white-font fw-bold">Mo Ran Gak Restaurant</h1>
              <div className="details-img-ratings">
                <div>
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                  <span className="fas fa-star white-font fs-2" />
                </div>
                {/* Reviews */}
                <p className="white-font fw-bold">1669 reviews</p>
              </div>
              <div className="d-flex">
                <span className="d-flex">
                  <span className="fas fa-check-circle text-primary me-2"></span>
                  <p className="text-primary fw-bold pe-2">Claimed</p>
                </span>
                <span className="d-flex">
                  <p className="details-categories white-font fw-bold">
                    {/* Categories */}
                    • $$ • Korean, Barbeque, Soup
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
            <button type="button" class="photo-btn btn white-font fw-bold">See 3324 photos</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MRGBanner
