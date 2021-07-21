import React from 'react';
import Header from './search-result-components/Header';
import SearchFilters from './search-result-components/SearchFilters';
import './SearchResults.css';

const SearchResults = ({ setView }) => {
  return (
    <div>
      <Header setView={setView} />
      <SearchFilters />
    </div>
  )
}

export default SearchResults
