import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../types/userType";
import { loginApi } from "../api/usersApi";
import { notification } from "antd";

export interface IUsersState {
  token: string;
  refreshtoken: string;
  authorized: boolean;
  userInfo: IUserInfo | null;
  isFetchingUser: boolean;
  userErr: string;

  isFetchingProfile: boolean;
  profileErr: string;
}

const initialState: IUsersState = {
  authorized: false,
  token: "",
  refreshtoken: "",
  userInfo: null,
  isFetchingUser: false,
  userErr: "",

  isFetchingProfile: false,
  profileErr: "",
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    logoutAC(state) {
      state.token = "";
      state.userInfo = null;
      state.authorized = false;
    },
    setTokensAC(state, action) {
      state.token = action.payload.token;
      state.refreshtoken = action.payload.refreshtoken;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginApi.pending, (state) => {
      state.userErr = "";
      state.isFetchingUser = true;
      state.userInfo = null;
      state.token = "";
      state.authorized = false;
    });
    builder.addCase(loginApi.rejected, (state, action: PayloadAction<any>) => {
      state.userErr = action.payload;
      state.isFetchingUser = false;
      state.userInfo = null;
      state.token = "";
      state.authorized = false;
      notification.error({
        message: "Ошибка при входе!",
        description: action.payload,
      });
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.userErr = "";
      state.isFetchingUser = false;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      state.authorized = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logoutAC, setTokensAC } = usersSlice.actions;

export default usersSlice.reducer;