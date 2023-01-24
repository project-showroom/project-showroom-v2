import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

export const allProjects = createAsyncThunk(
  'projects/getAllProjects',
  async (username: string | string[]) => {
    return await axios.get(`/api/projects/${username}`).then((response) => {
      return response.data.data;
    });
  },
);

interface IInitialState {
  loading: boolean;
  projects: IAddProjectFormValues[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  projects: [],
  error: '',
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      allProjects.fulfilled,
      (state, action: PayloadAction<IAddProjectFormValues[]>) => {
        state.loading = false;
        state.projects = action.payload;
        state.error = '';
      },
    );
    builder.addCase(allProjects.rejected, (state, action) => {
      state.loading = false;
      state.projects = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default projectSlice.reducer;
