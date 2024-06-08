import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  // value: number
  authorized: boolean;
//   userInfo: IUserInfo | null;
}

const initialState: AppState = {
  // value: 0,
  authorized: false,
//   userInfo: null
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
  },
  
})

// Action creators are generated for each case reducer function
export const {
   } = appSlice.actions

export default appSlice.reducer