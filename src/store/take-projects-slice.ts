import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const token = getCookie('token');

export const allProjects = createAsyncThunk(
  'projects/getAllProjects',
  async (username: any) => {
    if (!token) return;
    return await axios
      .get(`http://localhost:3000/api/projects/${username}`)
      .then((response) => {
        return response.data.data;
      });
  },
);

interface IInitialState {
  loading: boolean;
  projects: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  projects: [],
  error: '',
};

const projectSlice: any = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allProjects.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.projects = action.payload;
      state.error = '';
    });
    builder.addCase(allProjects.rejected, (state, action) => {
      state.loading = false;
      state.projects = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;