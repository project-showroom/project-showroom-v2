import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserType } from '../types/api-types';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (userId: string | undefined) => {
    if (!userId) return;
    return await axios.get(`/api/users/${userId}`).then((response) => {
      return response.data.data;
    });
  },
);

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
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUserType[]>) => {
        state.user = action.payload;
        state.error = '';
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { clearUser } = takeUserSlice.actions;

export default takeUserSlice.reducer;
