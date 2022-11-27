import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

// axios.defaults.baseURL = 'http://rest.coinapi.io/';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// axios.defaults.headers.common['X-CoinAPI-Key'] = '3AB59341-6ABA-4B92-A253-F1486DC1AAA5';
// axios.defaults.headers.common['X-CoinAPI-Key'] = 'E1F66D2C-1DD0-4B4D-A072-CF24877B0716';
// axios.defaults.headers.post['Content-Type'] = 'Application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
