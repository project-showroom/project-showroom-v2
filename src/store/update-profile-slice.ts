import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const token: any = getCookie('token');

export const postAndUpdateProfile = createAsyncThunk(
  'profile/putProfile',
  async (values: any) => {
    if (!token) return;
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
  updateProfile: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  updateProfile: [],
  error: '',
};

const updateProfileSlice: any = createSlice({
  name: 'updateProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAndUpdateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAndUpdateProfile.fulfilled,
      (state, action: PayloadAction) => {
        state.loading = false;
        state.updateProfile = action.payload;
        state.error = '';
      },
    );
    builder.addCase(postAndUpdateProfile.rejected, (state, action) => {
      state.loading = false;
      state.updateProfile = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default updateProfileSlice.reducer;