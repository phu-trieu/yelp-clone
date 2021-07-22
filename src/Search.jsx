import React, { useEffect, useState } from 'react';
import Header from './search-components/Header';
import GoogleMap from './search-components/GoogleMap';
import './search-components/Search.css';
import SearchResults from './search-components/SearchResults';

const Search = ({ setView }) => {
  const [paddingTop, setPaddingTop] = useState(0);

  useEffect(() => {
    setPaddingTop(document.getElementsByTagName('header')[0].clientHeight)
  }, [])

  return (
    <div>
      <Header setView={setView} setPaddingTop={setPaddingTop} />
      <div className="filters-map" style={{paddingTop: paddingTop}}>
        <SearchResults paddingTop={paddingTop} />
        <GoogleMap />
      </div>
    </div>
  )
}

export default Search
