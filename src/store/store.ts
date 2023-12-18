import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langReducer";

export const store = configureStore({
  reducer: {
    theme: langReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
