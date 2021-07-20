import React from 'react'

const NextReviewCard = ({img, title}) => {
  return (
    <div className="d-grid next-review-card">
      <img src={`./img/${img}.jpg`} alt="" />
      <div className="d-grid align-content-center">
        <div className="d-grid">
          <a href="" className="text-decoration-none fw-bold">{title}</a>
          <span className="fas fa-times text-secondary fs-4" />
        </div>
        <p>Help the community decide</p>
        <div>
          <span className="far fa-star fs-3" />
          <span className="far fa-star fs-3" />
          <span className="far fa-star fs-3" />
          <span className="far fa-star fs-3" />
          <span className="far fa-star fs-3" />
        </div>
      </div>
    </div>
  )
}

export default NextReviewCard
