import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllProjects } from '../libs/api/projects';
import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

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
    builder.addCase(getAllProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllProjects.fulfilled,
      (state, action: PayloadAction<IAddProjectFormValues[]>) => {
        state.loading = false;
        state.projects = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getAllProjects.rejected, (state, action) => {
      state.loading = false;
      state.projects = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default projectSlice.reducer;
