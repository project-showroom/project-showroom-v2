import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: false,
  },
  reducers: {
    darkModeOn: (state) => {
      state.darkMode = true;
    },
    darkModeOff: (state) => {
      state.darkMode = false;
    },
  },
});

export const darkModeAction = darkModeSlice.actions;

export default darkModeSlice;
