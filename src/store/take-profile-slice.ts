import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IProfileType } from '../types/api-types';
import convertTokenId from '../utils/convert-token-id';

const token: any = getCookie('token');
const userid = convertTokenId(token);

export const getCurrentProfile = createAsyncThunk(
  'profile/getCurrentProfile',
  async () => {
    if (!userid) return;
    return await axios.get(`/api/profiles/${userid}`).then((response) => {
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
