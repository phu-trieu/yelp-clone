import React from 'react';
import Banner from './homepage-components/Banner';
import NextReview from './homepage-components/NextReview';

const Homepage = ({setView}) => {
  return (
    <div>
      <Banner setView={setView} />
      <NextReview />
    </div>
  )
}

export default Homepage
