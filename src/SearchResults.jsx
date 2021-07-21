import React from 'react';
import Header from './search-result-components/Header';
import './SearchResults.css';

const SearchResults = ({ setView }) => {
  return (
    <div>
      <Header setView={setView} />
    </div>
  )
}

export default SearchResults
