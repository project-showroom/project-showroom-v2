import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { editCurrentProject } from '../libs/api/projects';
import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

interface IInitialState {
  loading: boolean;
  editProject: IAddProjectFormValues[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  editProject: [],
  error: '',
};

const editProjectSlice = createSlice({
  name: 'editProject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editCurrentProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editCurrentProject.fulfilled,
      (state, action: PayloadAction<IAddProjectFormValues[]>) => {
        state.loading = false;
        state.editProject = action.payload;
        state.error = '';
      },
    );
    builder.addCase(editCurrentProject.rejected, (state, action) => {
      state.loading = false;
      state.editProject = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default editProjectSlice.reducer;
