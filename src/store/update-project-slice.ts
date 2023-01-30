import { createSlice } from '@reduxjs/toolkit';

import { updateProject } from '../libs/api/projects';
import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

interface IInitialState {
  loading: boolean;
  updateProject: IAddProjectFormValues[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  updateProject: [],
  error: '',
};

const updateProjectSlice = createSlice({
  name: 'updateProject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProject.rejected, (state, action) => {
      state.loading = false;
      state.updateProject = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default updateProjectSlice.reducer;
