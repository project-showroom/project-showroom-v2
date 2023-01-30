import { createSlice } from '@reduxjs/toolkit';

import { deleteProject } from '../libs/api/projects';

interface IInitialState {
  loading: boolean;
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  error: '',
};

const deleteProjectSlice = createSlice({
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
