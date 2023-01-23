import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import convertTokenId from '../utils/convert-token-id';

const token = getCookie('token');
const userId = convertTokenId(token);

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  if (!userId) return;
  return axios.get(`/api/users/${userId}`).then((response) => {
    return response.data.data;
  });
});

interface IInitialState {
  loading: boolean;
  user: any;
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  user: [],
  error: '',
};

const takeUserSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.loading = false;
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { clearUser } = takeUserSlice.actions;

export default takeUserSlice.reducer;
