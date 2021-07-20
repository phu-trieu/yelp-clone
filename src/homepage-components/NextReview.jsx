import React from 'react';
import NextReviewCard from './NextReviewCard';
import '../Homepage.css';
import '../App.css';


const NextReview = () => {
  return (
    <section className="mt-3">
      <h4 className="text-center yelp-color fw-bold mb-4">Your Next Review Awaits</h4>
      <div className="d-grid next-review-grid">
        <NextReviewCard img="2b1-tint" title="2B1 Tint" />
        <NextReviewCard img="pro-movers" title="Pro Movers" />
        <NextReviewCard img="cali-dental-group" title="California Dental Group" />
        <NextReviewCard img="playground" title="Playground" />
        <NextReviewCard img="hu-tieu-de-nhat" title="Hu Tieu De Nhat" />
        <NextReviewCard img="sookdal" title="Sookdal" />
      </div>
    </section>
  )
}

export default NextReview
