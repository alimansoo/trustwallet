import React,{ useEffect,useRef } from "react";
import Asset from '../Asset';
import TopCoins from "../sections/TopCoins";
import ActionSection from "../sections/ActionSection";
import TopHeader from "../sections/TopHeader";
import { useSelector } from "react-redux";
import {getAssets,getIcons } from '../../Store/slice/assetsslice';

const Home = () => {
  const ReduxState = useSelector(getAssets);
  const ReduxIcons = useSelector(getIcons);
  console.log(ReduxState);

  const isRunned = useRef(false);

  // const loadDataOnlyOnce = async() => {
  //     if(isRunned.current) return;
  //     isRunned.current = true;
  //     getdata();
  // };

  // useEffect(() => {
  //     loadDataOnlyOnce();
  // }, []);
  console.log(ReduxState.payload.asset.assets.length > 1);
  return (
    <main className='container'>
    <TopHeader/>
    
    <ActionSection loadmode={ReduxState.payload.asset.assets.length > 1}/>
    <TopCoins />
    <div className='row flex-column bg-white border-coner'>
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
export default  Home;