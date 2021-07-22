import React from 'react';
import Banner from './homepage-components/Banner';
import NextReview from './homepage-components/NextReview';
import './homepage-components/Homepage.css';
import './App.css';

const Homepage = ({setView}) => {
  return (
    <div>
      <Banner setView={setView} />
      <NextReview />
    </div>
  )
}

export default Homepage
