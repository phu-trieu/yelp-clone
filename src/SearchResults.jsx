import React from 'react';
import Header from './search-result-components/Header';
import SearchFilters from './search-result-components/SearchFilters';
import GoogleMap from './search-result-components/GoogleMap';
import './SearchResults.css';

const SearchResults = ({ setView }) => {
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

export default SearchResults
