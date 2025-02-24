'use client';
import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";
import regSlice from "./regSlice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
    register: regSlice,
  },
});
