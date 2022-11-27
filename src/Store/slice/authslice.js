import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: [],
    authStatus: 0
  },
  reducers: {
    authState: (state) => {
      return state.authStatus;
    },
    authUser: (state) => {
      state.authStatus = 1;
    }
  },
})

export const { authState,authUser } = authSlice.actions;

export default authSlice.reducer;