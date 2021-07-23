import React from 'react'

const WriteReview = () => {
  return (
    <div className="write-review mb-3">
      <button className="write-review-btn">
        <span className="far fa-star me-2"></span>
        <b>Write a Review</b>
      </button>
      <button className="not-write-review-btn">
        <span className="fas fa-camera me-2"></span>
        <b>Add Photo</b>
      </button>
      <button className="not-write-review-btn">
        <span className="fas fa-share me-2"></span>
        <b>Share</b>
      </button>
      <button className="not-write-review-btn">
        <span className="fas fa-bookmark me-2"></span>
        <b>Save</b>
      </button>
    </div>
  )
}

export default WriteReview
