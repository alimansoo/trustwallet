import React from "react";
import { ReactComponent as Chart } from '../../dist/images/NBcharts-lineChats.svg';
import { BiSearch,BiStar } from "react-icons/bi";
import Asset from '../Asset';
import TopHeader from "../sections/TopHeader";

export default function Home(){
    return (
      <main className='container'>
        <TopHeader/>
        <div className='row flex-row align-items-center justify-between p-16 bg-white border-coner'>
          <div>
            <div className="title-lg mb-8">36712.365<span className="badge sm dark ml-8">UDS</span></div>
            <div className="title-md mb-8">$86,6987,32.23</div>
            <div className="mt-16"><span className="badge md success">+ 36.02</span></div>
          </div>
          <div>
            <Chart/>
          </div>
        </div>
        <div className='row flex-column bg-white border-coner'>
          <div className="row p-16 mb-0">
            <div className="search-section mr-1">
              <div className="search-input">
                <BiSearch className="icon"/>
                <input type="text" className="input" placeholder="Search..." />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-item active">All</div>
              <div className="filter-item"><BiStar/></div>
            </div>
          </div>
          
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
          <Asset confirm={'row'} loading />
        </div>
      </main>
    );
}