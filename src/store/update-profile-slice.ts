import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProfileType } from '../types/api-types';

export const postAndUpdateProfile = createAsyncThunk(
  'profile/putProfile',
  async (values: IProfileType) => {
    return await axios.put(
      `/api/profiles`,
      { data: values },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  },
);

interface IInitialState {
  loading: boolean;
  updateProfile: IProfileType[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  updateProfile: [],
  error: '',
};

const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAndUpdateProfile.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postAndUpdateProfile.rejected, (state, action) => {
      state.loading = false;
      state.updateProfile = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default updateProfileSlice.reducer;
