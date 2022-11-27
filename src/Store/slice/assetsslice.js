import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    status : 0,
    assets: [],
    icons: []
  },
  reducers: {
    ReqandSetAssets(state){
      state.status = 1;
      //get Assets
      console.log("request send");
      axios.get('/v1/assets',{
        headers:{
          "X-RateLimit-Limit" : 1
        }
      })
      .then(res=>{
        console.log('List of exchanges ',res.data.slice(0,5));
        state.status = 2;
        state.assets = res.data.slice(0,20);
      })
      .catch(err=>console.log(err));

      //get Icons
      axios.get('/v1/assets/icons/24',{
        headers:{
          "X-RateLimit-Limit" : 1
        }
      })
      .then(res=>{
        console.log('List of icons ',res.data.slice(0,5));
        state.status = 3;
        state.icons = res.data.slice(0,20);
      })
      .catch(err=>console.log(err));

    },
    AssetStatus(state){
      return state.status;
    },
    getAssets: (state) => {
      return state.assets;
    },
    getIcons: (state) => {
      return state.icons;
    }
  },
})

export const { ReqandSetAssets, AssetStatus, getAssets,getIcons } = assetsSlice.actions;

export default assetsSlice.reducer;