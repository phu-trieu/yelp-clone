import React from 'react'
import WriteReview from './WriteReview'
import Menu from './Menu'
import ReviewHighlights from './ReviewHighlights'
import Location from './Location'

const BusinessDetails = () => {
  return (
    <section id="business-details">
      <WriteReview />
      <Menu />
      <ReviewHighlights />
      <Location />
    </section>
  )
}

export default BusinessDetails
