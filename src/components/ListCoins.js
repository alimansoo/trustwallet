import React,{ useState,useEffect,useRef  } from "react";
import Asset from './Asset';
import axios from "axios";

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([JSON.stringify(content)], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export default function TopCoins(props){
  const [assets, setAssets] = useState([]);
  const isRunned = useRef(false);

  const loadDataOnlyOnce = () => {
    axios.get('/v1/assets?limit=10&limitd=10',{
      headers:{
        "X-RateLimit-Limit" : 1
      }
    })
    .then(res=>{
      console.log('List of exchanges ',res)
      //get exchange id
      setAssets(res.data.slice(0,5));
    })
    .catch(err=>console.log(err));
  };


  useEffect(() => {
    if(isRunned.current) return;
      isRunned.current = true;
    loadDataOnlyOnce();
  }, []);
    
  return (
    <div className="row currencies c-scroll">
      {
        assets.length < 1 ?
          <>
            <Asset loading />
            <Asset loading />
            <Asset loading />
          </>
        : 
        assets.map((value, index, array) => {
          return <Asset 
            key={value.asset_id}
            asset_id = {value.asset_id}
            name = {value.name}
            id_icon = {value.id_icon}
            volume_1hrs_usd = {value.volume_1hrs_usd}
            volume_1day_usd = {value.volume_1day_usd}
            volume_1mth_usd = {value.volume_1mth_usd}
            price_usd = {value.price_usd}
          />;
        })
      }
    </div>
  );
}

