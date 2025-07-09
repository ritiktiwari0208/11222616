import React from 'react';
import Shortener from './Shortener';
import Redirect from './Redirect';

function App() {
  const shortId = window.location.pathname.substring(1);

  return (
    <div className="container">
      {shortId ? <Redirect shortId={shortId} /> : <Shortener />}
    </div>
  );
}

export default App;
