import React from 'react';
import Header from './search-components/Header';
import SearchFilters from './search-components/SearchFilters';
import GoogleMap from './search-components/GoogleMap';
import './search-components/Search.css';

const Search = ({ setView }) => {
  return (
    <div>
      <Header setView={setView} />
      <div className="filters-map">
        <SearchFilters />
        <GoogleMap />
      </div>
    </div>
  )
}

export default Search
