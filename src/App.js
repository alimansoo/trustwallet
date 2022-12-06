import React from 'react';
import './dist/css/main.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Markets from "./components/pages/markets";
import Exchange from "./components/pages/exchange";
import Charts from "./components/pages/charts";
import Test  from "./components/pages/test";
import Wallet from "./components/pages/wallet";
import { Provider } from 'react-redux'
import { store } from './Store/store'
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/markets' element={<Markets />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      <Navbar />
    </Provider>

  );
}

export default App;
