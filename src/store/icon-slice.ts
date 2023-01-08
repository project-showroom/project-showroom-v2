import { createSlice } from '@reduxjs/toolkit';

const iconSlice = createSlice({
  name: 'icon',
  initialState: {
    icon: 'moon',
  },
  reducers: {
    iconMoon: (state) => {
      state.icon = 'moon';
    },
    iconSun: (state) => {
      state.icon = 'sun';
    },
  },
});

export default iconSlice;

export const iconAction = iconSlice.actions;
