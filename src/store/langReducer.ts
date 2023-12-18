import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    toggleLang: (state) => {
      state.lang === "eng" ? (state.lang = "ar") : (state.lang = "eng");
    },
  },
});

export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;
