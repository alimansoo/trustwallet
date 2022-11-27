import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";

export default function Customeselect({className}) {
  return (
    <div className={`custome-select ${className}`}>
      <div className="first-item d-flex justify-between">
        <div className='d-flex '>
          <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="dd" className="item-img" />
          <div className='d-flex flex-column ml-8 '>
            <span className="name mb-4">Bitcoin</span>
            <span className="symbol">BTC</span>
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <span className='price mr-8'>
            $145,254
          </span>
          <BiChevronDown/>
        </div>
        
      </div>
    </div>
  );
}