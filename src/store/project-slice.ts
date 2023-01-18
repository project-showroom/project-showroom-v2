import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import convertTokenId from '../utils/convert-token-id';

// const allProjectsOfUser:any = [];

const token = getCookie('token');
const userId = convertTokenId(token);

export const createProject = createAsyncThunk(
  'project/postProject',
  async (value: any) => {
    if (!userId) return;
    return await axios.post(`/api/projects`, value);
  },
);

interface IInitialState {
  loading: boolean;
  project: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  project: [],
  error: '',
};

const projectSlice: any = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProject.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.project = action.payload;
      state.error = '';
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default projectSlice.reducer;
