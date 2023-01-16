import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import convertTokenId from '../utils/convert-token-id';

const token = getCookie('token');
const userId = convertTokenId(token);

export const createProject = async (value: any) => {
  if (!userId) return;
  await axios.post(`http://localhost:3000/api/projects`, value);
};

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
  reducers: {
    sendProject: (state, action) => {
      state.loading = true;
      state.project = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(createProject.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(createProject.fulfilled, (state, action: PayloadAction) => {
  //     state.loading = false;
  //     state.project = action.payload;
  //     state.error = '';
  //   });
  //   builder.addCase(createProject.rejected, (state, action) => {
  //     state.loading = false;
  //     state.project = [];
  //     state.error = action.error.message || 'Something went wrong';
  //   });
  // },
});

export const { sendProject } = projectSlice.actions;

export default projectSlice.reducer;
