import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteProject } from '../libs/api/projects';
import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

interface IInitialState {
  loading: boolean;
  leftProjectsAfterDeleted: IAddProjectFormValues[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  leftProjectsAfterDeleted: [],
  error: '',
};

const deleteProjectSlice = createSlice({
  name: 'leftProjectsAfterDeleted',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteProject.fulfilled,
      (state, action: PayloadAction<IAddProjectFormValues[]>) => {
        state.loading = false;
        state.leftProjectsAfterDeleted = action.payload;
        state.error = '';
      },
    );
    builder.addCase(deleteProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default deleteProjectSlice.reducer;
