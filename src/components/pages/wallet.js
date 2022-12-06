import React from "react";
import { ReactComponent as Chart } from '../../dist/images/NBcharts-lineChats.svg';
import { BiSearch,BiStar } from "react-icons/bi";
import Asset from '../Asset';
import TopHeader from "../sections/TopHeader";
import { useSelector } from "react-redux";
import {getAssets,getIcons } from '../../Store/slice/assetsslice';

export default function Home(){
  const ReduxState = useSelector(getAssets);
  const ReduxIcons = useSelector(getIcons);
  console.log(ReduxState);
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
        
        {
          ReduxState.payload.asset.assets.length < 1 ?
          <>
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
          </>
          : 
            ReduxState.payload.asset.assets.map((value, index, array) => {
              return <Asset 
              confirm={'row'}
              key={value.asset_id}
              asset_id = {value.asset_id}
              name = {value.name}
              id_icon = {value.id_icon}
              volume_1hrs_usd = {value.volume_1hrs_usd}
              volume_1day_usd = {value.volume_1day_usd}
              volume_1mth_usd = {value.volume_1mth_usd}
              price_usd = {value.price_usd}
              icon_url = {ReduxIcons.payload.asset.icons.filter((value2, index, array) => value2.asset_id === value.asset_id)}
              />;
            })
        }
      </div>
    </main>
  );
}