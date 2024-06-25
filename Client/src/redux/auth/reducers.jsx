/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { authDetails } from "./initialState";

const authDetailSlice = createSlice({
  name: authDetails,
  initialState: authDetails,
  reducer: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setUserName: (state, action) => {
      state.UserName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setId, setUserName, setEmail, setMessage, setOpen, setLoading } =
  authDetailSlice.actions;

export default authDetailSlice.reducer;
