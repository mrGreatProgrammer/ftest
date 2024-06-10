import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IUserInfo, loginFormType } from "../types/userType";


export const loginApi = createAsyncThunk(
  "users/login",
  async (
    { email, password }: loginFormType,
    { rejectWithValue }
  ) => {
    try {
      // тут использую фейковый api потому запрос не post и url не тот как при обычном логине
      const data: any = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`,
        {params:{ email, password }}
      );
      // const data: any = await axios.post(
      //   `${process.env.REACT_APP_API_URL}/user/login`,
      //   { email, password }
      // );
      
      return data.data;
    } catch (error) {
        // @ts-ignore
        if (error?.response?.data?.message) {
          // @ts-ignore
          return rejectWithValue(error?.response?.data?.message);
        } else {
          return rejectWithValue("Попробуйте позже!");
        }
    }
  }
);


export const editProfile = createAsyncThunk(
  "users/edit",
  async (
    formData: IUserInfo,
    { rejectWithValue, getState }
  ) => {
    try {
      // @ts-ignore
      const {userInfo} = getState().usersSlice;
      const data: any = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${userInfo.id}`,
        formData
      );
      
      return data.data;
    } catch (error) {
        // @ts-ignore
        if (error?.response?.data?.message) {
          // @ts-ignore
          return rejectWithValue(error?.response?.data?.message);
        } else {
          return rejectWithValue("Попробуйте позже!");
        }
    }
  }
);

