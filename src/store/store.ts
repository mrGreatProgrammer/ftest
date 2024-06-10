import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "./appSlice";
import usersSlice from "./usersSlice";
import scheduleSlice from "./scheduleSlice";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["appSlice", "usersSlice"],
};

const userPersistConfig = {
  key: "usersSlice",
  storage: storage,
  blacklist: ["isFetchingUser", "userErr"],
};

const rootReducer = combineReducers({
  // appSlice: persistReducer(userPersistConfig, userPersistConfig)
  appSlice,
  usersSlice: persistReducer(userPersistConfig, usersSlice),
  scheduleSlice
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat
      (),
});

// export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;