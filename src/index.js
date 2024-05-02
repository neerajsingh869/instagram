import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { FirebaseContext } from './context/firebase';
import { app, db } from './configs/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ app, db }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
);