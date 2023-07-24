import { configureStore } from "@reduxjs/toolkit";
import { habbitReducer } from "./reducers/habbitReducer";

export const store = configureStore({
  reducer: {
    habbitReducer,
  },
});
