import { configureStore } from '@reduxjs/toolkit'
import assetsslice from './slice/assetsslice'

export const store = configureStore({
  reducer: {
    asset: assetsslice,
  },
})