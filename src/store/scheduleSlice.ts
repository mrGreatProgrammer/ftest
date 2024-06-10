import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../types/userType";
import { loginApi } from "../api/usersApi";
import { notification } from "antd";
import { addShedule, editShedule, getShedule } from "../api/scheduleApi";
import { EventC } from "../types/appTypes";

export interface IScheduleState {
  schedule: EventC[] | [];
  isFetching: boolean;
  err: string;

  isFetchingEdit: boolean;
  errEdit: string;

  modalDate: boolean;
}

const initialState: IScheduleState = {
  
    err:"", errEdit: "",isFetching: false,isFetchingEdit: false,schedule: [],modalDate:false
};

export const scheduleSlice = createSlice({
  name: "scheduleSlice",
  initialState,
  reducers: {
    setModalDateAC(state,action){
        state.modalDate = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getShedule.pending, (state) => {
    state.err = "";
    state.isFetching = true;
    });
    builder.addCase(getShedule.rejected, (state, action: PayloadAction<any>) => {
      state.err = "error";
      state.isFetching = false;
      
      notification.error({
        message: "Ошибка!",
        description: action.payload,
      });
    });
    builder.addCase(getShedule.fulfilled, (state, action) => {
        state.err = "";
        state.isFetching = false;
        state.schedule = action.payload;
    });
    builder.addCase(addShedule.pending, (state) => {
    state.errEdit = "";
    state.isFetchingEdit = true;
    });
    builder.addCase(addShedule.rejected, (state, action: PayloadAction<any>) => {
      state.errEdit = "error";
      state.isFetchingEdit = false;
      
      notification.error({
        message: "Ошибка!",
        description: action.payload,
      });
    });
    builder.addCase(addShedule.fulfilled, (state, action) => {
        state.errEdit = "";
        state.isFetchingEdit = false;
        state.modalDate=false;
    });
    builder.addCase(editShedule.pending, (state) => {
    state.errEdit = "";
    state.isFetchingEdit = true;
    });
    builder.addCase(editShedule.rejected, (state, action: PayloadAction<any>) => {
      state.errEdit = "error";
      state.isFetchingEdit = false;
      
      notification.error({
        message: "Ошибка!",
        description: action.payload,
      });
    });
    builder.addCase(editShedule.fulfilled, (state, action) => {
        state.errEdit = "";
        state.isFetchingEdit = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setModalDateAC } = scheduleSlice.actions;

export default scheduleSlice.reducer;