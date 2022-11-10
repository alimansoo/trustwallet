import React from 'react';
import './dist/css/main.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { BiUser,BiBell } from "react-icons/bi";
import { ReactComponent as Logo } from './logo.svg';
import { Action } from './components/Action';


function App() {
  return (
    <>
      <main className='container'>
        <div className="row space-between">
          <div>
            <Logo/>
          </div>

          <div>
            <button className='icon-btn'>
              <BiBell className='icon' />
            </button>
            <button className='icon-btn ml-10p'>
              <BiUser className='icon' />
            </button>
          </div>
          
          
        </div>
        <div className="row action-row">
          <Action/>
          <Action/>
          <Action/>
          <Action/>
          <Action/>
          <Action/>
          <Action/>
          <Action/>
        </div>
        <div className="row white">
            ffff
        </div>
        <Button />
      </main>
      <Navbar />
    </>
  );
}

export default App;
