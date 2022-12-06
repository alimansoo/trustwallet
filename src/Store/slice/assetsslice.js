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
    setAssets(state,action){
      state.assets = action.payload;
    },
    getAssets: (state) => {
      return state.assets;
    },
    setIcons(state,action){
      state.icons = action.payload;
    },
    getIcons: (state) => {
      return state.icons;
    },
    getLenght: (state) => {
      return state.assets.length;
    }
  },
})

export const { setAssets, getAssets, setIcons, getIcons } = assetsSlice.actions;

export default assetsSlice.reducer;