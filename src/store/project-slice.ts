import { createSlice } from '@reduxjs/toolkit';

import { createProject } from '../libs/api/projects';
import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

interface IInitialState {
  loading: boolean;
  project: IAddProjectFormValues[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  project: [],
  error: '',
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProject.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createProject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default projectSlice.reducer;
