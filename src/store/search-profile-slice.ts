import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getSearchProfile } from '../libs/api/profile';
import { IProfileType } from '../types/api-types';

interface IInitialState {
  loading: boolean;
  searchProfile: IProfileType[];
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  searchProfile: [],
  error: '',
};

const searchProfileSlice = createSlice({
  name: 'searchProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchProfile.fulfilled,
      (state, action: PayloadAction<IProfileType[]>) => {
        state.loading = false;
        state.searchProfile = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getSearchProfile.rejected, (state, action) => {
      state.loading = false;
      state.searchProfile = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default searchProfileSlice.reducer;
