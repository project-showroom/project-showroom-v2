import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUser } from '../libs/api/user';
import { IUserType } from '../types/api-types';

interface IInitialState {
  loading: boolean;
  user: IUserType[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  user: [],
  error: '',
};

const takeUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.loading = false;
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<IUserType[]>) => {
        state.user = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { clearUser } = takeUserSlice.actions;

export default takeUserSlice.reducer;
