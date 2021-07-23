import React, { useEffect } from 'react';
import Header from './search-components/Header';
import Sabroso from './search-details-components/Sabroso';
import MRG from './search-details-components/MRG';
import HugLife from './search-details-components/HugLife';
import './search-details-components/Details.css'

const Details = ({details, setView, paddingTop, setPaddingTop}) => {
  const checkDetails = () => {
    if (details === 'sabroso') return <Sabroso />
    if (details === 'mrg') return <MRG />
    if (details === 'hug') return <HugLife />
  }

  useEffect(() => {
    setPaddingTop(document.getElementsByTagName('header')[0].clientHeight)
  }, [])

  return (
    <div>
      <Header setView={setView} setPaddingTop={setPaddingTop} />
      <div style={{paddingTop: paddingTop}}>
        {checkDetails()}
      </div>
    </div>
  )
}

export default Details
