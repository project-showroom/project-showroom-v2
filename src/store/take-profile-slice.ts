import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import convertTokenId from '../utils/convert-token-id';

const token: any = getCookie('token');
const userid = convertTokenId(token);

export const getCurrentProfile = createAsyncThunk(
  'profile/getCurrentProfile',
  async () => {
    if (!userid) return console.log('No user id found');
    return await axios.get(`/api/profiles/${userid}`).then((response) => {
      return response.data.data;
    });
  },
);

interface IInitialState {
  loading: boolean;
  profile: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  profile: [],
  error: '',
};

const profileSlice: any = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrentProfile.fulfilled,
      (state, action: PayloadAction) => {
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
