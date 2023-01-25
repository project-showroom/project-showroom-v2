import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProfileType } from '../types/api-types';

export const getCurrentProfile = createAsyncThunk(
  'profile/getCurrentProfile',
  async () => {
    return await axios.get(`/api/profiles`).then((response) => {
      return response.data.data;
    });
  },
);

interface IInitialState {
  loading: boolean;
  profile: IProfileType[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  profile: [],
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrentProfile.fulfilled,
      (state, action: PayloadAction<IProfileType[]>) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getCurrentProfile.rejected, (state, action) => {
      state.loading = false;
      state.profile = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default profileSlice.reducer;
