import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateCardProject = createAsyncThunk(
  'projects/put/[cardid]',
  async (data: any) => {
    if (!data.cardid) return;
    return await axios.put(
      `/api/projects/edit-project/${data.cardid}`,
      { data: { ...data.values } },
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
  updateProject: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  updateProject: [],
  error: '',
};

const updateProjectSlice: any = createSlice({
  name: 'updateProject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCardProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateCardProject.fulfilled,
      (state, action: PayloadAction) => {
        state.loading = false;
        state.updateProject = action.payload;
        state.error = '';
      },
    );
    builder.addCase(updateCardProject.rejected, (state, action) => {
      state.loading = false;
      state.updateProject = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default updateProjectSlice.reducer;
