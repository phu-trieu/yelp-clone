import React from 'react';
import MRGBanner from './MRGBanner';
import BusinessDetails from './BusinessDetails';
import StickyMenu from './StickyMenu';

const MRG = () => {
  return (
    <div>
      <MRGBanner />
      <div id="all-details">
        <BusinessDetails />
        <StickyMenu />
      </div>


    </div>
  )
}

export default MRG
