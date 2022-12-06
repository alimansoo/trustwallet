import React from "react";
import coinapi from '../api/coinapi';
// import { ReqandSetAssets,AssetStatus } from '../Store/slice/assetsslice';
import { useSelector, useDispatch } from 'react-redux';

const requestAssets = ()=>{
  
  // state.status = 1;
  //get Assets
  // console.log("request send");
  // coinapi.get('/v1/assets',{
  //   headers:{
  //   "X-RateLimit-Limit" : 1
  //   }
  // })
  // .then(res=>{
  //   console.log('List of exchanges ',res.data.slice(0,5));
    // state.status = 2;
    // state.assets = res.data.slice(0,20);
  // })
  // .catch(err=>console.log(err));

  //get Icons
  // coinapi.get('/v1/assets/icons/24',{
  //   headers:{
  //   "X-RateLimit-Limit" : 1
  //   }
  // })
  // .then(res=>{
  //   console.log('List of icons ',res.data.slice(0,5));
  //   // state.status = 3;
  //   // state.icons = res.data.slice(0,20);
  // })
  // .catch(err=>console.log(err));
}

export default requestAssets;
// function download(content, fileName, contentType) {
//   var a = document.createElement("a");
//   var file = new Blob([JSON.stringify(content)], {type: contentType});
//   a.href = URL.createObjectURL(file);
//   a.download = fileName;
//   a.click();
// }