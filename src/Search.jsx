import React from 'react';
import Header from './search-components/Header';
import GoogleMap from './search-components/GoogleMap';
import './search-components/Search.css';
import SearchResults from './search-components/SearchResults';

const Search = ({ setView }) => {
  return (
    <div>
      <Header setView={setView} />
      <div className="filters-map">
        <SearchResults />
        <GoogleMap />
      </div>
    </div>
  )
}

export default Search
