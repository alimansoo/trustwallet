import React,{ useEffect } from "react";
import { BiCaretUp,BiCaretDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getAssets } from '../Store/slice/assetsslice';

export default function Assets(
    {
    confirm='',
    asset_id,
    name,
    asset_idasset_id,
    volume_1hrs_usd,
    volume_1mth_usd,
    price_usd,
    icon_url,
    ...props
    }
  )
  {
    const ReduxState = useSelector(getAssets);
    const icon = ReduxState.payload.asset.assets.filter((value, index, array) => {return value.asset_id === asset_id});

    function percent(newNumber,oldNumber){
      // X = (B – A) ÷ |A| * 100
      if (!newNumber||!oldNumber)
        return 0;
      return ((newNumber - oldNumber) / Math.abs(oldNumber) *100).toFixed(1);
    }
    function Price(price){
      if(!price)
        return 0;
      return price.toFixed(3);
    }
    function isPositive(num) {
      if (Math.sign(num) === 1) {
        return true;
      }
      return false;
    }
    let AssetPercent = percent(volume_1hrs_usd,volume_1mth_usd);
    let AssetPositive = isPositive(AssetPercent);
    return (
      <>
        {
        props.loading ? 
          <div className={`assets ${confirm}`}>
            <div className="row">
                <div className="assets-img conent-loading"></div>
                <div className="assets-content">
                    <div className="conent-loading"></div>
                </div>
                
            </div>
            <div className="row price-row">
                <div className="conent-loading"></div>
            </div>
          </div> 
        : 
        <div className={`assets ${confirm}`}>
            <div className="row">
                <img title={props.id_icon} src={icon_url[0]?icon_url[0].url:"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} alt="dd" className="assets-img" />
                <div className="assets-content">
                    <span className="name mb-4">{name}</span>
                    <span className="symbol">{asset_id}</span>
                </div>
                
            </div>
            <div className="row price-row">
                <span className="price mb-4">${Price(price_usd)}</span>
                <span className={`status ${AssetPositive?'color-success':'color-danger'}`}>
                    {
                        AssetPositive ? 
                        <BiCaretUp className="currenty-status-icon" /> :
                        <BiCaretDown className="currenty-status-icon" />
                    }
                    {AssetPercent}%
                </span>
            </div>
        </div> 
        }
          
    </>
  );
}