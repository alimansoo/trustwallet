import React,{ useRef,useEffect } from "react";
import Asset from '../Asset';
import { useSelector,useDispatch } from "react-redux";
import { setAssets,getAssets,setIcons,getIcons } from '../../Store/slice/assetsslice';
import coinapi from '../../api/coinapi';

const TopCoins = (props) => {
  const ReduxState = useSelector(getAssets);
  const ReduxIcons = useSelector(getIcons);
  console.log(process.env.X_CoinAPI_Key);

  console.log(ReduxIcons.payload.asset.icons);
  const dispatch = useDispatch();

  const isRunned = useRef(false);

  const loadDataOnlyOnce = async() => {
    console.log("Ddddd");
    if(isRunned.current) return;
    isRunned.current = true;
    console.log("Ddddd");
    // getdata();
    if(true){
      //get Assets
      coinapi.get('/v1/assets',{
        headers:{
        "X-RateLimit-Limit" : 1
        }
      })
      .then(res=>{
        console.log('List of assets ',res.data.slice(0,15));
        dispatch(setAssets(res.data.slice(0,15)));
      })
      .catch(err=>console.log(err));
      // get Icons
      coinapi.get('/v1/assets/icons/24',{
        headers:{
        "X-RateLimit-Limit" : 1
        }
      })
      .then(res=>{
        console.log('List of icons ',res.data);
        dispatch(setIcons(res.data));
      })
      .catch(err=>console.log(err));
    }
  };

  useEffect(() => {
      loadDataOnlyOnce();
  }, []);

  if (ReduxState.payload.asset.status === 0) {
    // console.log('requeset sended');
    // dispatch(ReqandSetAssets());
  }

  return (
    <div className="row currencies c-scroll">
    {
      ReduxState.payload.asset.assets.length < 1 ?
      <>
        <Asset loading />
        <Asset loading />
        <Asset loading />
      </>
      : 
      ReduxState.payload.asset.assets.map((value, index, array) => {
        return <Asset 
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
      }
    )
    }
    </div>
  );
}
export default  TopCoins;