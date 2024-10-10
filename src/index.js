import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <I18nextProvider>
        <App />
      </I18nextProvider>
  </React.StrictMode>
);