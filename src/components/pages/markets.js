import React from "react";
import { BiSearch,BiStar } from "react-icons/bi";
import TopHeader from "../sections/TopHeader";
import Asset from '../Asset';
const Markets = () => {
    return (
      <main className='container'>
        <TopHeader />
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
        </div>
      </main>
    );
}
export default Markets;