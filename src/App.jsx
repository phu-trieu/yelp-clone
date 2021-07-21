import { useState } from 'react';
import Homepage from './Homepage';
import SearchResults from './SearchResults';

const App = () => {
  const [view, setView] = useState('SR');
  const checkView = () => {
    if (view === 'HP') return <Homepage setView={setView} />;
    if (view === 'SR') return <SearchResults setView={setView} />;
  }
  return (
    <div>
      {checkView()}
    </div>
  );
}

export default App;
