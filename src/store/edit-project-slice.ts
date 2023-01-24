import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

const token = getCookie('token');

export const getCardProject = createAsyncThunk(
  'projects/edit-project/[cardid]',
  async (cardid: string | string[]) => {
    if (!token) return;
    return await axios
      .get(`/api/projects/edit-project/${cardid}`)
      .then((response) => {
        return response.data.data[0];
      });
  },
);

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
    builder.addCase(getCardProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCardProject.fulfilled,
      (state, action: PayloadAction<IAddProjectFormValues[]>) => {
        state.loading = false;
        state.editProject = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getCardProject.rejected, (state, action) => {
      state.loading = false;
      state.editProject = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default editProjectSlice.reducer;
