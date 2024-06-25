/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

// initial State
import { authDetails } from "./auth/initialState";

// reducers
import authDetailsForUserReducer from "./auth/reducers";

export const RootState = {
  authDetailsForUserState: authDetails,
};

export const store = configureStore({
  reducer: {
    authDetailsForUserState: authDetailsForUserReducer,
  },
});
