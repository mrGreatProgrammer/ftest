import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EventC } from "../types/appTypes";



export const getShedule = createAsyncThunk(
  "schedule/get",
  async (formData: string |undefined, { rejectWithValue }) => {
    try {
      const data: any = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${formData}/schedule`
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

export const addShedule = createAsyncThunk(
  "schedule/add",
  async (formData: EventC, { rejectWithValue, getState }) => {
    try {
        // @ts-ignore
        const {userInfo} = getState().usersSlice
      const data: any = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/${userInfo?.id}/schedule`,
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

export const editShedule = createAsyncThunk(
  "schedule/edit",
  async (formData: EventC, { rejectWithValue }) => {
    try {
      const data: any = await axios.put(
        `${process.env.REACT_APP_API_URL}/schedule/${formData.id}`,
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
