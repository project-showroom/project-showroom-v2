import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IAddProjectFormValues } from '../types/element-types/form-elements-types';
import convertTokenId from '../utils/convert-token-id';

const token = getCookie('token');
const userId = convertTokenId(token);

export const createProject = createAsyncThunk(
  'project/postProject',
  async (value: IAddProjectFormValues) => {
    if (!userId) return;
    return await axios.post(`/api/projects`, value);
  },
);

interface IInitialState {
  loading: boolean;
  project: any;
  error: string;
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
