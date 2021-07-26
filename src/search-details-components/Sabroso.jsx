import React from 'react';
import SabrosoBanner from './SabrosoBanner';
import BusinessDetails from './BusinessDetails';
import StickyMenu from './StickyMenu';

const Sabroso = () => {
  return (
    <div>
      <SabrosoBanner />
      <div id="all-details">
        <BusinessDetails />
        <StickyMenu />
      </div>


    </div>
  )
}

export default Sabroso
