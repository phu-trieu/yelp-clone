import { useState } from 'react';
import Homepage from './Homepage';
import Search from './Search';
import Details from './Details';

const App = () => {
  const [view, setView] = useState({
    page: 'HP',
    details: null
  });

  const [paddingTop, setPaddingTop] = useState(0);

  const checkView = () => {
    if (view.page === 'HP') return <Homepage setView={setView} />;
    if (view.page === 'SR') return <Search setView={setView} paddingTop={paddingTop} setPaddingTop={setPaddingTop} />;
    if (view.page === 'SD') return <Details setView={setView} details={view.details} paddingTop={paddingTop} setPaddingTop={setPaddingTop} />
  }
  return (
    <div>
      {checkView()}
    </div>
  );
}

export default App;
