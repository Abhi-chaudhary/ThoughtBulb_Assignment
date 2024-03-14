import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { ticketReducers } from "./ticket/ticketSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducers,
    
  },
});
