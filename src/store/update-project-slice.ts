import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

export const updateCardProject = createAsyncThunk(
  'projects/put/[cardid]',
  async (data: {
    values?: IAddProjectFormValues;
    cardid?: string | string[];
  }) => {
    const { values, cardid } = data;
    if (!cardid) return;
    return await axios.put(
      `/api/projects/edit-project/${cardid}`,
      { data: { ...values } },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  },
);

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
    builder.addCase(updateCardProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCardProject.rejected, (state, action) => {
      state.loading = false;
      state.updateProject = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default updateProjectSlice.reducer;
