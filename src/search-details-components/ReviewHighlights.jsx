import React from 'react'

const ReviewHighlights = () => {
  return (
    <div className="review-highlights-container mb-3">
      <h5 className="mb-3"><b>Review Highlights</b></h5>
      <div className="review-highlights">
        <div className="mb-2">
          <img src={`${process.env.PUBLIC_URL}/img/hug-review1.jpg`} alt="" />
          <div>
            <p>
              "I'd never thought that I would ever like <a href="" className="text-decoration-none"><b>VEGAN ice cream</b></a>, but my boyfriend was very adamant to come here haha."
              <a href="" className="text-decoration-none">in 231 reviews</a>
            </p>
          </div>
        </div>
        <div className="mb-2">
          <img src={`${process.env.PUBLIC_URL}/img/hug-review2.jpg`} alt="" />
          <div>
            <p>
              “I've enjoyed the various flavors that I've tried (Banana Boy, <a href="" className="text-decoration-none"><b>Cookie Butterface</b></a>, Mango Chamoy, Earl Great).”
              <a href="" className="text-decoration-none">in 56 reviews</a>
            </p>
          </div>
        </div>
        <div className="mb-2">
          <img src={`${process.env.PUBLIC_URL}/img/hug-review3.jpg`} alt="" />
          <div>
            <p>
              “But my final choice in a small cup 50/50 meaning two scoops in a small cup of <a href="" className="text-decoration-none"><b>banana boy</b></a> and matcha monsta.”
              <a href="" className="text-decoration-none">in 62 reviews</a>
            </p>
          </div>
        </div>
        <div>
          <a href="" className="text-decoration-none"><b>Show more review highlights</b></a>
        </div>
      </div>
    </div>
  )
}

export default ReviewHighlights
