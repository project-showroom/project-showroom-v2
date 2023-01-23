import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  (cardid: string) => {
    return axios.delete(`/api/projects/delete-project/${cardid}`);
  },
);

interface IInitialState {
  loading: boolean;
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  error: '',
};

const deleteProjectSlice: any = createSlice({
  name: 'deleteProject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default deleteProjectSlice.reducer;
