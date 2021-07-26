import React from 'react';
import StickyMenu from './StickyMenu';
import HugLifeBanner from './HugLifeBanner';
import BusinessDetails from './BusinessDetails';

const HugLife = () => {
  return (
    <div>
      <HugLifeBanner />
      <div id="all-details">
        <BusinessDetails />
        <StickyMenu />
      </div>


    </div>
  )
}

export default HugLife
