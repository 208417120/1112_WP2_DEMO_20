import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_20 from './App_20';

import { AppProvider_20 } from './Context_20';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_20>
      <App_20 />  
    </AppProvider_20>
  </React.StrictMode>
);
