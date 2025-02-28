// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
